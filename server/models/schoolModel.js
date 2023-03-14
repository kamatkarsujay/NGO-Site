const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schemes: {
    type: String,
  },
});

module.exports = mongoose.model("School", schoolSchema);
