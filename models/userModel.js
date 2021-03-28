const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userModelSchema = new schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePic: String,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

userModelSchema.pre('save', function (next) {
  let user = this;
  // Generate a password hash when the password changes (or a new password)
  if (!user.isModified('password')) return next();
  // Generate hash
  bcrypt.hash(user.password, 5, function (err, hash) {
    // Store hash in your password DB.
    if (err) return next(err);
    // Overwriting plaintext passwords with hash
    user.password = hash;
    next();
  });
});

userModelSchema.methods.comparePassword = function (userPassword, cb) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = userModelSchema;
