const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Scheme = require("../models/schemeModel");
const { Schema } = require("mongoose");

exports.addScheme = catchAsyncErrors(async (req, res, next) => {
  const { name, schemes } = req.body;

  const scheme = await Scheme.create({
    name,
  });

  res.status(200).json({
    success: true,
    scheme,
  });
});

exports.getAllSchemes = catchAsyncErrors(async (req, res, next) => {
  const scheme = await Scheme.find();

  res.status(200).json({
    success: true,
    scheme,
  });
});

exports.getScheme = catchAsyncErrors(async (req, res, next) => {
  const scheme = await Scheme.findById(req.params.id);
  // console.log(scheme);

  if (!scheme) {
    return next(
      new ErrorHander(`scheme does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    scheme,
  });
});

exports.updateScheme = catchAsyncErrors(async (req, res, next) => {
  const updatedSchemeData = {
    name: req.body.name,
  };

  const scheme = await Scheme.findByIdAndUpdate(
    req.params.id,
    updatedSchemeData,
    {
      new: true,
      useFundAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    scheme,
  });
});

exports.deleteScheme = catchAsyncErrors(async (req, res, next) => {
  const scheme = await Scheme.deleteOne({ _id: req.params.id });

  if (!scheme) {
    return next(
      new ErrorHander(`Scheme does not exist with Id: ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    message: "Scheme Deleted Successfully",
  });
});
