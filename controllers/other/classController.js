

const express = require("express");
const router = express.Router();
const Class = require("../../models/others/class");
const asyncHandler = require("express-async-handler");
const getClass=  asyncHandler(  (async (req, res) => {
 
  const classes = await Class.find({});
  if (!classes) {
    return res
      .status(400)
      .json({ success: false, message: "No classes Found" });
  }
  const data = {
    success: true,
    message: "classes  Found!",
     classes
  };
  res.send(data);
    
  } ))

const addClass=  asyncHandler((async (req, res) => {
   
    // let branch = await Class.findOne({ name });
    // if (branch) {
    //   const data = {
    //     success: false,
    //     message: "Already Exists!",
    //   };
    //   res.status(400).json(data);
    // } else {
    
     
       let classes= new Class.findOne(req.body)
      classes = new Class(req.body);
      await classes.save();
      res.status(201).send(classes);
    } 
  //  }
   ))

const deleteClass =  asyncHandler( async (req, res) => {
  
    let mark = await Class.findByIdAndDelete(req.params.id);
    if (!mark) {
      return res
        .status(400)
        .json({ success: false, message: "No class Data Exists!" });
    }
    const data = {
      success: true,
      message: "class Deleted!",
    };
    res.json(data);
  } )
module.exports = {getClass,addClass,deleteClass};
