const express = require("express");
const router = express.Router();

const { getAllMakanan } = require('../controllers/makanan.controller')

// localhost:3000/makanan/
router.get("/", getAllMakanan);

module.exports = router;