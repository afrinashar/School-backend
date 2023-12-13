const Student = require("../../models/student/studentDetails");

// Controller actions
const createStudent = async (req, res) => {
  try {
    let student = await Student.findOne({
      rollNo: req.body.rollNoNo,
    });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Student With This Enrollment Already Exists",
      });
    }
    student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    if (!students) {
      return res
        .status(400)
        .json({ success: false, message: "No Student Found" });
    }
    const data = {
      success: true,
      message: "Student Details Found!",
      user,
    };
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single student by student_id
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
// Update a student by student_id
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // res.json(student);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Delete a student by student_id
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    // res.json(deletedStudent);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
