const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.post('/', async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  res.send(cart);
});

module.exports = router;
