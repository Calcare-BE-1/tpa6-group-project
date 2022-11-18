const express = require('express');
const router = express.Router();

const {registerUser, getAllUser, deleteUserById, updateUserById, login} = require('../controllers/user.controller')

// router.post("/user", user);
// router.get("/", getAllUser);
router.post("/register", registerUser);
router.post("/login", login);
router.get("/register", getAllUser);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

module.exports = router;