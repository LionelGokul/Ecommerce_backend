const express = require('express');
const userRoutes = express.Router();
const { getUSers, createUser } = require('../controllers/userController');
const validateRequestBody = require('../middleware/validateReqBodyMiddleware');
const {
  createUserValidation,
} = require('../controllers/validations/userControllerValidator');

console.log(232);

userRoutes.get('/', [], getUSers);

userRoutes.use(validateRequestBody);
userRoutes.post('/new', [...createUserValidation], createUser);

module.exports = userRoutes;
