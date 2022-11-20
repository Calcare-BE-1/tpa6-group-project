const express = require("express");
const router = express.Router();

const { getAllMakanan, getMakananByID, addMakanan, deleteMakananByID, updateMakananByID} = require('../controllers/makanan.controller')

// localhost:3000/makanan/
router.get("/", (req, res) => {
    res.render("makanan", {
        title: "Menu Makanan",
        layout: "layout/main_layout",
    });
});
// localhost:3000/makanan/all
router.get("/all", getAllMakanan);
router.get("/:id", getMakananByID);
router.post("/", addMakanan);
router.delete("/:id", deleteMakananByID);
router.put("/:id", updateMakananByID);

module.exports = router;