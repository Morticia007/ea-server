const express = require('express');
const app = express();
const serveIndex = require('serve-index');
const users = require('./routes/users');
const products = require('./routes/products');
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });
// app.use('/request-type', (req, res, next) => {
//   console.log('Request type:', req.method);
//   next();
// });
// app.use('/public', express.static('public'));
// app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
  res.send('Thank the Lawd for the love of My life Manny!');
});

app.use('/users', users);
app.use('/products', products);
// save for userRouter later:
// app.get('/:userid', (req, res) => {
//   console.log(req.params.userid);
//   res.send(req.params.userid);
// });

// app.get('/search', (req, res) => {
//   console.log(req.query.keyword);
// });
// app.get('/users', users);

// app.get('/routes/', (req, res) => {
//   console.log(req.protocol);
//   console.log(req.hostname);
//   console.log(req.path);
//   console.log(req.originalUrl);
//   console.log(req.subdomains);
// });

// app.post('/login', (req, res) => {
//   console.log(req.body.email);
//   console.log(req.body.password);
//   res.send({
//     email: req.body.email,
//     password: req.body.password,
//   });
// });

app.listen(3000, () => console.log('Ea app is listening on port 3000.'));
