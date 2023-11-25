const Teacher = require('../models/teacherModel');

// Controller actions
const createTeacher = async (req, res) => {
  try {

    const teacher = new Teacher(req.body,{_id: new mongoose.Types.ObjectId()});
    await teacher.save();
    res.status(201).send(teacher);
  } catch (error) { 
    res.status(400).send(error);
  }
};

const getAllTeachers = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Sorting
    const sortField = req.query.sortBy || 'name';
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    const sortOptions = { [sortField]: sortOrder };

    // Search
    const searchQuery = req.query.search
      ? {
          $or: [
            { name: { $regex: new RegExp(req.query.search, 'i') } },
            { 'address.city': { $regex: new RegExp(req.query.search, 'i') } }
          ]
        }
      : {};

    const teacher = await Teacher.find(searchQuery)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
