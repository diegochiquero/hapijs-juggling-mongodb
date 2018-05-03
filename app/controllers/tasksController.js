'use strict'

const User = require('../models/user');

module.exports = {
  index: (request, h) => {
    return h.view('index', {name: 'John Doe'});
  },
  users: async () => {
    var data = await User.all({});
    return data;
  }
};
