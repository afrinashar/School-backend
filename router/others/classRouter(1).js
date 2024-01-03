const express = require("express");
const {
  deleteClass,
  addClass,
  getClass,
  getClassById,
  updateClass,
} = require("../../controllers/other/classController");

const router = express.Router();

router.route("/").post(addClass).get(getClass);
router
  .route("/:id")
  .get(getClassById)
  .put(updateClass)
  .delete(deleteClass);

module.exports = router;