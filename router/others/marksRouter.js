const express = require("express");
const {
  createMarks,
  getMarks,
  getMarksById,
  updateMarks,
  deleteMarks,
} = require("../../controllers/other/markController");

const router = express.Router();

router.route("/").post(createMarks).get(getMarks);
router
  .route("/:id")
  .get(getMarksById)
  .put(updateMarks)
  .delete(deleteMarks);

module.exports = router;