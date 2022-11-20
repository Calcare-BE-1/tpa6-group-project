const express = require("express");
const router = express.Router();

const {  
    getKeranjangByID, 
    addKeranjang,
    updateKeranjangByID,
    deleteKeranjangByID,
} = require('../controllers/keranjang.controller')

// localhost:3000/keranjang/
router.get("/", (req, res) => {
    res.render("keranjang", {
      title: "Makanan Yang di Pilih",
      layout: "layout/main_layout",
    });
  })
// localhost:3000/keranjang/
router.get("/:id", getKeranjangByID);
router.post("/", addKeranjang);
router.put("/:id", updateKeranjangByID);
router.delete("/:id", deleteKeranjangByID);

module.exports = router;