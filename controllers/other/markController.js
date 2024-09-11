const Marks = require("../../models/others/marks");
const Student = require("../../models/student/studentDetails");
const asyncHandler = require("express-async-handler");

const getAllMarks = asyncHandler(async (req, res) => {
  const student = await Student.findOne({ rollNumber: req.params.rollNumber });
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  const marks = await Marks.find({ student: student._id });
  res.status(200).json({ success: true, data: marks });
});

const getMarksById = asyncHandler(async (req, res) => {
  const marks = await Marks.findById(req.params.id);
  if (!marks) {
    return res.status(404).json({ success: false, message: "Marks not found" });
  }
  res.status(200).json({ success: true, data: marks });
});

const addMarks = asyncHandler(async (req, res) => {
  const marks = new Marks(req.body);
  await marks.save();
  res.status(201).json({ success: true, data: marks });
});

const updateMarks = asyncHandler(async (req, res) => {
  const marks = await Marks.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!marks) {
    return res.status(404).json({ success: false, message: "Marks not found" });
  }
  res.status(200).json({ success: true, data: marks });
});

const deleteMarks = asyncHandler(async (req, res) => {
  const marks = await Marks.findByIdAndDelete(req.params.id);
  if (!marks) {
    return res.status(404).json({ success: false, message: "Marks not found" });
  }
  res.status(200).json({ success: true, message: "Marks deleted" });
});

module.exports = { getAllMarks, getMarksById, addMarks, updateMarks, deleteMarks };
