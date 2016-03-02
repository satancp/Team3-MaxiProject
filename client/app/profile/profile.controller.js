'use strict';

angular.module('maxiProjectApp')
  .controller('ProfileCtrl', function ($scope,ipCookie,Business) {
  	Business.getBusiness(ipCookie('Login').business_id).success(function(bs) {
  		$scope.bs = bs.name;
  		$scope.info = ipCookie('Login');
  	});
  });
