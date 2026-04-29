const hostingModel = require('../models/hosting');
const { validationResult } = require("express-validator");
const multer = require('multer');
const { storage } = require('../config/cloudinary');

// Configure multer for file upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check if the file is an image
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Add this to your exports
module.exports.upload = upload.single('Image'); // Note: 'image' matches the field name in FormData

module.exports.createHosting = async (req, res) => {
console.log('Received req.file:', req.file);
console.log('Received req.body:', JSON.stringify(req.body, null, 2));

  try {
    // Validate input from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    


    const { ownername, placename, address, contactno, location, price, room, email } = req.body;

    // Check required fields
    if (!ownername || !placename || !address || !contactno || !price || !room || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const isHostingAlready = await hostingModel.findOne({ email });
    if (isHostingAlready) {
      return res.status(400).json({ error: "Hosting already exists with this email" });
    }

    // Create hosting with image URL from Cloudinary
    const hosting = new hostingModel({
      ownername,
      placename,
      address,
      contactno,
      location,
      Image: req.file.path, // Cloudinary URL
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
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: "File size too large. Maximum 10MB allowed." });
      }
    }
    
    // Handle other errors
    res.status(500).json({ error: err.message });
  }
};

module.exports.getHosting = async (req, res) => {
  try {
    const hostings = await hostingModel.find();
    res.json(hostings);
  } catch (err) {
    console.error("Error fetching hostings:", err);
    res.status(500).json({ error: err.message });
  }
};