const express = require('express');
const router = express.Router();
const {createHosting , getHosting} = require('../controllers/HostController');
  // Make sure to import your Hosting model

// Create hosting (Admin only)
router.post('/create', createHosting);

// Get all hostings
router.get('/all', getHosting);

// Get hosting by ID
router.get('/:id', async (req, res) => {
  try {
    const hosting = await Hosting.findById(req.params.id).populate("admin", "fullname email");
    if (!hosting) return res.status(404).json({ message: "Hosting not found" });
    res.json(hosting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

// Get hostings by admin ID
router.get('/admin/:adminId', async (req, res) => {
  try {
    const hostings = await Hosting.find({ admin: req.params.adminId }).populate("admin", "fullname email");
    res.json(hostings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;