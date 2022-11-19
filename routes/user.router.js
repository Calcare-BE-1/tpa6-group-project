const express = require('express');
const router = express.Router();

const {registerUser, getAllUser, deleteUserById, updateUserById, login} = require('../controllers/user.controller')

// router.post("/user", user);
// router.get("/", getAllUser);
router.post("/register", registerUser);
router.post("/login", login); //Harus dipindah ke login.router
router.get("/register", getAllUser); //Harus dipindah ke register.router
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

module.exports = router;