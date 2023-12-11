const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    enrollmentNo: {
      type: Number,
      required: true,
    },
    internal: {
      type: Map,
    },
    external: {
      type: Map,
    }
  }, { timestamps: true });
  

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
