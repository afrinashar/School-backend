const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../../controllers/student/studentController");
 const studentAuth= require("../")
const router = express.Router();

router.route("/").post(createStudent).get(studentAuth.protect,  getAllStudents);
router
  .route("/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
