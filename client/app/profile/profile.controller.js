'use strict';

angular.module('maxiProjectApp')
  .controller('ProfileCtrl', function ($scope,ipCookie) {
  	$scope.info = ipCookie('Login');
  });
