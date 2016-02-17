'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var businessCtrlStub = {
  index: 'businessCtrl.index',
  show: 'businessCtrl.show',
  create: 'businessCtrl.create',
  update: 'businessCtrl.update',
  destroy: 'businessCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var businessIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './business.controller': businessCtrlStub
});

describe('Business API Router:', function() {

  it('should return an express router instance', function() {
    businessIndex.should.equal(routerStub);
  });

  describe('GET /api/businesss', function() {

    it('should route to business.controller.index', function() {
      routerStub.get
        .withArgs('/', 'businessCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/businesss/:id', function() {

    it('should route to business.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'businessCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/businesss', function() {

    it('should route to business.controller.create', function() {
      routerStub.post
        .withArgs('/', 'businessCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/businesss/:id', function() {

    it('should route to business.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'businessCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/businesss/:id', function() {

    it('should route to business.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'businessCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/businesss/:id', function() {

    it('should route to business.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'businessCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
