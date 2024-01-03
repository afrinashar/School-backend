const express = require("express");
const {
  createTimeTable,
  getTimeTable,
  getTimeTableById,
  updateTimeTable,
  deleteTimeTable,
} = require("../../controllers/other/timeTableController");

const router = express.Router();

router.route("/").post(createTimeTable).get(getTimeTable);
router
  .route("/:id")
  .get(getTimeTableById)
  .put(updateTimeTable)
  .delete(deleteTimeTable);

module.exports = router;