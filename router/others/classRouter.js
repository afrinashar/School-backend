const express = require("express");
const {
  createClass,
  getClass,
  getClassById,
  updateClass,
  deleteClass,
} = require("../../controllers/other/classController");

const router = express.Router();

router.route("/").post(createClass).get(getClass);
router
  .route("/:id")
  .get(getClassById)
  .put(updateClass)
  .delete(deleteClass);

module.exports = router;