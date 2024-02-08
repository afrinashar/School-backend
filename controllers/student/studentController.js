const Student = require("../../models/student/studentDetails");
const asyncHandler = require("express-async-handler");
// Controller actions
const createStudent =asyncHandler( async (req, res) => {
   
    let student = await Student.findOne({
      rollNo: req.body.rollNo,
    });
   
    // const user = req.body.rollNo
    // if (user) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Student With This Enrollment Already Exists",
    //   });
    // }
    student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  }  
   
)
 
const getAllStudents = asyncHandler(async (req, res) => {
 
    const students = await Student.find({});
    if (!students) {
      return res
        .status(400)
        .json({ success: false, message: "No Student Found" });
    }
    const data = {
      success: true,
      message: "Student  Found!",
       students
    };
    res.send(data);
})

// Get a single student by student_id
const getStudentById =asyncHandler( async (req, res) => {
  
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(2000).json({ success: true, data: student, message:success });
  } )
// Update a student by student_id
const updateStudent = asyncHandler(async (req, res) => {
 
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // res.json(student);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(2001).json({ success: true, data: student });
  })

// Delete a student by student_id
const deleteStudent = asyncHandler( async (req, res) => {
  
    const student = await Student.findByIdAndDelete(req.params.id);
    // res.json(deletedStudent);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } )
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
