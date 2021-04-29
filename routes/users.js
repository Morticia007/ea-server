const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({
    status: 'success',
    message: 'Successfully fetched list of users',
    data: [
      {
        userName: 'libersolis',
        email: 'manny.hagman@gmail.com',
        firstName: 'Manny',
        lastName: 'Hagman',
        avatar: '',
        companyName: 'Devwelopment',
      },
      {
        userName: 'MRSlibersolis',
        email: 'jacquelyn.hagman@gmail.com',
        firstName: 'Jacquelyn',
        lastName: 'Hagman',
        avatar: '',
        companyName: 'Devwelopment',
      },
      {
        userName: 'Kyra007',
        email: 'agave90@gmail.com',
        firstName: 'Kyra',
        lastName: 'Elder',
        avatar: '',
        companyName: 'Devwelopment',
      },
    ],
  });
});
router.post('/signup', (req, res, next) => {});
router.post('/login', (req, res, next) => {});

module.exports = router;
