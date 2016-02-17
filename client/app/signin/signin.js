'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninCtrl'
      });
  });
