const express = require("express");
const asyncHandler = require("express-async-handler");
const Marks = require("../../models/others/marks");
const Student =require("../../models/student/studentDetails")
const getAllMarks=  asyncHandler(async (req, res) => {
  
   const student = await Student.findOne({ rollNumber: req.params.rollNumber });
   console.log(student,"student");
   if (!student) {
     return res.status(404).json({ error: 'Student not found' });
   }

   const marks = await Marks.find({ student: student._id });
     const data = {
       success: true,
       message: "Marks  Found!",
         
     };
     res.send(marks);
  } )
  const getMarksById=  asyncHandler(async (req, res) => {
 
    let mark = await Marks.findById(req.params.id);
    // if (!Mark) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Marks Not Available" });
    // } 
     mark = new Marks(req.body)
     await mark.save();
     res.status(201).send(mark);
     
  } )

const addMarks=   asyncHandler(async (req, res) => {
  let mark = await Marks.findOne(req.body);
  // if (!Mark) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Marks Not Available" });
  // } 
   mark = new Marks(req.body)
   await mark.save();
   res.status(201).send(mark);
   
} 
)
const updateMarks=  asyncHandler(async (req, res) => {
 
  let mark = await Marks.findByIdAndUpdate(req.params.id);
  // if (!Mark) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Marks Not Available" });
  // } 
   mark = new Marks(req.body)
   await mark.save();
   res.status(201).send(mark);
   
} )

const deleteMarks=  asyncHandler( async (req, res) => {
  
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

module.exports =  {addMarks,deleteMarks,getAllMarks,getMarksById,updateMarks}
