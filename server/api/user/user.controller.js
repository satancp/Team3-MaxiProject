/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  update
 * DELETE  /api/users/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var sqldb = require('../../sqldb');
var User = sqldb.User;
var nodemailer = require('nodemailer');
var crypto = require("crypto");

function sendConfirmationMail(user) {
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'zx603852402@gmail.com',
        pass: 'wsxjw113'
    }
  };
  var url = 'localhost:9000/confirmation/' + user.confirmation;
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: 'zx603852402@gmail.com',
    to: user.email,
    subject: 'Hello New User', 
    text: 'Hello, welcome to join in material sheffield. Please click this confirmation url to complete your registeration.', 
    html: "<b>Hello, welcome to join in material sheffield.</b><br/><p>Please click this confirmation url to complete your registeration.</p><br/><a href=" + url + ">Confirm your registeration</a><br/><p>If you cannot click it, just copy the url by yourself.</p><br/><p>URL:   " + url + "</p>"
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function responseWithResultSignup(res, email, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      sendConfirmationMail(email);
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Users
exports.index = function index(req, res) {
  User.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from the DB
exports.show = function show(req, res) {
  User.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new User in the DB
exports.create = function create(req, res) {
  User.create(req.body)
    .then(responseWithResultSignup(res, req.body, 201))
    .catch(handleError(res));
}

exports.login = function login(req, res) {
  User.find({
    where: {
      name: req.body.username,
      password: req.body.password
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

exports.confirmation = function confirmation(req, res) {
  User.find({
    where: {
      confirmation: req.params.content,
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates({confirmation_state: true}))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Updates an existing User in the DB
exports.update = function update(req, res) {
  if (req.body.id) {
    delete req.body.id;
  }
  User.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}