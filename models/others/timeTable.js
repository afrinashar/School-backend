const mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }, // Class reference
  subjects: [
    {
      period: { type: Number, required: true }, // Period number (e.g. 1st period)
      subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }, // Subject reference
    }
  ],
}, { timestamps: true });

const Timetable = mongoose.model('Timetable', timeTableSchema);
module.exports = Timetable;
