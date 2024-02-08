const express = require("express");
const {
  addMaterial,
  getMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
} = require("../../controllers/other/materialController");

const router = express.Router();

router.route("/").post(addMaterial).get(getMaterial);
router
  .route("/:id")
  .get(getMaterialById)
  .put(updateMaterial)
  .delete(deleteMaterial);

module.exports = router;