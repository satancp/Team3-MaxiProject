'use strict';

describe('Controller: MaterialDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var MaterialDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialDetailCtrl = $controller('MaterialDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
