const express = require('express');
const userRoutes = express.Router();
const {
  getUSers,
  createUser,
  getUserbyId,
} = require('../controllers/userController');
const validateRequestBody = require('../middleware/validateReqBodyMiddleware');

const {
  createUserValidation,
} = require('../controllers/validations/userControllerValidator');

console.log(232);

userRoutes.get('/', [], getUSers);

userRoutes.use(validateRequestBody);
userRoutes.post('/new', [...createUserValidation], createUser);
userRoutes.get('/:id', getUserbyId);

module.exports = userRoutes;
