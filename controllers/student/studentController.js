const Student = require("../../models/student/studentDetails");
const asyncHandler = require("express-async-handler");

// Controller actions
const createStudent = asyncHandler(async (req, res) => {
  let student = await Student.findOne({ rollNumber: req.body.rollNumber });
  
  if (student) {
    return res.status(400).json({
      success: false,
      message: "Student with this Roll Number already exists",
    });
  }

  student = new Student(req.body);
  await student.save();
  res.status(201).json({ success: true, data: student });
});

const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({});
  res.status(200).json({ success: true, data: students });
});

const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.status(200).json({ success: true, data: student });
});

const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.status(200).json({ success: true, data: student });
});

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  res.status(200).json({ success: true, message: "Student deleted" });
});

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
