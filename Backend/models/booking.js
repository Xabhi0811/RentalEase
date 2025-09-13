const mongoose = require('mongoose');
const {user} = require('../models/user')

const BookingSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: [18, 'Name of place must be in 18 characters long']
  },

  age: {
    type: Number,
    required: true
  },

  contactno: {
    type: Number,
  },

  Image: {
    type: String,
    required: true
  },

  // 🔗 Reference to User model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // must match model name in userModel
    required: true
  }
});

const bookingModel = mongoose.model('booking', BookingSchema);
module.exports = bookingModel;
