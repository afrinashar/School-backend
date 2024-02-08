const mongoose = require("mongoose");

const Class = new mongoose.Schema({
  class: {
    type: String,
   },
  section: {
    type: String,
    
  },
}, { timestamps: true });

module.exports = mongoose.model("Class", Class);