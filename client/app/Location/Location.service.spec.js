'use strict';

describe('Service: Location', function () {

  // load the service's module
  beforeEach(module('maxiProjectApp'));

  // instantiate service
  var Location;
  beforeEach(inject(function (_Location_) {
    Location = _Location_;
  }));

  it('should do something', function () {
    expect(!!Location).toBe(true);
  });

});
