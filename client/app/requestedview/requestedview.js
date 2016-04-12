'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/requestedview', {
        templateUrl: 'app/requestedview/requestedview.html',
        controller: 'RequestedviewCtrl'
      });
  });
