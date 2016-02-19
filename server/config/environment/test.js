'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/maxiproject-test'
  },
  sequelize: {
    database: 'heroku_bca1b707fca7342',
    username: 'b5fe6333c033ca',
    password: '4fdd79a4',
    options: {
      host: 'us-cdbr-iron-east-03.cleardb.net',
      port: 3306,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  }
};
