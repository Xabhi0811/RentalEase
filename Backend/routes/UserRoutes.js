const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const router = require("../../../uber-app/Backend/routes/captain.routes")


router.post('Sigin',[
   body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('Phoneno').isLength({min: 10, max: 10}).withMessage('Password must be at least 6 characters long'),
])
