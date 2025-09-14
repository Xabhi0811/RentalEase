const hostingModel = require('../models/hosting');
const { validationResult } = require("express-validator");

module.exports.createHosting = async (req, res) => {
  try {
    // Validate input from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { ownername, placename, address, contactno, location, Image, price, room , email } = req.body;

    // Check required fields (optional if already handled by express-validator)
    if (!ownername || !placename || !address || !contactno || !Image || !price || !room || !email ) {
      return res.status(400).json({ error: "All fields are required" });
    }
  const isHostingAlready = await hostingModel.findOne({ email });
    if (isHostingAlready) {
      return res.status(400).json({ error: "Hosting already exists with this email" });
    }
    // Check if hosting already exists by email
   

    // Create hosting
    const hosting = new hostingModel({
      ownername,
      placename,
      address,
      contactno,
      location,
      Image,
      price,
      room,
      email
     
    });

    await hosting.save();

    res.status(201).json({
      message: "Hosting created successfully",
      hosting
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports.getHosting = async (req, res) => {
  try {
    const hostings = await hostingModel.find(); // no populate
    res.json(hostings);
  } catch (err) {
    console.error("Error fetching hostings:", err); // debug log
    res.status(500).json({ error: err.message });
  }
};

