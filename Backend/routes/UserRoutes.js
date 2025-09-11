const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// SIGNIN route
router.post('/signin', [
  body('fullname.firstname')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long'),

  body('fullname.lastname')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Last name must be at least 3 characters long'),

  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  body('Phoneno')
    .isLength({ min: 10, max: 10 })
    .withMessage('Phone number must be exactly 10 digits long'),

  body('occupationwithMess')
    .notEmpty()
    .withMessage('Occupation is required'),
], (req, res) => {
  res.send("Signin route working with validation");
});

// LOGIN route
router.post('/login', [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
], (req, res) => {
  res.send("Login route working with validation");
});

// LOGOUT route
router.get('/logout', (req, res) => {
  res.send("Logged out successfully");
});

module.exports = router;
