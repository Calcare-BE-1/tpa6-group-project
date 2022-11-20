const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hasilSchema = new Schema({
  total_kalori: {
    type: Number,
    required: true,
    unique: true,
  },
  total_protein: {
    type: Number,
    required: true,
    unique: true,
  },
  total_lemak: {
    type: Number,
    required: true,
    unique: true,
  },
  total_karbohidrat: {
    type: Number,
    required: true,
    unique: true,
  },
  gambar_makanan: {
    type: String,
    required: true,
    unique: true,
  },
});

const Hasil = mongoose.model("hasil", hasilSchema);

module.exports = Hasil;
