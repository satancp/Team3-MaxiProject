'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie) {
    $scope.email = function() {
    	if(ipCookie('Login')) {
    		Material.getMaterial(ipCookie('Login').material_id).success(function(ms) {
    			$scope.info = ipCookie('Login');
    			$scope.ms = ms.name;
    			$location.path('mailto:zx603852402@gmail.com');
    		}).error(function(err) {
    			
    		});
    	}
    	else {
    		alert("Please login first!");
    	}
    };
  });
