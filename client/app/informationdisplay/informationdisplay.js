'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/informationdisplay/:type/:content', {
        templateUrl: 'app/informationdisplay/informationdisplay.html',
        controller: 'InformationdisplayCtrl'
      });
  });
