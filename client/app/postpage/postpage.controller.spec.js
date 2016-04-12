'use strict';

describe('Controller: PostpageCtrl', function () {

  // load the controller's module
  beforeEach(module('maxiProjectApp'));

  var PostpageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostpageCtrl = $controller('PostpageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
