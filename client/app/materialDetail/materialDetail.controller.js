'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie,Material,User,$routeParams,$window) {
    Material.getMaterial($routeParams.id).success(function(ms) {
        $scope.ms = ms;
        $scope.email = function() {
    	   if(ipCookie('Login')) {
    		  $scope.info = ipCookie('Login');
               User.getUser(ms.poster_id).success(function(userinfo){
                $scope.userinfo = userinfo;
                $window.location = "mailto:" + userinfo.email;
              });		  
    	   }
    	   else {
    		  alert("Please login first!");
    	   }
        };
    });
  });
