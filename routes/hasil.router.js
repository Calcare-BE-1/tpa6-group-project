const express = require("express");
const router = express.Router();

const { getHasilByID } = require("../controllers/hasil.controller");

// localhost:3000/hasil/
router.get("/", getHasilByID);

module.exports = router;
