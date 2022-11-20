// const models = require("../models");
// const { Makanans } = models;

// const contohMakanan = [
//   {
//     nama: "Pisang",
//   },
//   {
//     nama: "Jeruk",
//   },
// ];

module.exports = {
  getAllMakanan: async (req, res) => {
  },
  getMakananByID: (req, res) => {
  
  },
  deleteMakananByID: (req, res) => {

  },

  updateMakananByID: (req, res) => {

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
