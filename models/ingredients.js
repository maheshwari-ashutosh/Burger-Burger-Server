const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  ingredients: Object,
  prices: Object
});

const Ingredients = mongoose.model('ingredients', ingredientsSchema);

module.exports = Ingredients;