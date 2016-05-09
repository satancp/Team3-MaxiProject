'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
  sequelize: {
    database: 'maxi',
    username: 'bfc5353ba77f55',
    password: 'ceada757',
    options: {
      host: 'eu-cdbr-azure-west-d.cloudapp.net',
      port: 3306,
      dialect: 'mysql',
      pool: {
        max: 10000,
        min: 0,
        idle: 10000
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
