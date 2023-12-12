const express = require("express");
const router = express.Router();
const adminDetails = require("../../models/Admin/AdminDetails");

const getAdmin = asyncErrorHandler( async (req, res) => {
  
    let user = await adminDetails.find(req.body);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No Admin Found" });
    }
    const data = {
      success: true,
      message: "Admin Details Found!",
      user,
    };
    res.json(data);
  } )

const createAdmin = asyncErrorHandler( async (req, res) => {
  
    let user = await adminDetails.findOne(req.body);
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Admin With This EmployeeId Already Exists",
      });
    }
    user = await adminDetails.create(req.body);
    const data = {
      success: true,
      message: "Admin Details Added!",
      user,
    };
    res.json(data);
  } )

const updateAdmin = asyncErrorHandler( async (req, res) => {
 
    let user = await adminDetails.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Admin Found",
      });
    }
    const data = {
      success: true,
      message: "Updated Successfull!",
    };
    res.json(data);
  } )

const deleteAdmin = asyncErrorHandler( async (req, res) => {
  
    let user = await adminDetails.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Admin Found",
      });
    }
    const data = {
      success: true,
      message: "Deleted Successfull!",
    };
    res.json(data);
  } )

module.exports = router;
