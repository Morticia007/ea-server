const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: String,
  image: String,
});

// get a list of products from the mongodb database
// currently products must be imported directly into mongodb via json file or by adding them manually in
// mongo compass but in the future
//there will be a web app with an admin feature
// where an admin user can add products via a web form

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log({ products });
    res.send({
      status: 'success',
      message: 'Successfully fetched list of products',
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
