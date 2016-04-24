/**
 * Sequelize initialization module
 */

'use strict';

var path = require('path');
var config = require('../config/environment');
var Sequelize = require('sequelize');

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize.options)
};

// Insert models below
db.Material = db.sequelize.import('../api/material/material.model');
db.Question = db.sequelize.import('../api/question/question.model');
db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
