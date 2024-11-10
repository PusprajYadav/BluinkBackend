const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  companyPlaced: {
    type: String,
    required: true,
  },
  packages: {
    type: Number,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
});

const AlumniModel = mongoose.model("Alumni", AlumniSchema);
module.exports = AlumniModel;
