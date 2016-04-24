'use strict';

angular.module('maxiProjectApp')
  .controller('ProfileCtrl', function ($scope,ipCookie) {
  	
  		$scope.bs = bs.name;
  		$scope.info = ipCookie('Login');

  });
