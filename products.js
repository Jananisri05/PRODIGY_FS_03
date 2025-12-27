const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model("Product", productSchema,"ecomtable");
