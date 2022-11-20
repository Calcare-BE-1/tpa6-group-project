const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/user.controller");

// localhost:3000/login
router.get("/", (req, res) => {
  console.log("Ini halaman login");
  res.render("login", {
    title: "Login to calCare",
    layout: "layout/main_layout",
  });
});
// localhost:3000/login/
router.post("/", loginUser);
// localhost:3000/login/admin
router.get("/admin", (req, res) => {
  res.render("login-admin", {
    title: "Login sebagai Admin",
    layout: "layout/main_layout",
  });
});

module.exports = router;
