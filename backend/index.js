const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/authRoute");
const connectDb = require("./connection/database");

const PORT = process.env.PORT || 5080;
app.use(express.json()); //to parse req.body for post put etc

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("server started at port ", PORT);
  connectDb();
});
