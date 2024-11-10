const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mblnumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SlatRounds = 12;

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, SlatRounds);
});
const userModal = mongoose.model("user", userSchema);
module.exports = userModal;
