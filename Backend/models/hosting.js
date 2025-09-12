 const mongoose = require('mongoose')


 const host = new mongoose.Schema({
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
           required: true
      },
        
      location:{
        type: Number,
        required: true

      },

      Image: {
      type: String,
      required: true
    },


    price:{  
      type: Number,
      required: true
    },
     
    room:{
      type: Number,

    }

 
   

 })

 