'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/materialDetail/:id', {
        templateUrl: 'app/materialDetail/materialDetail.html',
        controller: 'MaterialDetailCtrl'
      });
  });
