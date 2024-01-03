const express = require('express');
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  
} = require('../controllers/teacherController');

const router = express.Router();

router.route('/').post(createTeacher).get(getAllTeachers);
router.route('/:id').get(getTeacherById).put(updateTeacher).delete(deleteTeacher);


module.exports = router;