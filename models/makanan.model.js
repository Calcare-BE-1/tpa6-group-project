const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const makananSchema = new Schema({
  nama_makanan: {
    type: String,
    required: true,
    unique: true,
  },
  kalori: {
    type: Number,
    required: true,
    unique: true,
  },
  protein:{
    type: Number,
    required: true,
    unique: true,
  },
  lemak:{
    type: Number,
    required: true,
    unique: true,
  },
  karbohidrat:{
    type: Number,
    required: true,
    unique: true,
  },
  gambar_makanan:{
    type: String,
    required: true,
    unique: true,
  }
});

const Makanan = mongoose.model("makanan", makananSchema);

module.exports = Makanan;