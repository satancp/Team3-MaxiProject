'use strict';

describe('Controller: MaterialPostCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var MaterialPostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialPostCtrl = $controller('MaterialPostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
