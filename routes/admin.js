const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/add-product", async (req, res) => {
  try {
    const product = new Product({
      name: "Test Product",
      price: 999
    });

    await product.save();

    res.json({ message: "Saved to DB ✅", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
