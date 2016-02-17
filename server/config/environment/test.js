'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/maxiproject-test'
  },
  sequelize: {
    database: 'maxi',
    username: 'root',
    password: 'wsxjw113',
    options: {
      host: 'localhost',
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
