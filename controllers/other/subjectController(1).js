const express = require("express");
const router = express.Router();
const Subject = require("../../models/Others/Subject");

const getSubject= async (req, res) => {
  try {
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
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 
const getSubjectById= async (req, res) => {
  try {
    let subject = await Subject.findOne();
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Subject Available" });
    }
    const data = {
      success: true,
      message: "one Subject Loaded!",
      subject,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 

const createSubject = async (req, res) => {
  let { name, code } = req.body;
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 
const updateSubject = async (req, res) => {
  try {
    let subject = await Subject.findByIdAndUpdate();
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Subject Available" });
    }
    const data = {
      success: true,
      message: "update Subject Loaded!",
      subject,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
} 

const deleteSubject = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = { createSubject,
  getSubject,
  getSubjectById,
  updateSubject,
  deleteSubject}