'use strict';

describe('Controller: InformationdisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var InformationdisplayCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformationdisplayCtrl = $controller('InformationdisplayCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
