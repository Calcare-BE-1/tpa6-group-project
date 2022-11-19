const express = require("express");
const router = express.Router();

const adminRouter = require("./admin.router");
const editMakananRouter = require("./edit-makanan.router");
const hasilRouter = require("./hasil.router");
const keranjangRouter = require("./keranjang.router");
const makananRouter = require("./makanan.router");
const userRouter = require("./user.router");
const loginRouter = require("./login.router");
const registerRouter = require("./register.router");
const expressLayouts = require("express-ejs-layouts");

// Daftar endpoints :
// router.get("/", (req, res) => {
//     res.render("home", { title: "calCare-BE1", layout: "layout/main_layout" });
//   });

// localhost:3000/
router.use("/makanan", makananRouter);
router.use("/user", userRouter);
router.use("/keranjang", keranjangRouter);
router.use("/admin", adminRouter);
router.use("/hasil", hasilRouter);
router.use("/edit-makanan", editMakananRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
