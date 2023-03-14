const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  age: {
    type: Number,
    required: [true, "Please Enter Age"],
  },
  gender: {
    type: String,
    required: [true, "Please Enter gender"],
  },
  schemes: {
    type: String,
    default: "",
  },
  NGO: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  NGOName: {
    type: String,
  },
});

module.exports = mongoose.model("Child", childSchema);
