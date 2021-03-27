const { body } = require('express-validator');

const createUserValidation = [
  body('name', 'userName doesnt exists').exists(),
  body('password', 'password doesnt exists')
    .exists()
    .isLength({ min: 5 })
    .withMessage('password should be atleast 5 charcters'),
  body('phoneNumber', 'phone number doesnt exists')
    .exists()
    .isMobilePhone()
    .withMessage('invalid phone number'),
  body('email', 'Invalid email').exists().isEmail(),
  body('profilePic', 'Invalid profile pic').optional().isURL(),
];

module.exports = { createUserValidation };
