const mongoose = require("mongoose");

const Class = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Class", Class);