const express = require("express");
const router = express.Router();

const makananRouter  = require("./makanan.router");

// Daftar endpoints :
// localhost:3000/
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    desc: "Welcome to Homepage calCare",
  });
});
// localhost:3000/auth
router.use("/makanan", makananRouter);

module.exports = router;
