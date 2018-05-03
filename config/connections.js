'use strict';

module.exports.mongoConnect = {
  mongodb: {
    url: 'mongodb://your_user:your_password@localhost:27017/juggling_orm',
    w: 1,
    j: 1
  }
};

module.exports.mysqlConnect = {
  mysqldb: {
    host: 'localhost',
    port: 3306,
    username: 'your_user',
    password: 'your_password',
    database: 'juggling_orm'
  }
};

/*INSTRUCTION TO CHECK mySql CONNECTION:
Go to app/utils/schema.js. Then comment mongodb connection and uncomment mysql connection and run again.
Don't forget to run mysql_db_utils.js before*/

//Don't change mySql database name cause when mysql_db_utils.js will be run this database will be created
