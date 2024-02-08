const express = require("express");
const {
  addSubject,
  getSubject,

  deleteSubject,
} = require("../../controllers/other/subjectController");

const router = express.Router();

router.route("/").post(addSubject).get(getSubject);
router
  .route("/:id")
 
  .delete(deleteSubject);

module.exports = router;