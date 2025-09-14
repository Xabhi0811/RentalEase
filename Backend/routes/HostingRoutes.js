const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const { body } = require("express-validator");
const hostingModel = require('../models/hosting');
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
    body("price").isNumeric().withMessage("Price must be a number"),
    body("email").isEmail().withMessage("it must be email "),
    body("room").isNumeric().withMessage("Room count must be a number"),
    body("Image").notEmpty().withMessage("Image URL is required"),
  ], 
  createHosting
);

// Get all hostings
router.get('/all', getHosting);



// Get hosting by ID

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid property ID" });
    }

    const hosting = await Hosting.findById(id);
    if (!hosting) return res.status(404).json({ message: "Hosting not found" });

    res.json(hosting);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Delete hosting by ID
router.delete('/:id', async (req, res) => {
  try {
    const hosting = await hostingModel.findByIdAndDelete(req.params.id);
    if (!hosting) return res.status(404).json({ message: "Hosting not found" });
    res.json({ message: "Hosting deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;