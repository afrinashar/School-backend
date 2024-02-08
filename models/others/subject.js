const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  class: {
    type: String,
   },
  section: {
    type: String,
    
  },
}, { timestamps: true });

module.exports = mongoose.model("subjects", Subject);