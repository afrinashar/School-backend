const mongoose = require('mongoose');

const feestudentSchema = new mongoose.Schema({
  tution: {
    type: Number,
    required: true,
  },
  books: {
    type: Number,
    required: true,
  }, others: {
    type: Number,
    required: true,
  }, paid: {
    type: Boolean,
    required: true,
  } 
}, { timestamps: true });

module.exports = mongoose.model('fee', feeSchema);