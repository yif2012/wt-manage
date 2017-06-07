const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongodb);
  require('../models/users.server.model');
}