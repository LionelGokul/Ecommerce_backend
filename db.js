const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://debugLabs:password_11@cluster0.vkoci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection;

module.exports = mongoose.connection;
