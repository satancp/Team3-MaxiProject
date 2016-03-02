'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/MaterialPost', {
        templateUrl: 'app/MaterialPost/MaterialPost.html',
        controller: 'MaterialPostCtrl'
      });
  });
