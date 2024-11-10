const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  Spackage: {
    type: Number,
    required: true,
  },
});

const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;
