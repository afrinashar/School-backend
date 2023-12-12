const express = require("express");
const router = express.Router();
const Material = require("../models/Other/Material");
const getMaterial=  asyncErrorHandler( async (req, res) => {
 
    let material = await Material.find(req.body);
    if (!material) {
      return res
        .status(400)
        .json({ success: false, message: "No Material Available!" });
    }
    res.json({ success: true, message: "Material Found!", material });
  } )

const addMaterial=  asyncErrorHandler( async (req, res) => {
  let { faculty, link, subject, title } = req.body;
 
    await Material.create({
      faculty,
      link,
      subject,
      title,
    });
    const data = {
      success: true,
      message: "Material Added!",
    };
    res.json(data);
  })
const getMaterialById=  asyncErrorHandler( async (req, res) => {
  
    let material = await Material.find(req.body,req.params.id);
    if (!material) {
      return res
        .status(400)
        .json({ success: false, message: "No Material Available!" });
    }
    res.json({ success: true, message: "Material Found!", material });
  } )
const updateMaterial=  asyncErrorHandler( async (req, res) => {
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

const deleteMaterial=  asyncErrorHandler( async (req, res) => {
 
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

module.exports = router;
