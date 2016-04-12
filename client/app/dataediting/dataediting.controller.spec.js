'use strict';

describe('Component: DataeditingComponent', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var DataeditingComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DataeditingComponent = $componentController('DataeditingComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
