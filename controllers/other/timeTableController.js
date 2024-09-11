const TimeTable = require("../../models/others/timeTable");
const asyncHandler = require("express-async-handler");

const getTimeTable = asyncHandler(async (req, res) => {
  const timeTable = await TimeTable.find({});
  res.status(200).json({ success: true, data: timeTable });
});

const getTimeTableById = asyncHandler(async (req, res) => {
  const timeTable = await TimeTable.findById(req.params.id);
  if (!timeTable) {
    return res.status(404).json({ success: false, message: "Timetable not found" });
  }
  res.status(200).json({ success: true, data: timeTable });
});

const createTimeTable = asyncHandler(async (req, res) => {
  const existingTimeTable = await TimeTable.findOne({ code: req.body.code });
  
  if (existingTimeTable) {
    return res.status(400).json({ success: false, message: "Timetable already exists" });
  }

  const newTimeTable = new TimeTable(req.body);
  await newTimeTable.save();
  res.status(201).json({ success: true, data: newTimeTable });
});

const deleteTimeTable = asyncHandler(async (req, res) => {
  const timeTable = await TimeTable.findByIdAndDelete(req.params.id);
  if (!timeTable) {
    return res.status(404).json({ success: false, message: "Timetable not found" });
  }
  res.status(200).json({ success: true, message: "Timetable deleted" });
});
const updateTimeTable = asyncHandler(async (req, res) => {
  const timeTable = await TimeTable.findByIdAndUpdate(req.params.id);
  if (!timeTable) {
    return res.status(404).json({ success: false, message: "Timetable not found" });
  }
  res.status(200).json({ success: true, message: "Timetable deleted" });
});
module.exports = { getTimeTable,updateTimeTable, getTimeTableById, createTimeTable, deleteTimeTable };
