const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const School = require("../models/schoolModel");
const mongoose = require("mongoose");

exports.addSchool = catchAsyncErrors(async (req, res, next) => {
  const { name, schemes } = req.body;

  const school = await School.create({
    name,
    schemes,
  });

  res.status(200).json({
    success: true,
    school,
  });
});

exports.getSchool = catchAsyncErrors(async (req, res, next) => {
  const school = await School.findById(req.params.id);

  res.status(200).json({
    success: true,
    school,
  });
});

exports.getAllSchools = catchAsyncErrors(async (req, res, next) => {
  const schools = await School.find();

  res.status(200).json({
    success: true,
    schools,
  });
});

exports.updateSchool = catchAsyncErrors(async (req, res, next) => {
  const updatedSchoolData = {
    name: req.body.name,
    schemes: req.body.schemes,
  };

  const school = await School.findByIdAndUpdate(
    req.params.id,
    updatedSchoolData,
    {
      new: true,
      useFundAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    school,
  });
});

exports.deleteSchool = catchAsyncErrors(async (req, res, next) => {
  const school = await School.deleteOne({ _id: req.params.id });

  if (!school) {
    return next(
      new ErrorHander(`School does not exist with Id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    message: "School Deleted Successfully",
  });
});
