const Teacher = require("../../models/teacher/teacherDetails");
const asyncHandler = require("express-async-handler");

const createTeacher = asyncHandler(async (req, res) => {
  let teacher = await Teacher.findOne({ email: req.body.email });
  
  if (teacher) {
    return res.status(400).json({
      success: false,
      message: "Teacher with this email already exists",
    });
  }

  teacher = new Teacher(req.body);
  await teacher.save();
  res.status(201).json({ success: true, data: teacher });
});

const getAllTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({});
  res.status(200).json({ success: true, data: teachers });
});

const getTeacherById = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  if (!teacher) {
    return res.status(404).json({ success: false, message: "Teacher not found" });
  }
  res.status(200).json({ success: true, data: teacher });
});

const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!teacher) {
    return res.status(404).json({ success: false, message: "Teacher not found" });
  }
  res.status(200).json({ success: true, data: teacher });
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findByIdAndDelete(req.params.id);
  if (!teacher) {
    return res.status(404).json({ success: false, message: "Teacher not found" });
  }
  res.status(200).json({ success: true, message: "Teacher deleted" });
});

module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
