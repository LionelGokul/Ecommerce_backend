const { getAllUsers, insertUser } = require('../repositories/userRepository');

const getUSers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await insertUser(req.body);
    res.status(200).json({ users: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUSers, createUser };
