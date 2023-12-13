const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");

const adminLogin= async (req, res) => {
  let { loginid, password } = req.body;
  try {
    let user = await Admin.findOne({ loginid });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Credentials" });
    }
    if (password !== user.password) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Credentials" });
    }
    const data = {
      success: true,
      message: "Login Successfull!",
      loginid: user.loginid,
      id: user.id,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const adminRegister = async (req, res) => {
  let { loginid, password } = req.body;
  try {
    let user = await Admin.findOne({ loginid });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Admin With This LoginId Already Exists",
      });
    }
    user = await Admin.create({
      loginid,
      password,
    });
    const data = {
      success: true,
      message: "Register Successfull!",
      loginid: user.loginid,
      id: user.id,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const adminUpdate = async (req, res) => {
  try {
    let user = await Admin.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Admin Exists!",
      });
    }
    const data = {
      success: true,
      message: "Updated Successfull!",
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const adminDelete = async (req, res) => {
  try {
    let user = await Admin.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Admin Exists!",
      });
    }
    const data = {
      success: true,
      message: "Deleted Successfull!",
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

module.exports = {
  adminLogin,
  adminRegister,
  adminDelete,
  adminUpdate,
};

