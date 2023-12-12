const express = require("express");
const router = express.Router();
const Notice = require("../models/Other/Notice");

const getNotice=  asyncErrorHandler(async (req, res) => {
  
    let notice = await Notice.find(req.body);
    if (notice) {
      res.json({ success: true, message: "Notice Get Successfully", notice });
    } else {
      res.status(404).json({ success: false, message: "No Notice Available!" });
    }
  } )
const addNotice=  asyncErrorHandler( async (req, res) => {
  let { link, description, title, type } = req.body;
  
    let notice = await Notice.findOne({ link, description, title, type });
    if (notice) {
      return res
        .status(400)
        .json({ success: false, message: "Notice Already Exists!" });
    }
    await Notice.create({
      link,
      description,
      title,
      type,
    });
    const data = {
      success: true,
      message: "Notice Added Successfully",
    };
    res.json(data);
  })

const  updateNotice =  asyncErrorHandler( async (req, res) => {
  let { link, description, title, type } = req.body;
   
    let notice = await Notice.findByIdAndUpdate(req.params.id, {
      link,
      description,
      title,
      type,
    });
    if (!notice) {
      return res
        .status(400)
        .json({ success: false, message: "No Notice Available!" });
    }
    res.json({
      success: true,
      message: "Notice Updated Successfully",
    });
  } )

const deleteNotice =  asyncErrorHandler( async (req, res) => {
 
    let notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return res
        .status(400)
        .json({ success: false, message: "No Notice Available!" });
    }
    res.json({
      success: true,
      message: "Notice Deleted Successfully",
    });
  })

module.exports = router;
