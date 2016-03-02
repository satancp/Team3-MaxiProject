'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/informationdisplay', {
        templateUrl: 'app/informationdisplay/informationdisplay.html',
        controller: 'InformationdisplayCtrl'
      });
  });
