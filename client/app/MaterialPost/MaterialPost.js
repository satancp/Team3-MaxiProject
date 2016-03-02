'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/materialpost', {
        templateUrl: 'app/materialpost/materialpost.html',
        controller: 'MaterialpostCtrl'
      });
  });
