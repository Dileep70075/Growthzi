const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // photo: {
  //   type: String, 
  //   required: true,
  // },
  // dob: {
  //   type: Date,
  //   required: true,
  // },
  status:{
    type: String,
    default:'active'
  }
}, { timestamps: true }); 
const User = mongoose.model("User", UserSchema);
module.exports = User;
