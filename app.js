const express = require("express");
const app = express();

const exchangeRoutes = require("./routes/exchangeRoutes");

app.use("/exchange", exchangeRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});