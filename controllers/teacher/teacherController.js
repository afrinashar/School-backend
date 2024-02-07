const Teacher = require('../../models/teacher/teacherDetails');
const asyncHandler = require("express-async-handler");
// Controller actions
const createTeacher = asyncHandler( async (req, res) => {
  
    let teacher = await Teacher.findOne({
      rollNo: req.body.rollNoNo,
    });
    // if (user) {
    //   return res.status(400).json({
    //     success: false,
    //     message: " With This Enrollment Already Exists",
    //   });
    // }
    teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).send(teacher);
  } )

const getAllTeachers =  asyncHandler( async (req, res) => {
   
     
    const teacher = await Teacher.find({});
    if (!teacher) {
      return res
        .status(400)
        .json({ success: false, message: "No teacher Found" });
    }
    const data = {
      success: true,
      message: "teacher Details Found!",
 
    };
    res.send(teacher);
  } )

// Get a single Teacher by Teacher_id
const getTeacherById =  asyncHandler(async (req, res) => {
 
  
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: 'teacher not found' });
    }
    res.json(teacher);
  } )
// Update a Teacher by Teacher_id
const updateTeacher = asyncHandler( async (req, res) => {
 
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
    if (!teacher) {
      return res.status(404).json({ error: 'teacher not found' });
    }
    res.json(teacher);
  } )

  // Delete a teacher by Teacher_id
const deleteTeacher =  asyncHandler( async (req, res) => {
 
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json(teacher);
  } )
module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};
