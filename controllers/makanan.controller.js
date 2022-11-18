const Makanan = require("../models/makanan.model");
const env = require("dotenv");
env.config();

module.exports = {
  getAllMakanan: (req, res) => {
    res.json({
      Makanan,
    });
  },
  addMakanan: async (req, res) => {
    try {
      console.log("req.body: ", req.body);

      const newMakanan = new Makanan({
        nama_makanan: req.body.nama_makanan,
        kalori: req.body.kalori,
        protein: req.body.protein,
        lemak: req.body.lemak,
        karbohidrat: req.body.karbohidrat,
        gambar_makanan: req.body.gambar_makanan,
      });

      await Makanan.create(newMakanan);
      res.send("Makanan baru sukses ditambahin nih.");
    } catch (err) {
      console.log("error: ", err);
    }
  },
};
