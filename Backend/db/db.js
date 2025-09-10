
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/rentalease", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
