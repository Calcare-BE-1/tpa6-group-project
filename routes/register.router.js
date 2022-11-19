const express = require("express");
const router = express.Router();

const {  
    registerUser,
} = require('../controllers/user.controller')

// localhost:3000/keranjang/
router.post("/", registerUser);

module.exports = router;