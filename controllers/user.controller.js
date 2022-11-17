const User = require('../model/user');
// const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

// const register = async (req, res) => {
//     await User.find({}, (err, result) => {
//       console.log("user from db: ", result);
//       res.send(result);
//     });
//   };
  
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

  module.exports = {registerUser};
  