 const mongoose = require('mongoose')


 const AdminSchema = new mongoose.Schema({
      fullname:{
        type: String,
        required: true,
        maxlength: [18 , 'name of place must be in 18 charcters long ']
        
      },

      age:{
        type: Number,
         required: true
      },

      contactno:{
        type: Number,
      },
        
      Image: {
      type: String,
      required: true
      }

 })

 