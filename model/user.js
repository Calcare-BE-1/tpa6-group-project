const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
    type: String,
    required: true,
    unique: true,
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;