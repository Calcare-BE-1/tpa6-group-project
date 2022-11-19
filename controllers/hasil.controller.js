const Hasil = require("../models/hasil.model");
const Keranjang = require("../models/keranjang.model");
const env = require("dotenv");
env.config();

module.exports = {
  getHasilByID: async (req, res) => {
    try {
      const { id } = req.params;
      const hasil = await Hasil.findById(id).populate("keranjang");

      res.status(200).json({
        message: "Hasilmu muncul",
        hasil: hasil,
      });
    } catch (error) {
      console.log("Kamu belum memilih makanan");
      console.log(error);
    }
  },
};
