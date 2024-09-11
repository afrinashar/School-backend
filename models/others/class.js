const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  section: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true }, // Homeroom teacher
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
