const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Material = require("../../models/others/material");
const getMaterial=  asyncHandler(  ( async (req, res) => {
  const material = await Material.find({});
  if (!material) {
    return res
      .status(400)
      .json({ success: false, message: "No Material Found" });
  }
  const data = {
    success: true,
    message: "Material  Found!",
     material
  };
  res.send(data);
} )
)
const addMaterial= asyncHandler(   ( async (req, res) => {
  let material = await Material.findOne(req.body);
 
  
  material = new Material(req.body);
  await material.save();
  res.status(201).send(material);
  }))
const getMaterialById=  asyncHandler( async (req, res) => {
  
    let material = await Material.find(req.body,req.params.id);
    if (!material) {
      return res
        .status(400)
        .json({ success: false, message: "No Material Available!" });
    }
    res.json({ success: true, message: "Material Found!", material });
  } )
const updateMaterial=  asyncHandler( async (req, res) => {
  let { faculty, link, subject, title } = req.body;
 
    let material = await Material.findByIdAndUpdate(req.params.id, {
      faculty,
      link,
      subject,
      title,
    });
    if (!material) {
      return res
        .status(400)
        .json({ success: false, message: "No Material Available!" });
    }
    res.json({
      success: true,
      message: "Material Updated!",
    });
  } )

const deleteMaterial=  asyncHandler( async (req, res) => {
 
    let material = await Material.findByIdAndDelete(req.params.id);
    if (!material) {
      return res
        .status(400)
        .json({ success: false, error: "No Material Available!" });
    }
    res.json({
      success: true,
      message: "Material Deleted!",
      material,
    });
  })

module.exports ={
  getMaterial,getMaterialById,addMaterial,updateMaterial,deleteMaterial
};
