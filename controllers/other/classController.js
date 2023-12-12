

const express = require("express");
const router = express.Router();
const Class = require("../models/Other/class");

const getClass=   asyncErrorHandler(async (req, res) => {
 
    let classes = await Class.find();

    const data = {
      success: true,
      message: "All classes Loaded!",
      classes,
    };
    res.json(data);
  } )

const addClass=  asyncErrorHandler(async (req, res) => {
  let { name } = req.body;
  
    let branch = await Class.findOne({ name });
    if (branch) {
      const data = {
        success: false,
        message: "Already Exists!",
      };
      res.status(400).json(data);
    } else {
      await Class.create(req.body);
      const data = {
        success: true,
        message: "class Added!",
      };
      res.json(data);
    }
  } )

const deleteClass =  asyncErrorHandler( async (req, res) => {
  
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
module.exports = router;
