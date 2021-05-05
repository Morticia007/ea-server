const express = require('express');
const app = express();
const errorHandler = require('./middleware/error-handler');
const users = require('./routes/users');
const products = require('./routes/products');
const morgan = require('morgan');
const helmet = require('helmet');
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ea-db', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
