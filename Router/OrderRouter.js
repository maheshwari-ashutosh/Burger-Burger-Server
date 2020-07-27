const express = require('express');
const Order = require('../models/orders');
const Ingredients = require('../models/ingredients');
const router = new express.Router();

router.post('/orders', async (req, res) => {
  const order = new Order(req.body);
  try {
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }

});

router.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredients.find({});
    res.send(ingredients);
  } catch(error) {
    res.status(404).send();
  }
});

module.exports = router;