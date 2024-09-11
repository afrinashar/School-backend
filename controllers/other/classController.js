const Class = require("../../models/others/class");
const asyncHandler = require("express-async-handler");

const getClass = asyncHandler(async (req, res) => {
  const classes = await Class.find({});
  res.status(200).json({ success: true, data: classes });
});

const addClass = asyncHandler(async (req, res) => {
  const existingClass = await Class.findOne({ className: req.body.className });
  
  if (existingClass) {
    return res.status(400).json({ success: false, message: "Class already exists" });
  }

  const newClass = new Class(req.body);
  await newClass.save();
  res.status(201).json({ success: true, data: newClass });
});

const deleteClass = asyncHandler(async (req, res) => {
  const deletedClass = await Class.findByIdAndDelete(req.params.id);
  if (!deletedClass) {
    return res.status(404).json({ success: false, message: "Class not found" });
  }
  res.status(200).json({ success: true, message: "Class deleted" });
});

module.exports = { getClass, addClass, deleteClass };
