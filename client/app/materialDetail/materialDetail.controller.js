'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie,Material,$routeParams) {
    Material.getMaterial($routeParams.id).success(function(ms) {
        $scope.ms = ms;
        $scope.email = function() {
    	   if(ipCookie('Login')) {
    		  $scope.info = ipCookie('Login');
              $scope.user = User.getUser(ms.poster_id).success(function(userinfo)){
                $scope.userinfo = userinfo;
              });

    		  $location.path();
    	   }
    	   else {
    		  alert("Please login first!");
    	   }
        };
    });
  });
