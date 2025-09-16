const Booking = require("../models/booking");
const Hosting = require("../models/hosting");

module.exports.createBooking = async (req, res) => {
  try {
    const { hostingId, checkIn, checkOut, guests, fullname, contactno, adharno, age } = req.body;

    // Validate required fields
    if (!hostingId || !checkIn || !checkOut || !guests || !fullname || !contactno || !adharno || !age) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get hosting details
    const hosting = await Hosting.findById(hostingId);
    if (!hosting) {
      return res.status(404).json({ error: "Hosting not found" });
    }

    // Calculate days
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({ error: "Check-out date must be after check-in date" });
    }

    const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = hosting.price * days;

    // Create booking
    const booking = new Booking({
      user: req.user.id,
      fullname,
      contactno,
      adharno,
      age,
      hosting: hostingId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      totalPrice,
    });

    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: {
        ...booking.toObject(),
        checkIn: booking.checkIn.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        checkOut: booking.checkOut.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        createdAt: booking.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        updatedAt: booking.updatedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      },
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Server error, please try again later" });
  }
};
