const express = require("express");
const {
  createMaterial,
  getMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
} = require("../../controllers/other/materialController");

const router = express.Router();

router.route("/").post(createMaterial).get(getMaterial);
router
  .route("/:id")
  .get(getMaterialById)
  .put(updateMaterial)
  .delete(deleteMaterial);

module.exports = router;