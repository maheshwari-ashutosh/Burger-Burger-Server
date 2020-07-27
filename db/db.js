const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/burger-burger';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});