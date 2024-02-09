const mongoose = require('mongoose');

const salerySchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  leaves: {
    type: Number,
    required: true,
  }, lossOfPay: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('salery', salerySchema);