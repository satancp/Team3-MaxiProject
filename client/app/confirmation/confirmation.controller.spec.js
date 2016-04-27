'use strict';

describe('Component: ConfirmationComponent', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var ConfirmationComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ConfirmationComponent = $componentController('ConfirmationComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
