/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/businesss              ->  index
 * POST    /api/businesss              ->  create
 * GET     /api/businesss/:id          ->  show
 * PUT     /api/businesss/:id          ->  update
 * DELETE  /api/businesss/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var sqldb = require('../../sqldb');
var Business = sqldb.Business;

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

// Gets a list of Businesss
exports.index = function index(req, res) {
  Business.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Business from the DB
exports.show = function show(req, res) {
  Business.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Business in the DB
exports.create = function create(req, res) {
  Business.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Business in the DB
exports.update = function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Business.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Business from the DB
exports.destroy = function destroy(req, res) {
  Business.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
