const express = require("express");
const router = express.Router();

const { login } = require("../controllers/user.controller");

// localhost:3000/keranjang/
router.post("/", login);

module.exports = router;
