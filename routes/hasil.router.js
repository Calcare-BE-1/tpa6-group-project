const express = require("express");
const router = express.Router();

const { getHasilByID } = require("../controllers/hasil.controller");

// localhost:3000/hasil/
router.get("/", (req, res) => {
  res.render("hasil", {
    title: "Hasil Perhitungan Kalori",
    layout: "layout/main_layout",
  });
});

router.get("/:id", getHasilByID);

module.exports = router;
