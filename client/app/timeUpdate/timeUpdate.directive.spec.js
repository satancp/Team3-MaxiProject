'use strict';

describe('Directive: timeUpdate', function () {

  // load the directive's module and view
  beforeEach(module('maxiProjectApp'));
  beforeEach(module('app/timeUpdate/timeUpdate.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time-update></time-update>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the timeUpdate directive');
  }));
});
