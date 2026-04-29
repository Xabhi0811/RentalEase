const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware"); 

const {createBooking} = require("../controllers/BookingController");


router.post("/create",  authMiddleware, createBooking);

module.exports = router;