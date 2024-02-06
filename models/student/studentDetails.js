const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender:{type: String, required:true},
 
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: Number, required: true }
  }
 
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
