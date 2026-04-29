 const express  = require("express")
 const mongoose = require("mongoose")
 const dotenv = require("dotenv").config();
 const connectDB = require("./db/db")
 const cors = require("cors")
 const  userRoutes= require('./routes/UserRoutes')
 const  adminRoutes= require('./routes/AdminRoutes')
 const bookingRoutes = require("./routes/BookingRoutes");
 const hostingRoutes = require('./routes/HostingRoutes');
 const cookieParser = require("cookie-parser");
 const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}


 const app= express()

 app.use(cors())
 connectDB()
 
 app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack || err);
  res.status(500).json({ error: err.message || 'An unexpected error occurred' });
});
 app.use(express.json());
 app.use(cookieParser());
 app.use(express.urlencoded({ extended: true}));
 
 

 app.get("/",(req,res)=>{
   res.send("MongoDB connected with .env 🚀");
 })

 app.use('/users',  userRoutes)
 app.use('/admin', adminRoutes )
 app.use("/booking", bookingRoutes);
app.use('/hosting', hostingRoutes);


 const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

