'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie,Material) {
    Material.getMaterial(1).success(function(ms) {
        $scope.ms = ms;
        $scope.email = function() {
    	   if(ipCookie('Login')) {
    		  $scope.info = ipCookie('Login');
    		  $location.path('mailto:zx603852402@gmail.com');
    	   }
    	   else {
    		  alert("Please login first!");
    	   }
        };
    });
  });
