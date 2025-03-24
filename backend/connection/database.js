const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect(process.env.URI)
    .then((con) => console.log("Connected to Database!", con.connection.host))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDb;
