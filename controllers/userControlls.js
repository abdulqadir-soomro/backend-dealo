const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// User Signup
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, gender, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      password: hashedPassword
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET);

    newUser.token = token;
    await newUser.save();

    res.status(201).json({ message: "User created", token });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    user.token = token;
    await user.save();

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// User Logout
const logout = async (req, res) => {
  try {
    const userId = req.userId;

    await User.findByIdAndUpdate(userId, { $unset: { token: "" } });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "Logout error" });
  }
};

module.exports = { signup, login, logout };
