'use strict';

var app = require('../..');
import request from 'supertest';

var newMaterial;

describe('Material API:', function() {

  describe('GET /api/materials', function() {
    var materials;

    beforeEach(function(done) {
      request(app)
        .get('/api/materials')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          materials = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      materials.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/materials', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/materials')
        .send({
          name: 'New Material',
          info: 'This is the brand new material!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMaterial = res.body;
          done();
        });
    });

    it('should respond with the newly created material', function() {
      newMaterial.name.should.equal('New Material');
      newMaterial.info.should.equal('This is the brand new material!!!');
    });

  });

  describe('GET /api/materials/:id', function() {
    var material;

    beforeEach(function(done) {
      request(app)
        .get('/api/materials/' + newMaterial._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          material = res.body;
          done();
        });
    });

    afterEach(function() {
      material = {};
    });

    it('should respond with the requested material', function() {
      material.name.should.equal('New Material');
      material.info.should.equal('This is the brand new material!!!');
    });

  });

  describe('PUT /api/materials/:id', function() {
    var updatedMaterial;

    beforeEach(function(done) {
      request(app)
        .put('/api/materials/' + newMaterial._id)
        .send({
          name: 'Updated Material',
          info: 'This is the updated material!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMaterial = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMaterial = {};
    });

    it('should respond with the updated material', function() {
      updatedMaterial.name.should.equal('Updated Material');
      updatedMaterial.info.should.equal('This is the updated material!!!');
    });

  });

  describe('DELETE /api/materials/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/materials/' + newMaterial._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when material does not exist', function(done) {
      request(app)
        .delete('/api/materials/' + newMaterial._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
