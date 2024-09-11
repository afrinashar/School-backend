const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }, // Reference to Class
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true }, // Subject teacher
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
