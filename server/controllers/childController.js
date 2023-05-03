const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Child = require("../models/childModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Add a Child
exports.addChild = catchAsyncErrors(async (req, res, next) => {
  const { name, age, gender } = req.body;
  const ngo = await User.findOne({ _id: req.user._id });

  const child = await Child.create({
    name,
    age,
    gender,
    NGO: req.user._id,
    NGOName: ngo.name,
  });

  res.status(200).json({
    success: true,
    child,
  });
});

// Get child details
exports.getChildDetail = catchAsyncErrors(async (req, res, next) => {
  const child = await Child.findOne({ _id: new ObjectId(req.params.id) });

  res.status(200).json({
    success: true,
    child,
  });
});

exports.getAllChildren = catchAsyncErrors(async (req, res, next) => {
  const children = await Child.find({ NGO: req.user._id });

  res.status(200).json({
    success: true,
    children,
  });
});

exports.updateChild = catchAsyncErrors(async (req, res, next) => {
  const updatedChildData = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  };

  const child = await Child.findByIdAndUpdate(req.params.id, updatedChildData, {
    new: true,
    useFundAndModify: false,
  });

  res.status(200).json({
    success: true,
    child,
  });
});

// Add schemes
exports.addSchemes = catchAsyncErrors(async (req, res, next) => {
  const updatedChildData = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    schemes: req.body.schemes,
  };

  const child = await Child.findByIdAndUpdate(req.params.id, updatedChildData, {
    new: true,
    useFundAndModify: false,
  });

  res.status(200).json({
    success: true,
    child,
  });
});

// Get all users(admin)
exports.getAllChildrenAdmin = catchAsyncErrors(async (req, res, next) => {
  const children = await Child.find();

  res.status(200).json({
    success: true,
    children,
  });
});

// Get single user (admin)
exports.getSingleChild = catchAsyncErrors(async (req, res, next) => {
  const child = await Child.findById(req.params.id);

  if (!child) {
    return next(
      new ErrorHander(`child does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    child,
  });
});

// Delete User --Admin
exports.deleteChild = catchAsyncErrors(async (req, res, next) => {
  const child = await Child.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    message: "child Deleted Successfully",
  });
});
