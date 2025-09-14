const mongoose = require('mongoose');


const hostSchema = new mongoose.Schema({
   ownername:{
     type: String,
     required: true,
     minlength: [3, 'name of place must be in 3 characters long']
   },

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
  email: { type: String, required: true, unique: true }




  
});

const hostingModel = mongoose.model('hosting', hostSchema);
module.exports = hostingModel;
