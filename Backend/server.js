 const express  = require("express")
 const mongoose = require("mongoose")
 const dotenv = require("dotenv").config();
 const connectDB = require("./db/db")
 const cors = require("cors")

 const app= express()

 app.use(cors())
 connectDB()

 app.get("/",(req,res)=>{
   res.send("MongoDB connected with .env 🚀");
 })

 const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

