'use strict'

const schema = require('../utils/schema').schema();

// simplier way to describe model
var User = schema.define('User', {
  name: String,
  address: String
}, {table: 'users'});

module.exports = schema.models.User;
