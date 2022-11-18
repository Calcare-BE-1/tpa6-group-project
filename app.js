const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const allRoutes = require("./routes");
const PORT = 3000;
const uri = process.env.MONGODB_CONNECTION_STRING2;


// CONECT TO MONGODB
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connect to MongoDB Success");
});


// Middleware
app.use(allRoutes);

//method override
const methodOverride = require("method-override");

//require session cookies
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

//configurasi connect flash message
app.use(cookieParser("secrect"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//use method override
app.use(methodOverride("_method"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//template engine
const expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(expressLayouts);

//mongodbdatabase
// require("./.env")
const Register = require("./models/user.model");

const { body, check, validationResult } = require("express-validator");
const { rawListeners } = require("./models/user.model");
const { isValidObjectId } = require("mongoose");

app.get("/", (req, res) => {
  res.render("home", { title: "halaman home", layout: "layout/main_layout" });
});
app.get("/register", async (req, res) => {
  const registers = await Register.find();
  res.render("register", {
    title: "register ejs",
    registers,
    layout: "layout/main_layout",
    msg: req.flash("msg"), //untuk menampilkan data pesan
  });
});

app.get("/register/add", (req, res) => {
  res.render("tambah-user", {
    title: "Tambah data user",
    layout: "layout/main_layout",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
    layout: "layout/main_layout",
  });
});
app.post(
  "/register",
  [
    body("email").custom(async (value) => {
      const duplikat = await Register.findOne({ email: value });
      if (duplikat) {
        throw new Error("email sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    // check("password", "Password salah").isStrongPassword(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("tambah-user", {
        title: "form tambah user",
        layout: "layout/main_layout",
        errors: errors.array(),
      });
    } else {
      Register.insertMany(req.body, (error, result) => {
        req.flash("msg", "Data Berhasil Ditambahkan!"); //untuk menambahkan flash message
        res.redirect("/login");
      });
    }
  }
);

app.get("/register/edit/:id", async (req, res) => {
  const register = await Register.findById(req.params.id);

  res.render("edit-register", {
    title: "edit data",
    register,
    layout: "layout/main_layout",
  });
});

app.put(
  "/register",
  [
    body("email").custom(async (value) => {
      const duplikat = await Register.findOne({ email: value });
      if (duplikat) {
        throw new Error("email sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    // check("password", "Password salah").isStrongPassword(),
  
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("tambah-user", {
        title: "form Edit data kontak",
        layout: "layout/main_layout",
        errors: errors.array(),
      });
    } else {
      Register.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            password: req.body.password,
            tinggi_badan: req.body.tinggi_badan,
            berat_badan: req.body.berat_badan,
            umur: req.body.umur,
          },
        }
      ).then((result) => {
        req.flash("msg", "Data kontak berhasil Diubah!");
        res.redirect("/register");
      });
    }
  }
);

// app.get("/contact/delete/:id", (req, res) => {
//   Contact.findByIdAndDelete(req.params.id).then((result) => {
//     req.flash("msg", "Data Berhasil Dihapus!"); //untuk menambahkan flash message

//     res.redirect("/contact");
//   });
// });

app.delete("/register", (req, res) => {
  Register.findByIdAndDelete(req.body.id).then((result) => {
    req.flash("msg", "Data Berhasil Dihapus!"); //untuk menambahkan flash message
    res.redirect("/register");
  });
});
// Server
app.listen(PORT, () => {
  console.log(`Server BE-1 running on http://localhost:${PORT}/`);
});
