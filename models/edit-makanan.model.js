const mongoose = require("mongoose");
const makananModel = require("./makanan.model");
const adminModel = require("./admin.model");

const Schema = mongoose.Schema;

const editMakananSchema = new Schema({
  id_adminFK: {
    type: mongoose.Schema.Types.ObjectId,
    ref: adminModel,
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

const editMakanan = mongoose.model("edit-makanan", editMakananSchema);

module.exports = editMakanan;
