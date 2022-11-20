const express = require("express");
const router = express.Router();

const { addUser } = require("../controllers/user.controller");

// localhost:3000/register
router.get("/", (req, res) => {
  console.log("Ini register");
  res.render("tambah-user", {
    title: "Register to calCare",
    layout: "layout/main_layout",
  });
});
// localhost:3000/register/add
router.post("/add", addUser);

module.exports = router;
