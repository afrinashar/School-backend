const Teacher = require('../../models/teacher/teacherDetails');

// Controller actions
const createTeacher = async (req, res) => {
  try {
    let teacher = await Teacher.findOne({
      rollNo: req.body.rollNoNo,
    });
    if (user) {
      return res.status(400).json({
        success: false,
        message: " With This Enrollment Already Exists",
      });
    }
    teacher = new teacher(req.body);
    await teacher.save();
    res.status(201).send(teacher);
  } catch (error) { 
    res.status(400).send(error);
  }
};

const getAllTeachers = async (req, res) => {
  try {
     
    const teacher = await Teacher.find({});
    if (!teacher) {
      return res
        .status(400)
        .json({ success: false, message: "No teacher Found" });
    }
    const data = {
      success: true,
      message: "teacher Details Found!",
      user,
    };
    res.send(teacher);
  } catch (error) {
    res.status(500).send(error);
  }
  
};

// Get a single Teacher by Teacher_id
const getTeacherById = async (req, res) => {
 
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: 'teacher not found' });
    }
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Update a Teacher by Teacher_id
const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
    if (!teacher) {
      return res.status(404).json({ error: 'teacher not found' });
    }
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  };

  // Delete a teacher by Teacher_id
const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  };
module.exports = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};
