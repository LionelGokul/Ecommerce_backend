const { userModel } = require('../models/init');

const getAllUsers = async () => {
  const users = await userModel.find({});
  return users;
};

const insertUser = async user => {
  const newUser = new userModel({
    name: user.name,
    password: user.password,
    phoneNumber: user.phoneNumber,
    email: user.email,
    profilePic: user.profilePic || '',
  });
  await newUser.save();
  return newUser;
};

module.exports = { getAllUsers, insertUser };
