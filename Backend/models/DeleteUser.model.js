const mongoose = require("mongoose");

const DeletedUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  dob: Date,
  deletedAt: {
    type: Date,
    default: Date.now,
  },
});

const DeletedUser = mongoose.model("DeletedUser", DeletedUserSchema);
module.exports = DeletedUser;
