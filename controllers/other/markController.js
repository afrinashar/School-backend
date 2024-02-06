const express = require("express");
const asyncErrorHandler=require('./../../Utils/asyncErrorHandler')
const Marks = require("../../models/others/marks");

const getAllMarks=  asyncErrorHandler(async (req, res) => {
 
    let Mark = await Marks.find(req.body);
    if (!Mark) {
      return res
        .status(400)
        .json({ success: false, message: "Marks Not Available" });
    } 
    const data = {
      success: true,
      message: "All Marks Loaded!",
      Mark,
    };
    res.json(data);
  } )

const addMarks=   asyncErrorHandler(async (req, res) => {
 let { enrollmentNo } = req.body;
 //console.log(rollNo);
    let Mark = await Marks.findOne({ rollNo });
    
    if (Mark) {
      await Marks.create( req.body);
      const data = {
        success: true,
        message: "Marks Already exixt!",
      };
      res.json(data);
    } else {
      await Marks.create(req.body);
      const data = {
        success: true,
        message: "Marks Added!",
      };
      res.json(data);
    }}
)

const deleteMarks=  asyncErrorHandler( async (req, res) => {
  
    let mark = await Marks.findByIdAndDelete(req.params.id);
    if (!mark) {
      return res
        .status(400)
        .json({ success: false, message: "No Marks Data Exists!" });
    }
    const data = {
      success: true,
      message: "Marks Deleted!",
    };
    res.json(data);
  } )

module.exports =  {addMarks,deleteMarks,getAllMarks}
