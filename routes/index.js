const express = require("express");
const router = express.Router();

const makananRouter  = require("./makanan.router");
const userRouter  = require("./user.router");
// const user = require('./user.router');
// const makanan = require('./makanan');
// const admin = require('./admin');
// const keranjang = require('./keranjang');
// const hasil = require('./hasil');


// router.use('/user', user);
// router.use('/makanan', makanan);
// router.use('/admin', admin);
// router.use('/keranjang', keranjang);
// router.use('/hasil', hasil);

// Daftar endpoints :
// localhost:3000/
// router.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success",
//     desc: "Welcome to Homepage calCare",
//   });
// });
// localhost:3000/auth
// router.use("/makanan", makananRouter);
router.use("/user", userRouter);
module.exports = router;
