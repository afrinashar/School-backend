const Subject = require("../../models/others/subject");
const asyncHandler = require("express-async-handler");

const getSubject = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({});
  res.status(200).json({ success: true, data: subjects });
});

const addSubject = asyncHandler(async (req, res) => {
  const existingSubject = await Subject.findOne({ code: req.body.code });
  
  if (existingSubject) {
    return res.status(400).json({ success: false, message: "Subject already exists" });
  }

  const newSubject = new Subject(req.body);
  await newSubject.save();
  res.status(201).json({ success: true, data: newSubject });
});

const deleteSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findByIdAndDelete(req.params.id);
  if (!subject) {
    return res.status(404).json({ success: false, message: "Subject not found" });
  }
  res.status(200).json({ success: true, message: "Subject deleted" });
});

module.exports = { getSubject, addSubject, deleteSubject };
