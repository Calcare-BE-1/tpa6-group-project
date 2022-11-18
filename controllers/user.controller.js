const User = require("../models/user.model");
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
const env = require("dotenv");
env.config();

const getAllUser = async (req, res) => {
  try {
    await User.find({}, (err, result) => {
      res.json({ result });
    });
  } catch (error) {}
};

const registerUser = async (req, res) => {
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
    res.send("User add");
  } catch (err) {
    console.log("error: ", err);
  }
};

const login = async (req, res) => {
  const data = req.body;

  const user = await User.findOne({ email: data.email });

  const checkPwd = bcrypt.compareSync(data.password, user.password);

  if (checkPwd) {
    res.json({
      message: "anda berhasil login",
      // token: "kasih token di sini"
    });
  } else {
    res.json({
      message: "Gagal Login, Periksa kembali email dan password",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    let _idUser = req.params.id;
    await User.deleteOne({ _id: _idUser })
      .then(() => {
        return res.send("Berhasil hapus");
      })
      .catch(() => {
        return res.send("Salah");
      });
  } catch (error) {
    if (error) {
      return res.send(error.message);
    }
  }
};
const updateUserById = async (req, res) => {
  try {
    const _idUser = req.params.id;
    const { users } = req.body;
    console;
    await User.updateOne({ _id: _idUser }, { $set: { users: user } }, (err, result) => {
      res.json("Berhasil Ganti");
    });
  } catch (error) {}
};

module.exports = { registerUser, getAllUser, deleteUserById, updateUserById, login };
