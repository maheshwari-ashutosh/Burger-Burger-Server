const express = require('express');
const cors = require('cors');
const OrderRouter = require('./Router/OrderRouter');
require('./db/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(OrderRouter);
const port = 5000;

app.listen(port, () => {
  console.log('server started on port ' + port);
})