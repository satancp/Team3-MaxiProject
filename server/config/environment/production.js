'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:     process.env.OPENSHIFT_NODEJS_IP ||
          process.env.IP ||
          undefined,

  // Server port
  port:   process.env.OPENSHIFT_NODEJS_PORT ||
          process.env.PORT ||
          8080,

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
};
