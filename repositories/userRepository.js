const { userModel } = require('../models/init');
const asyncHandler = require('express-async-handler');

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

const FindUserbyId = async id => {
  const user = await userModel.findById(id);
  try {
    if (user) return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, insertUser, FindUserbyId };
