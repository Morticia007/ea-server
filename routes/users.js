const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const { Schema } = mongoose;

// schema for saving a user object in mongodb
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  company: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

router.get('/', async (req, res, next) => {
  // currently unused
  try {
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
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  // takes the request body sent by the user when they click submit in the react native signup form and
  // saves it to mongodb
  const { firstName, lastName, userName, company, email } = req.body;
  try {
    const result = await User.create({
      firstName,
      lastName,
      userName,
      company,
      email,
    });
    console.log({
      line: '67',
      result,
    });
    res.status(201).send({
      statusCode: 201,
      status: 'Success',
      message: `Successfully created user with userName ${userName}! Welcome to EA`,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/login', (req, res, next) => {
  // currently unused
  const { userName } = req.body;

  console.log({
    status: 'Login Sucessful',
    message: `Welcome to Elder Apothecary '${userName}'.`,
  });
  res.status(200).send({
    status: 'Login Sucessful',
    message: `Welcome to Elder Apothecary '${userName}'.`,
  });
});

module.exports = router;
