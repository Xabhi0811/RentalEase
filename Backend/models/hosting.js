const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  placename: {
    type: String,
    required: true,
    maxlength: [18, 'name of place must be in 18 characters long']
  },

  address: {
    type: String,
    required: true
  },

  contactno: {
    type: Number,
    required: true
  },

  location: {
    type: String, 
    required: true
  },

  Image: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  room: {
    type: Number
  },

  
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin", 
    required: true
  }
});

const hostingModel = mongoose.model('hosting', hostSchema);
module.exports = hostingModel;
