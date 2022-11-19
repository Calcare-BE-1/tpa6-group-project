const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nama: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    unique: true,
  },
  tinggi_badan:{
    type: Number,
    required: true,
    unique: true,
  },
  berat_badan:{
    type: Number,
    required: true,
    unique: true,
  },
  umur:{
    type: Number,
    required: true,
    unique: true,
  },
  jenis_kelamin:{
    type: String,
    required: true,
    unique: false,
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;