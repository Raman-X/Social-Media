const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/authRoute");
const connectDb = require("./connection/database");

const PORT = process.env.PORT || 5080;

// Enable CORS for all origins (You can specify origins later if needed)
app.use(cors()); // Add this line

app.use(express.json()); // to parse req.body for POST, PUT, etc.

// Use the authentication routes
app.use("/api", authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server started at port ", PORT);
  connectDb();
});
