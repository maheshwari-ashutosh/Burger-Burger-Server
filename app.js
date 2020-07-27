const express = require('express');
const Ingredients = require('./models/ingredients');
const cors = require('cors');
const OrderRouter = require('./Router/OrderRouter');
require('./db/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(OrderRouter);
const port = 5000;

const default_ingredients = {
  BREAD_TOP: 'BreadTop',
  BREAD_BOTTOM: 'BreadBottom',
  LETTUCE: 'Lettuce',
  CHEESE: 'Cheese',
  PATTY: 'Patty',
  TOMATO: 'Tomato',
  ONION: 'Onion',
  SEEDS1: 'Seeds1',
  SEEDS2: 'Seeds2',
};

const default_prices = {
  Lettuce: 10,
  Cheese: 15,
  Patty: 30,
  Tomato: 5,
  Onion: 5,
};

(async () => {
  const ingredients = await Ingredients.find({});
  if(ingredients.length === 0) {
    const up = new Ingredients({ingredients: default_ingredients, prices:default_prices});
    await up.save();
  }
})();

app.listen(port, () => {
  console.log('server started on port ' + port);
});
