/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/offers', require('./api/offer'));
  app.use('/api/requests', require('./api/request'));
  app.use('/api/locations', require('./api/location'));
  app.use('/api/newss', require('./api/news'));
  app.use('/api/materials', require('./api/material'));
  app.use('/api/questions', require('./api/question'));
  app.use('/api/businesss', require('./api/business'));
  app.use('/api/messages', require('./api/message'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
