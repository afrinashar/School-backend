const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Material = require("../../models/others/material");
const getMaterial=   ( async (req, res) => {
 try{


    let material = await Material.find(req.body);
    if (!material) {
      
        
        res.send(material).status(400);
    }
    res.send(material).status(400);
  }
  catch (error) { 
    res.status(400).send(error);
  }
} )

const addMaterial=   ( async (req, res) => {
 try{ let { faculty, link, subject, title } = req.body;
 
   const Materials=  new Material({
      faculty,
      link,
      subject,
      title,
    });
    await Materials.save();
    res.status(201).send(Materials);
  
   } catch (error) { 
    res.status(400).send(error);
  }
  })
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
