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
// const expressLayouts = require("express-ejs-layouts");

const methodOverride = require("method-override");
//Memanggil session cookies
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
//Konfigurasi connect flash message

//Set template engine (.ejs)
const expressLayouts = require("express-ejs-layouts");
// router.set("view engine", "ejs");
router.use(expressLayouts);

const { body, check, validationResult } = require("express-validator");
// const { rawListeners } = require("./models/user.model");
const { isValidObjectId } = require("mongoose");

// Daftar endpoints :
// localhost:3000/
router.get("/", (req, res) => {
  res.render("home", {
    title: "calCare-BE1",
    layout: "layout/main_layout",
  });
});
// localhost:3000/register
router.use("/register", registerRouter);
//localhost:3000/login
router.use("/login", loginRouter);
//localhost:3000/user
router.use("/user", userRouter);
//localhost:3000/keranjang
router.use("/keranjang", keranjangRouter);
//localhost:3000/makanan
router.use("/makanan", makananRouter);
//localhost:3000/hasil
router.use("/hasil", hasilRouter);
//localhost:3000/pilih-role
router.use("/pilih-role", (req, res) => {
    res.render("user-admin", {
      title: "Pilih Role",
      layout: "layout/main_layout",
    });
  });
// router.use("/edit-makanan", editMakananRouter);
// router.use("/admin", adminRouter);

module.exports = router;
