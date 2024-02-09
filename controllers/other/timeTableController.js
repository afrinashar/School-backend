const express = require("express");
    
const TimeTable = require("../../models/Others/timeTable");

const getTimeTable= async (req, res) => {
  try {
    let timeTable = await TimeTable.find();
    if (!timeTable) {
      return res
        .status(400)
        .json({ success: false, message: "No TimeTable Available" });
    }
    const data = {
      success: true,
      message: "All TimeTable Loaded!",
      timeTable,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 
const getTimeTableById= async (req, res) => {
    try {
      let timeTable = await TimeTable.findOne();
      if (!timeTable) {
        return res
          .status(400)
          .json({ success: false, message: "No TimeTable Available" });
      }
      const data = {
        success: true,
        message: " TimeTable Loaded!",
        timeTable,
      };
      res.json(data);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } 
const createTimeTable = async (req, res) => {
  let { name, code } = req.body;
  try {
    let timeTable = await TimeTable.findOne({ code });
    if (timeTable) {
      return res
        .status(400)
        .json({ success: false, message: "TimeTable Already Exists" });
    }
    await timeTable.create({
      name,
      code,
    });
    const data = {
      success: true,
      message: "TimeTable Added!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 
const updateTimeTable = async (req, res) => {
    try {
      let timeTable = await TimeTable.findByIdAndUpdate(req.params.id, req.body);
      if (!timeTable) {
        return res
          .status(400)
          .json({ success: false, message: "No TimeTable Exists!" });
      }
      const data = {
        success: true,
        message: "TimeTable Updated!",
      };
      res.json(data);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }
const deleteTimeTable = async (req, res) => {
  try {
    let timeTable = await TimeTable.findByIdAndDelete(req.params.id);
    if (!timeTable) {
      return res
        .status(400)
        .json({ success: false, message: "No TimeTable Exists!" });
    }
    const data = {
      success: true,
      message: "TimeTable Deleted!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = { createTimeTable,
  getTimeTable,
  getTimeTableById,
  updateTimeTable,
  deleteTimeTable}