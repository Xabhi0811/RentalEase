 const mongoose = require('mongoose')
 const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


 const AdminSchema = new mongoose.Schema({
      placename:{
        type: String,
        required: true,
        maxlength: [18 , 'name of place must be in 18 charcters long ']
        
      },

      address:{
        type: String,
         required: true
      },

      contactno:{
        type: Number,

      },
        
      location:{
        type: Number,
        required: true

      },

      Image: {
      type: String,
      required: true
    }

 
   

 })

 