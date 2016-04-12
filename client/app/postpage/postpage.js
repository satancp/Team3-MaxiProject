'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/postpage', {
        templateUrl: 'app/postpage/postpage.html',
        controller: 'PostpageCtrl'
      });
  });
