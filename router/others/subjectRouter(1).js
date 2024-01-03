const express = require("express");
const {
  createSubject,
  getSubject,
  getSubjectById,
  updateSubject,
  deleteSubject,
} = require("../../controllers/other/subjectController");

const router = express.Router();

router.route("/").post(createSubject).get(getSubject);
router
  .route("/:id")
  .get(getSubjectById)
  .put(updateSubject)
  .delete(deleteSubject);

module.exports = router;