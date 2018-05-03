'use strict'

/*This file create a mysql database and insert some users.Not necessary create database before.
So before run it make sure that user and password are right in config/connections.js*/

var mysql = require('mysql'),
mysqlUtils =require('./config/connections');

var connection = mysqlUtils.mysqlConnect.mysqldb;

//Set datas of connection
var con = mysql.createConnection({host: connection.host, user: connection.username, password: connection.password, multipleStatements: true});

//Connection created
con.connect(function(err) {
  if (err) {
    throw err;
  };
});

//Create database and table
con.query("CREATE DATABASE juggling_orm; USE juggling_orm; CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY (id))",   function(err, result) {
  if (err) {
    throw err;
  };
});

//Fill table in with some users
var sqlInto = "USE juggling_orm; INSERT INTO users (name, address) VALUES ?";
var values = [['Demian', 'Sky st 331'],['John', 'One way 98'],['Mark', 'Yellow Garden 2'],['Pete', 'Park Lane 38'],['Michael', 'Main Road 989']];
con.query(sqlInto, [values], function(err, result) {
  if (err) {
    throw err;
  };
  console.log("5 record inserted");
});

con.end();
