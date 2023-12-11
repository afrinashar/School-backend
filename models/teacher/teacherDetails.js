const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   teacher_id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true }
  } 
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
