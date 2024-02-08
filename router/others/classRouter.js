const express = require("express");
const {
  addClass,
  getClass,
  
    
  deleteClass,
} = require("../../controllers/other/classController");

const router = express.Router();

router.route("/").post(addClass).get(getClass);
router
  .route("/:id")
   
 
  .delete(deleteClass);

module.exports = router;