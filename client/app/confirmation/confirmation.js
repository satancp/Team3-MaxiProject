'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirmation/:content', {
        templateUrl: 'app/confirmation/confirmation.html',
        controller: 'ConfirmationCtrl'
      });
  });