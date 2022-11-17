const express = require("express");
const router = express.Router();

const makananRouter  = require("./makanan.router");
const userRouter  = require("./user.router");

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
router.post("/user", userRouter);
module.exports = router;
