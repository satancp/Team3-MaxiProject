'use strict';

describe('Controller: RequestedviewCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var RequestedviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestedviewCtrl = $controller('RequestedviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
