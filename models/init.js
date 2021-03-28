const mongoose = require('mongoose');

//Schemas
const userModelSchema = require('./userModel');

//models
const userModel = mongoose.model('user', userModelSchema);

module.exports = { userModel };
