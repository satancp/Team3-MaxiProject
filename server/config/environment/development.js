'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
  sequelize: {
    database: 'maxi',
    username: 'root',
    password: 'wsxjw113',
    options: {
      host: '143.167.179.154',
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
