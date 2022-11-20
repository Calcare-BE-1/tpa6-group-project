const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    tinggi_badan: {
      type: Number,
      required: true,
      // unique: false,
    },
    berat_badan: {
      type: Number,
      required: true,
      // unique: false,
    },
    umur: {
      type: Number,
      required: true,
      // unique: false,
    },
    jenis_kelamin: {
      type: String,
      required: true,
      unique: false,
      index: false,
    },
  }
  // { autoIndex: false }
);
const User = mongoose.model("user", userSchema);
// User.collection.createIndex({ jenis_kelamin:  });
userSchema.removeIndex({
  nama: 1,
  email: 1,
  password: 1,
  tinggi_badan: 1,
  umur: 1,
  jenis_kelamin: 1,
});
// User.syncIndexes();
module.exports = User;
