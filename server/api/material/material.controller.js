/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/materials              ->  index
 * POST    /api/materials              ->  create
 * GET     /api/materials/:id          ->  show
 * PUT     /api/materials/:id          ->  update
 * DELETE  /api/materials/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var sqldb = require('../../sqldb');
var Material = sqldb.Material;

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

// Gets a list of Materials
export function index(req, res) {
  Material.findAll()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Material from the DB
export function show(req, res) {
  Material.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets all relevant Materials from the DB
export function search(req, res) {
  var contents = {where:{}};
  if(req.query.fibreclass != 'Any') {
    contents.where.fibre_class = req.query.fibreclass;
  }
  if(req.query.fibrecode != 'Any') {
    contents.where.fibre_code = req.query.fibrecode;
  }
  if(req.query.resinclass != 'Any') {
    contents.where.resin_classification = req.query.resinclass;
  }
  if(req.query.resincode != 'Any') {
    contents.where.resin_details = req.query.resincode;
  }
  if(req.query.weave != 'Any') {
    contents.where.weave_pattern = req.query.weave;
  }
  Material.findAll(contents)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Material in the DB
export function create(req, res) {
  Material.create(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Material in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Material.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Material from the DB
export function destroy(req, res) {
  Material.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
