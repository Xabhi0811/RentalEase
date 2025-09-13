const adminModel = require('../models/admin');
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerAdmin = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { email, password, fullname } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const isUserAlready = await adminModel.findOne({ email });
    if (isUserAlready) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new adminModel({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.cookie('token', token);
    res.status(200).json({ token, user: admin });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login error" });
  }
};
