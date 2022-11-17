const express = require("express");
const app = express();
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(allRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server BE-1 running on http://localhost:${PORT}/`);
});
