const mongoose = require('mongoose');
const Student = require('../student/student'); // Path based on your file structure

const marksSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  internal: {
    tamil: { type: Number, required: true },
    english: { type: Number, required: true },
    mathematics: { type: Number, required: true },
    science: { type: Number, required: true },
    socialScience: { type: Number, required: true }
  },
  external: {
    tamil: { type: Number, required: true },
    english: { type: Number, required: true },
    mathematics: { type: Number, required: true },
    science: { type: Number, required: true },
    socialScience: { type: Number, required: true }
  }
}, { timestamps: true });

const Marks = mongoose.model('Marks', marksSchema);
module.exports = Marks;
