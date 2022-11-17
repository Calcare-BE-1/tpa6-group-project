const express = require('express');
const router = express.Router();

const {registerUser} = require('../controllers/user.controller')

// router.post("/user", user);
// router.get("/", getAllUser);
router.post("/register", registerUser);

module.exports = router;