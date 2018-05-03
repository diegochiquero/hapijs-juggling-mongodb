'use strict'

const connection = require('../../config/connections');
const Schema = require('jugglingdb').Schema;
const schema = new Schema('mongodb', connection.mongoConnect.mongodb);
//const schema = new Schema('mysql', connection.mysqlConnect.mysqldb);

schema.on('connected', () => {
  console.log('Database connected successfully')
});

exports.schema = () => {
  return schema;
};
