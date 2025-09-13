const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const {createHosting , getHosting} = require('../controllers/HostController');
  // Make sure to import your Hosting model

// Create hosting (Admin only)
router.post(
  "/create",
  [
    body("ownername").notEmpty().withMessage("Owner name is required"),
    body("placename").notEmpty().withMessage("Place name is required"),
    body("address").notEmpty().withMessage("Address is required"),
    body("contactno").isNumeric().withMessage("Contact number must be numeric"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("room").isNumeric().withMessage("Room count must be a number"),
    body("Image").notEmpty().withMessage("Image URL is required"),
  ],
  createHosting
);

// Get all hostings
router.get('/all', getHosting);



// Update hosting by ID
router.put('/:id', async (req, res) => {
  try {
    const { placename, address, contactno, location, Image, price, room } = req.body;
    
    const hosting = await Hosting.findByIdAndUpdate(
      req.params.id,
      { placename, address, contactno, location, Image, price, room },
      { new: true, runValidators: true }
    ).populate("admin", "fullname email");

    if (!hosting) return res.status(404).json({ message: "Hosting not found" });
    
    res.json({ message: "Hosting updated successfully", hosting });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete hosting by ID
router.delete('/:id', async (req, res) => {
  try {
    const hosting = await Hosting.findByIdAndDelete(req.params.id);
    if (!hosting) return res.status(404).json({ message: "Hosting not found" });
    res.json({ message: "Hosting deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;