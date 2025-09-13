// controllers/bookingController.js
const Booking = require("../models/booking");
const Hosting = require("../models/hosting");

module.exports.createBooking = async (req, res) => {
  try {
    const { hostingId, checkIn, checkOut, guests } = req.body;

    // get hosting details
    const hosting = await Hosting.findById(hostingId);
    if (!hosting) {
      return res.status(404).json({ error: "Hosting not found" });
    }

    // calculate total price (example: price * number of nights)
    const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    const totalPrice = hosting.price * days;

    const booking = new Booking({
      user: req.user.id, // user should be logged in
      hosting: hostingId,
      checkIn,
      checkOut,
      guests,
      totalPrice
    });

    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
