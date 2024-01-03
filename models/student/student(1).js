const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const studentSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true,"please enter name"],
    minlength:8
  },
  email: {
    type: String,
    required: [true,"please enter email"],
      unique:true,
      lowercase: true,
      validator:[validator.isEmail,"please enter a valid email"]
  },
  confirmPassword: {
    type: String,
    required: [true,"please enter name"],
    minlength:8,
    validator:function(val){
      return val == this.password;
    },
    message:'password and confirm password  not match'
  },
}, { timestamps: true });
 studentSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next();

  //encrypt the password before save it
  this.password = await bcrypt.hash(this.password,16);
  this.confirmPassword=undefined
  next();
 })
module.exports = mongoose.model('student', studentSchema);  