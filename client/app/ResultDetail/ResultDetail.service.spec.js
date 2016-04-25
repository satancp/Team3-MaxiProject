'use strict';

describe('Service: ResultDetail', function () {

  // load the service's module
  beforeEach(module('maxiProjectApp'));

  // instantiate service
  var ResultDetail;
  beforeEach(inject(function (_ResultDetail_) {
    ResultDetail = _ResultDetail_;
  }));

  it('should do something', function () {
    expect(!!ResultDetail).toBe(true);
  });

});
