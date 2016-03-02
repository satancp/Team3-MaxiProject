'use strict';

describe('Controller: MaterialpostCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var MaterialpostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaterialpostCtrl = $controller('MaterialpostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
