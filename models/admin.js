// models/admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('Admin', adminSchema);

// Repeat the above code for student.js and teacher.js with appropriate schema.
