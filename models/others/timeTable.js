const mongoose = require("mongoose");

const TimeTable = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  classOne: {
    type: string,
    required: true,
  }, classTwo: {
    type: string,
    required: true,
  }, classThree: {
    type: string,
    required: true,
  }, classFour: {
    type: string,
    required: true,
  }, classFive: {
    type: string,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Timetable", TimeTable);
