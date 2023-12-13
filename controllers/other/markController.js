const express = require("express");
const router = express.Router();
const Marks = require('../../models/others/marks');

const getMarks= async (req, res) => {
  try {
    let Mark = await Marks.find(req.body);
    console.log(Mark,"mark");
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
const getMarksById= async (req, res) => {
  try {
    let Mark = await Marks.findById(req.params.id);
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
const createMarks= async (req, res) => {
  let { rollNo} = req.body;
  try {
    let Mark = await Marks.findOne({ rollNo });
    if (Mark) {
      await Marks.findByIdAndUpdate(Mark._id, req.body);
      const data = {
        success: true,
        message: "Marks Added!",
      };
      res.json(data);
    } else {
      await Marks.create(req.body);
      const data = {
        success: true,
        message: "Marks Added!",
      };
      res.json(data);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
const updateMarks= async (req, res) => {
  try {
    let Mark = await Marks.getIdAndUpdate(req.body);
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
const deleteMarks= async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = {createMarks,
  getMarks,
  getMarksById,
  updateMarks,
  deleteMarks}
