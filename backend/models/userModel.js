const mongoose = require("mongoose");
// const { ObjectId } = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", schema);

module.exports = User;
