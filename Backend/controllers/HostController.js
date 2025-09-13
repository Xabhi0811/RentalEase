const Admin = require('../models/admin');


module.exports.createHosting = async (req, res) => {
  try {
    const { adminId, placename, address, contactno, location, Image, price, room } = req.body;

    // Check if admin exists
    const admin = await Admin.findById(adminId);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    // Create hosting linked to admin
    const hosting = new Hosting({
      placename,
      address,
      contactno,
      location,
      Image,
      price,
      room,
      admin: admin._id
    });

    await hosting.save();
    res.status(201).json({ message: "Hosting created successfully", hosting });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports.getHosting = async (req, res) => {
  try {
    const hostings = await Hosting.find().populate("admin", "fullname email");
    res.json(hostings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
