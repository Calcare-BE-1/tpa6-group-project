const express = require("express");
const router = express.Router();

const { getAllMakanan, getMakananByID, addMakanan, deleteMakanangByID, updateMakananByID} = require('../controllers/makanan.controller')

// localhost:3000/makanan/
router.get("/", getAllMakanan);
router.get("/:id", getMakananByID);
router.post("/", addMakanan);
router.delete("/:id", deleteMakanangByID);
router.put("/:id", updateMakananByID);

module.exports = router;