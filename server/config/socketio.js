/**
 * Socket.io configuration
 */
'use strict';

var config = require('./environment');

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', data => {
    
  });

  // Insert sockets below
  require('../api/offer/offer.socket').register(socket);
  require('../api/request/request.socket').register(socket);
  require('../api/location/location.socket').register(socket);
  require('../api/news/news.socket').register(socket);
  require('../api/material/material.socket').register(socket);
  require('../api/question/question.socket').register(socket);
  require('../api/business/business.socket').register(socket);
  require('../api/message/message.socket').register(socket);
  require('../api/user/user.socket').register(socket);

}

module.exports = function(socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function(socket) {
    socket.address = socket.request.connection.remoteAddress +
      ':' + socket.request.connection.remotePort;

    socket.connectedAt = new Date();

    // Call onDisconnect.
    socket.on('disconnect', () => {
      onDisconnect(socket);
    });

    // Call onConnect.
    onConnect(socket);
  });
}
