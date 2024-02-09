const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
     _id:false,
   teacher_id:  mongoose.Schema.Types.ObjectId ,
  name: { type: String, required: true },
  age: { type: Number, required: true },
  
  address: {
      type: String, required: true  
  } , role:{type:String},
  phone: { type: Number, required: true },
  email:{ type:String, required: true,
    unique: [true, "Please provide an different e-mail"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide a valid e-mail",
    ],}
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
