const { validationResult } = require('express-validator');

const validateRequestBody = (req, res, next) => {
  try {
    const errors = validationResult(req);
    // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

module.exports = validateRequestBody;
