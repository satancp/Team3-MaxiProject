'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dataediting', {
        template: '<dataediting></dataediting>'
      });
  });
