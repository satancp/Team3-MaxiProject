'use strict';

var app = require('../..');
import request from 'supertest';

var newBusiness;

describe('Business API:', function() {

  describe('GET /api/businesss', function() {
    var businesss;

    beforeEach(function(done) {
      request(app)
        .get('/api/businesss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          businesss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      businesss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/businesss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/businesss')
        .send({
          name: 'New Business',
          info: 'This is the brand new business!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBusiness = res.body;
          done();
        });
    });

    it('should respond with the newly created business', function() {
      newBusiness.name.should.equal('New Business');
      newBusiness.info.should.equal('This is the brand new business!!!');
    });

  });

  describe('GET /api/businesss/:id', function() {
    var business;

    beforeEach(function(done) {
      request(app)
        .get('/api/businesss/' + newBusiness._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          business = res.body;
          done();
        });
    });

    afterEach(function() {
      business = {};
    });

    it('should respond with the requested business', function() {
      business.name.should.equal('New Business');
      business.info.should.equal('This is the brand new business!!!');
    });

  });

  describe('PUT /api/businesss/:id', function() {
    var updatedBusiness;

    beforeEach(function(done) {
      request(app)
        .put('/api/businesss/' + newBusiness._id)
        .send({
          name: 'Updated Business',
          info: 'This is the updated business!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBusiness = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBusiness = {};
    });

    it('should respond with the updated business', function() {
      updatedBusiness.name.should.equal('Updated Business');
      updatedBusiness.info.should.equal('This is the updated business!!!');
    });

  });

  describe('DELETE /api/businesss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/businesss/' + newBusiness._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when business does not exist', function(done) {
      request(app)
        .delete('/api/businesss/' + newBusiness._id)
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
