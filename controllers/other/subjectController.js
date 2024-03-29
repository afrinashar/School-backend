const express = require("express");
//const router = express.Router();
const Subject = require("../../models/others/subject");
const asyncHandler = require("express-async-handler");

const getSubject=  asyncHandler( async (req, res) => {
   
    let subject = await Subject.find();
    if (!subject) {
      return res 
        .status(400)
        .json({ success: false, message: "No Subject Available" });
    }
    const data = {
      success: true,
      message: "All Subject Loaded!",
      subject,
    };
    res.json(subject);
  } )

const addSubject =  asyncHandler( async (req, res) => {
  let { name, code } = req.body;
 
    let subject = await Subject.findOne({ code });
    if (subject) {
      return res
        .status(400)
        .json({ success: false, message: "Subject Already Exists" });
    }
    await Subject.create({
      name,
      code,
    });
    const data = {
      success: true,
      message: "Subject Added!",
    };
    res.json(data);
  } )

const deleteSubject =  asyncHandler( async (req, res) => {
 
    let subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Subject Exists!" });
    }
    const data = {
      success: true,
      message: "Subject Deleted!",
    };
    res.json(data);
  } )

module.exports = {getSubject,deleteSubject,addSubject};
