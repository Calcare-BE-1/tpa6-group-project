const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  nama_admin: {
    type: String,
    required: true,
    unique: true,
  },
  email_admin: {
    type: String,
    required: true,
    unique: true,
  },
  password_admin:{
    type: String,
    required: true,
    unique: true,
  },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;