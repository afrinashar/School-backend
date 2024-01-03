// models/admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  loginid: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);

// Repeat the above code for student.js and teacher.js with appropriate schema.
