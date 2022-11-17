const express = require('express');
const router = express.Router();

const user = require('./user.router');
const makanan = require('./makanan');
const admin = require('./admin');
const keranjang = require('./keranjang');
const hasil = require('./hasil');


router.use('/user', user);
router.use('/makanan', makanan);
router.use('/admin', admin);
router.use('/keranjang', keranjang);
router.use('/hasil', hasil);

module.exports = router;