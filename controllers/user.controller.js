"use strict";
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { body, check, validationResult } = require("express-validator");
const flash = require("connect-flash");
// const jwt = require('jsonwebtoken');
const env = require("dotenv");
env.config();
// Menambahkan user baru
const addUser = async (req, res) => {
  console.log("Ada disini");
  console.log("req.body: ", req.body);
  // Membuat Password di hash
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);
  // Membuat User
  const newUser = new User({
    nama: req.body.nama,
    email: req.body.email,
    password: hashPassword,
    tinggi_badan: req.body.tinggi_badan,
    berat_badan: req.body.berat_badan,
    umur: req.body.umur,
    jenis_kelamin: req.body.jenis_kelamin,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Di else");
    User.insertMany(req.body, (error, result) => {
      console.log("Email sudah digunakan");
    });
  } else {
    console.log("Di if");
    res.render("login", {
      title: "login",
      layout: "layout/main_layout",
      errors: errors.array(),
    });
  }
  console.log("Berhasil daftar di luar if");
  await User.create(newUser);
  // User.dropIndex()
  res.send("User add");
  // try {
  // }
  // catch (err) {
  //   console.log("error di luar if : ", err);
  // }
};
// Login sebagai user
const loginUser = async (req, res) => {
  console.log("Sukses login");
  const data = req.body;
  const user = await User.findOne({ email: data.email });
  console.log(user);
  // Mengubah hash ke password awal
  const checkPwd = bcrypt.compareSync(data.password, user.password);
  console.log("Check result is", checkPwd);
  if (checkPwd) {
    console.log("Berhasil Cek");
    res.render("home-logged", {
      title: `Home - ${user.nama}`,
      layout: "layout/main_layout",
    });
  } else {
    res.json({
      message: "Gagal Login, Periksa kembali email dan password",
    });
  }
};
// Menampilkan tabel user oleh admin
const getAllUser = async (req, res) => {
  try {
    await User.find({}, (err, result) => {
      res.json({ result });
    });
  } catch (error) {}
};

const registerUser = async (req, res) => {
  // async (req, res) => {
  // const registers = await User.find();
  // res.render("register", {
  //   title: "register ejs",
  //   // registers,
  //   layout: "layout/main_layout",
  //   msg: req.flash("msg"), //untuk menampilkan data pesan
  // });
  // Membuat user baru
  try {
    console.log("req.body: ", req.body);
    const newUser = new User({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      tinggi_badan: req.body.tinggi_badan,
      berat_badan: req.body.berat_badan,
      umur: req.body.umur,
    });

    await User.create(newUser);
    res.send("User ditambahkan loh");
  } catch (err) {
    console.log("error: ", err);
  }
};

// Menghapus user dari role admin
const deleteUserById = async (req, res) => {
  let _idUser = await req.params.id;
  try {
    await User.deleteOne({ _id: _idUser }).then(() => {
      res.send("Berhasil");
      // (req, res) => {
      // res.send("Berhasil")
      //untuk menambahkan flash message
      // req.flash("msg", "Data Berhasil Dihapus!");
      // res.redirect("/user");
    });
  } catch (error) {
    // () => {
    res.send("Salah");
    // };
    if (error) {
      res.send(error.message);
    }
    // try {
    //   console.log("req.body: ", req.body);

    //   const newUser = new User({
    //     nama: req.body.nama,
    //     email: req.body.email,
    //     password: req.body.password,
    //     tinggi_badan: req.body.tinggi_badan,
    //     berat_badan: req.body.berat_badan,
    //     umur: req.body.umur,
    //     jenis_kelamin: req.body.jenis_kelamin,
    //   });

    //   } catch (error) {
    //     if (error) {
    //       return res.send(error.message);
    //     }
    //   }
    // } catch (error) {
    //   if (error) {
    //     return res.send(error.message);
    //   }
    // }
  }
};
// Memperbarui data user melalui role user
const updateUserById = async (req, res) => {
  try {
    const _idUser = req.params.id;
    console.log("_idUser", _idUser);
    // const { dataUser } = req.body;
    const { nama, email, password, tinggi_badan, berat_badan, umur, jenis_kelamin } = req.body;
    // console.log("users", dataUser);
    // console;
    await User.updateOne({ _id: _idUser }, { $set: { nama, jenis_kelamin } }, (err, result) => {
      res.json("Berhasil Ganti");
    });
  } catch (error) {}
};

module.exports = { addUser, registerUser, getAllUser, deleteUserById, updateUserById, loginUser };
