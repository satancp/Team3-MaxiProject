'use strict';

describe('Service: Business', function () {

  // load the service's module
  beforeEach(module('maxiProjectApp'));

  // instantiate service
  var Business;
  beforeEach(inject(function (_Business_) {
    Business = _Business_;
  }));

  it('should do something', function () {
    expect(!!Business).toBe(true);
  });

});
