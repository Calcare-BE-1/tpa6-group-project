const mongoose = require("mongoose");
const userModel = require('./user.model');
const makananModel = require('./makanan.model');

const Schema = mongoose.Schema;

const keranjangSchema = new Schema({
  jumlah_makanan: {
    type: Number,
  },
  id_userFK: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userModel,
    required: true,
    unique: false,
  },
  id_makananFK: {
    type: mongoose.Schema.Types.ObjectId,
    ref: makananModel,
    required: true,
    unique: false,
  },
});

const Keranjang = mongoose.model("keranjang", keranjangSchema);

module.exports = Keranjang;
