const Salery = require('../../models/Salery/SaleryDetails');
const asyncHandler = require("express-async-handler");
// Controller actions
const createSalery = asyncHandler( async (req, res) => {
  
    let salery = await Salery.findOne({
      rollNo: req.body.rollNoNo,
    });
    // if (user) {
    //   return res.status(400).json({
    //     success: false,
    //     message: " With This Enrollment Already Exists",
    //   });
    // }
   salery = new Salery(req.body);
    await salery.save();
    res.status(201).send(salery);
  } )

const getAllSalerys =  asyncHandler( async (req, res) => {
   
     
    const salery = await Salery.find({});
    if (!salery) {
      return res
        .status(400)
        .json({ success: false, message: "No Salery Found" });
    }
    const data = {
      success: true,
      message: "Salery Details Found!",
 salery
    };
    res.send(data);
  } )

// Get a single Salery by Salery_id
const getSaleryById =  asyncHandler(async (req, res) => {
 
  
    const salery = await Salery.findById(req.params.id);
    if (!salery) {
      return res.status(404).json({ error: 'Salery not found' });
    }
    res.json(salery);
  } )
// Update a Salery by Salery_id
const updateSalery = asyncHandler( async (req, res) => {
 
    const salery = await Salery.findByIdAndUpdate(req.params.id, req.body);
    if (!salery) {
      return res.status(404).json({ error: 'Salery not found' });
    }
    res.json(salery);
  } )

  // Delete a Salery by Salery_id
const deleteSalery =  asyncHandler( async (req, res) => {
 
    const salery = await Salery.findByIdAndDelete(req.params.id);
    if (!salery) {
      return res.status(404).json({ error: 'Salery not found' });
    }
    res.json(salery);
  } )
module.exports = {
  createSalery,
  getAllSalery,
  getSaleryById,
  updateSalery,
  deleteSalery
};
