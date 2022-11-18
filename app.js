const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const allRoutes = require("./routes");
const PORT = process.env.PORT || 8000;
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

// Server
app.listen(PORT, () => {
  console.log(`Server BE-1 running on http://localhost:${PORT}/`);
});
