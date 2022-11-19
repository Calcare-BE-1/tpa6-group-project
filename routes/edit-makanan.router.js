const express = require("express");
const router = express.Router();

const {  
    getEditMakananByID, 
    addEditMakanan,
    updateEditMakananByID,
    deleteEditMakananByID,
} = require('../controllers/edit-makanan.controller')

// localhost:3000/EditMakanan/
router.get("/:id", getEditMakananByID);
router.post("/", addEditMakanan);
router.put("/:id", updateEditMakananByID);
router.delete("/:id", deleteEditMakananByID);

module.exports = router;