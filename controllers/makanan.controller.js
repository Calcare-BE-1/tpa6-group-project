// const models = require("../models");
// const { Makanans } = models;

const contohMakanan = [
  {
    nama: "Pisang",
  },
  {
    nama: "Jeruk",
  },
];

module.exports = {
  getAllMakanan: (req, res) => {
    res.json({
      contohMakanan,
    });
  },
};
