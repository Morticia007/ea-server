const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  firstname: {
    type: String,
    default: '',
  },
  lastname: {
    type: String,
    default: '',
  },
  admin: {
    type: Boolean,
    default: null,
  },
  company: {
    type: String,
  },
  username: {
    type: String,
  },
  facebookId: String,
});

const User = userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
