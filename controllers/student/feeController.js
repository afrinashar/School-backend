const Fee = require("../../models/student/feeDetails");
const asyncHandler = require("express-async-handler");
// Controller actions
const createFee =asyncHandler( async (req, res) => {
   
    let fee = await Fee.findOne({
      rollNo: req.body.rollNo,
    });
   
    // const user = req.body.rollNo
    // if (user) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Fee With This Enrollment Already Exists",
    //   });
    // }
    fee = new Fee(req.body);
    await fee.save();
    res.status(201).send(fee);
  }  
   
)
 
const getAllFees = asyncHandler(async (req, res) => {
 
    const fees = await Fee.find({});
    if (!fees) {
      return res
        .status(400)
        .json({ success: false, message: "No Fee Found" });
    }
    const data = {
      success: true,
      message: "Fee  Found!",
       fees
    };
    res.send(data);
})

// Get a single Fee by Fee_id
const getFeeById =asyncHandler( async (req, res) => {
  
    const fee = await Fee.findById(req.params.id);
    if (!fee) {
      return res
        .status(404)
        .json({ success: false, error: "Fee not found" });
    }
    res.status(2000).json({ success: true, data: fee, message:success });
  } )
// Update a Fee by Fee_id
const updateFee = asyncHandler(async (req, res) => {
 
    const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // res.json(Fee);
    if (!fee) {
      return res
        .status(404)
        .json({ success: false, error: "Fee not found" });
    }
    res.status(2001).json({ success: true, data: fee });
  })

// Delete a Fee by Fee_id
const deleteFee = asyncHandler( async (req, res) => {
  
    const fee = await Fee.findByIdAndDelete(req.params.id);
    // res.json(deletedFee);
    if (!fee) {
      return res
        .status(404)
        .json({ success: false, error: "Fee not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } )
module.exports = {
  createFee,
  getAllFees,
  getFeeById,
  updateFee,
  deleteFee,
};
