const express = require("express");
const { logout, login, signup } = require("../controllers/authController");
const router = express.Router();

// Import the token verification middleware
const verifyToken = require("../middleware/verifyToken");

// Define the signup and login routes
router.post("/signup", signup);
router.post("/login", login);

// Define a protected route, for example, /dashboard
router.get("/dashboard", verifyToken, (req, res) => {
  // Access the user object from the decoded token
  const user = req.user; // This was added by the middleware

  res.json({
    message: "Welcome to your dashboard",
    user: user, // Send back user data to the frontend (if needed)
  });
});

// Optionally, define a logout route
// This route just clears the token on the frontend (no need for a backend route)
router.post("/logout", (req, res) => {
  res.json({ message: "You have logged out" });
});

module.exports = router;
