const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade_level: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true }
  },
  marks: {
    tamil: { type: String, required: true },
    english: { type: String, required: true },
    mathmaticals: { type: String, required: true },
    science: { type: String, required: true },
    socialscience: { type: String, required: true }
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
