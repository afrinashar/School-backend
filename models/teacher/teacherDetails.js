const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
     
   teacher_id:  mongoose.Schema.Types.ObjectId ,
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
