const express = require("express");
const router = express.Router();

const { registerUser, getAllUser, deleteUserById, updateUserById, login } = require("../controllers/user.controller");

// router.post("/user", user);
// router.get("/", getAllUser);
// router.post("/register", registerUser);
// router.get("/register", getAllUser); //Harus dipindah ke register.router
// localhost:3000/delete/id
router.delete("/delete/:id", deleteUserById);
// localhost:3000/user/edit/:id
router.put("/edit/:id", updateUserById);

module.exports = router;
