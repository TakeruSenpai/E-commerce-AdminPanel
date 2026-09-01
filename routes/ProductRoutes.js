const express = require("express");
const Product = require("../models/product");

const router = express.Router();

/**
 * POST /api/products
 * Create new product
 */
router.post("/", async (req, res) => {
  console.log("POST RECEIVED:", req.body);

  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("SAVE ERROR:", err.message);
    res.status(400).json({ error: err.message });
  }
});

/**
 * GET /api/products
 * Get all products
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
