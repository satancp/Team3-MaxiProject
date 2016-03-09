'use strict';

angular.module('maxiProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/resetpassword', {
        templateUrl: 'app/resetpassword/resetpassword.html',
        controller: 'ResetpasswordCtrl'
      });
  });
