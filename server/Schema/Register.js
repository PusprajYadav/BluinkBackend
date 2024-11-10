const mongoose = require("mongoose");

const Registeration = new mongoose.Schema({
  FName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNum: {
    type: String,
    required: true,
  },
  Qualification: {
    type: String,
  },
});

const Register = mongoose.model("UserRegisteration", Registeration);
module.exports = Register;
