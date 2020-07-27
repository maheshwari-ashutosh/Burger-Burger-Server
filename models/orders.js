const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  ingredients: Object,
  price: Number,
  customer: {
    name: String,
    address: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    deliveryMethod: String,
  }
});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;