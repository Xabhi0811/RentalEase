const User = require('../models/user');


module.exports.createBooking = async (req, res) => {
  try {
    const { userId, fullname, age, contactno, Image } = req.body;

    // check if user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // create booking linked to user
    const booking = new Booking({
      fullname,
      age,
      contactno,
      Image,
      user: user._id
    });

    await booking.save();

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
