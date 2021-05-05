const express = require('express');
const router = express.Router();

const passport = require('passport');
const User = require('../models/user');
const authenticate = require('../authenticate');
const cors = require('./cors');

const authMiddleware = [authenticate.verifyUser, authenticate.verifyAdmin];

// router.get('/', async (req, res, next) => {
//   // currently unused
//   try {
//     res.send({
//       status: 'success',
//       message: 'Successfully fetched list of users',
//       data: [
//         {
//           userName: 'libersolis',
//           email: 'manny.hagman@gmail.com',
//           firstName: 'Manny',
//           lastName: 'Hagman',
//           avatar: '',
//           companyName: 'Devwelopment',
//         },
//         {
//           userName: 'MRSlibersolis',
//           email: 'jacquelyn.hagman@gmail.com',
//           firstName: 'Jacquelyn',
//           lastName: 'Hagman',
//           avatar: '',
//           companyName: 'Devwelopment',
//         },
//         {
//           userName: 'Kyra007',
//           email: 'agave90@gmail.com',
//           firstName: 'Kyra',
//           lastName: 'Elder',
//           avatar: '',
//           companyName: 'Devwelopment',
//         },
//       ],
//     });
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/', cors.corsWithOptions, authMiddleware, (req, res, next) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
    .catch((err) => next(err));
});

router.post('/signup', cors.corsWithOptions, (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        if (req.body.firstname) {
          user.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          user.lastname = req.body.lastname;
        }
        if (req.body.admin) {
          user.admin = req.body.admin;
        }
        user.save((err) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({ err: err });
            return;
          }
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        });
      }
    },
  );
});

// router.post(
//   '/login',
//   cors.corsWithOptions,
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('logging in');
//     console.log({
//       body: req.body,
//     });
//     const token = authenticate.getToken({ _id: req.user._id });
//     console.log('token', token);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     console.log({ line: '104', token });
//     res.json({
//       success: true,
//       token: token,
//       status: 'You are successfully logged in!',
//     });
//   },
// );

// router.post('/login', (req, res, next) => {
//   // currently unused
//   const { userName } = req.body;

//   console.log({
//     status: 'Login Sucessful',
//     message: `Welcome to Elder Apothecary '${userName}'.`,
//   });
//   res.status(200).send({
//     status: 'Login Sucessful',
//     message: `Welcome to Elder Apothecary '${userName}'.`,
//   });
// });
cors.corsWithOptions,
  passport.authenticate('local'),
  router.post(
    '/login',
    passport.authenticate('local'),
    async (req, res, next) => {
      try {
        res.send({
          message: 'successfully logged in',
        });
      } catch (error) {
        res.send('Error logging in to /login');
      }
    },
  );

module.exports = router;
