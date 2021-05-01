const express = require('express');
const app = express();
const errorHandler = require('./middleware/error-handler');
const users = require('./routes/users');
const products = require('./routes/products');
const morgan = require('morgan');
const helmet = require('helmet');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ea-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Thank the Lawd for the love of My life Manny!');
});

app.use('/users', users);
app.use('/products', products);

app.use(errorHandler);
app.listen(3000, () => console.log('Ea app is listening on port 3000.'));
