// models/booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  fullname: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  adharno: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hosting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hosting",
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
