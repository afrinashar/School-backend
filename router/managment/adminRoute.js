const express = require("express");
const {
    adminRegister,
    adminLogin,
    adminUpdate,
    adminDelete,
   
} = require("../../controllers/managment/adminauth");
const {
    addAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin,
   
} = require("../../controllers/managment/adminDetails");
const router = express.Router();

router.route("/").post(adminRegister).post(adminLogin).get(studentAuth.protect,  getAllStudents).get(getAdmin);
router
  .route("/:id")
  .get(getStudentById)
  .put(adminUpdate).put(updateAdmin)
  .delete(adminDelete).delete(deleteAdmin);

module.exports = router;
