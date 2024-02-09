const express = require("express");
const {
  createFee,
  getAllFees,
  getFeeById,
  updateFee,
  deleteFee,
} = require("../../controllers/student/feeController");
//const marks= require("../others/materialRouter")
const router = express.Router();

router.route("/", ).post(createFee).get(getAllFees);
 router
  .route("/:id")
  .get(getFeeById)
  .put(updateFee)
  .delete(deleteFee);

module.exports = router;
