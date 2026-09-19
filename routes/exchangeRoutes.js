const express = require("express");
const router = express.Router();

const {
  getCurrencies,
  convertCurrency,
} = require("../controllers/exchangeController");

router.get("/currencies", getCurrencies);
router.get("/convert", convertCurrency);

module.exports = router;