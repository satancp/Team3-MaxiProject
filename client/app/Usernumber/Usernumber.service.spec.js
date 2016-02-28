'use strict';

describe('Service: Usernumber', function () {

  // load the service's module
  beforeEach(module('maxiProjectApp'));

  // instantiate service
  var Usernumber;
  beforeEach(inject(function (_Usernumber_) {
    Usernumber = _Usernumber_;
  }));

  it('should do something', function () {
    expect(!!Usernumber).toBe(true);
  });

});
