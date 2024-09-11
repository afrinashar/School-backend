const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
  },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }, 
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
