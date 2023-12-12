const express = require("express");
const {
  createNotice,
  getNotice,
  getNoticeById,
  updateNotice,
  deleteNotice,
} = require("../../controllers/other/noticeController");

const router = express.Router();

router.route("/").post(createNotice).get(getNotice);
router
  .route("/:id")
  .get(getNoticeById)
  .put(updateNotice)
  .delete(deleteNotice);

module.exports = router;