const express = require("express");
const router = express.Router();

const { getAllMakanan, addMakanan } = require('../controllers/makanan.controller')

// localhost:3000/makanan/
router.get("/", getAllMakanan);
router.post("/add", addMakanan);

module.exports = router;