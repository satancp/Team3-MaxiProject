'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
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
  },

  // Seed database on startup
  seedDB: true

};
