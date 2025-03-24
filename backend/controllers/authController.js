const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { name, username, email, password } = req.body;

  const usernameExists = await User.findOne({ username: username });
  if (usernameExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  const emailExists = await User.findOne({ email: email });
  if (emailExists) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
  });
};

exports.login = async (req, res) => {
  res.send("login");
};
exports.logout = async (req, res) => {
  res.send("logout");
};
