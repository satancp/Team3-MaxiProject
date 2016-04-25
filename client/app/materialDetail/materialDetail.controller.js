'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie,Material,User,$routeParams) {
    Material.getMaterial($routeParams.id).success(function(ms) {
        $scope.ms = ms;
        $scope.email = function() {
    	   if(ipCookie('Login')) {
    		  $scope.info = ipCookie('Login');
               User.getUser(ms.poster_id).success(function(userinfo){
                $scope.userinfo = userinfo;
                $location.path("mailto:" + userinfo.email);
              });		  
    	   }
    	   else {
    		  alert("Please login first!");
    	   }
        };
    });
  });
