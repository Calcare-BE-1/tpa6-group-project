const express = require("express");
const router = express.Router();

const { 
    getAllKeranjang, 
    getKeranjangByID, 
    addKeranjang,
    deleteKeranjangByID,
    updateKeranjangByID,
} = require('../controllers/keranjang.controller')

// localhost:4000/keranjang/
router.get("/", getAllKeranjang);
router.get("/:id", getKeranjangByID);
router.post("/", addKeranjang);
router.delete("/:id", deleteKeranjangByID);
router.put("/:id", updateKeranjangByID);

module.exports = router;