const express = require("express");
const router = express.Router();

const {  
    getAdminByID, 
    addAdmin,
    updateAdminByID,
    deleteAdminByID,
} = require('../controllers/admin.controller')

// localhost:3000/keranjang/
router.get("/:id", getAdminByID);
router.post("/", addAdmin);
router.put("/:id", updateAdminByID);
router.delete("/:id", deleteAdminByID);

module.exports = router;