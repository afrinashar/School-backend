const express = require("express");
const {
 addMarks,
  getAllMarks,
  getMarksById,
  updateMarks,
  deleteMarks,
} = require("../../controllers/other/markController");

const router = express.Router();

router.route("/").post(addMarks).get(getAllMarks);
router
  .route("/:id")
  .get(getMarksById)
  .put(updateMarks)
  .delete(deleteMarks);

module.exports = router;