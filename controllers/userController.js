const asyncHandler = require('express-async-handler');
const {
  getAllUsers,
  insertUser,
  FindUserbyId,
} = require('../repositories/userRepository');

// get all users
const getUSers = asyncHandler(async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// create user
const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await insertUser(req.body);
    res.status(200).json({ users: user });
  } catch (err) {
    // res.status(500).json({ error: err.message });
    //change it to customized message
    res.status(500);
    throw new Error(
      `user creation of ${req.body.name} failed please provide valid info`
    );
  }
});

// get single by id
const getUserbyId = asyncHandler(async (req, res) => {
  try {
    const reqUser = await FindUserbyId(req.params.id);
    res.status(200).json({ requestedUser: reqUser });
  } catch (err) {
    res.status(500);
    throw new Error('User not found');
  }
});

module.exports = { getUSers, createUser, getUserbyId };
