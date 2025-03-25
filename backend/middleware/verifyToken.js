const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data (decoded token) to the request object
    req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;
