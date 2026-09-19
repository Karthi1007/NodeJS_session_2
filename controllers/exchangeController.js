// controllers/exchangeController.js

const getCurrencies = (req, res) => {
  res.send("Get currencies controller working");
};

const convertCurrency = (req, res) => {
  res.send("Convert currency controller working");
};

module.exports = {
  getCurrencies,
  convertCurrency,
};