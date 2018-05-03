'use strict'

/*This file is only to create "users" collection and insert some users.
So before run it make sure that user and password are right in config/connections.js*/

var MongoClient = require('mongodb').MongoClient,
  mongoUtils = require('./config/connections');

var connection = mongoUtils.mongoConnect.mongodb;
var dbName = connection.url.match(/\/([^\/]+)\/?$/)[1];
var mongoUrl = connection.url;

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    throw err
  };
  console.log(`Database connected on: ${mongoUrl}`)

  var dbo = db.db(dbName);
  var myUsers = [
    { name: 'Sandy', address: 'Highway 71'},
    { name: 'Susan', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Betty', address: 'Valley 345'}
  ];

  dbo.collection('users').insertMany(myUsers, function(err, res) {
    if (err) {
      throw err;
    };

    console.log('Number of documents inserted: ' + res.insertedCount);
    db.close();
  });
});
