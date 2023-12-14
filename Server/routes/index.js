const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');


router.post('/add', async (req, res) => {
  try {
    const { name, quantity, price, imageUrl, category } = req.body;
    console.log(name, quantity, price, imageUrl);

    if (!name || !quantity || !price || !imageUrl || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({ name, quantity, price, imageUrl, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/all', async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


router.delete('/delete/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
