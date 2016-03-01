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
db.Location = db.sequelize.import('../api/location/location.model');
db.News = db.sequelize.import('../api/news/news.model');
db.Business = db.sequelize.import('../api/business/business.model');
db.Material = db.sequelize.import('../api/material/material.model');
db.Question = db.sequelize.import('../api/question/question.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Offer = db.sequelize.import('../api/offer/offer.model');
db.Request = db.sequelize.import('../api/request/request.model');
db.Message = db.sequelize.import('../api/message/message.model');

module.exports = db;
