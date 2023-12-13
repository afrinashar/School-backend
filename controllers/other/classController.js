

const express = require("express");
const router = express.Router();
const Class = require("../models/Other/class");

const getClass= async (req, res) => {
  try {
    let classes = await Class.find();

    const data = {
      success: true,
      message: "All classes Loaded!",
      classes,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const addClass= async (req, res) => {
  let { name } = req.body;
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const deleteClass = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
module.exports = router;
