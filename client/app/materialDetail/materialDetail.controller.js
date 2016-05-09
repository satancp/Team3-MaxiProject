'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialDetailCtrl', function ($scope,ipCookie,Material,User,$routeParams,$window,$uibModal) {
    Material.getMaterial($routeParams.id).success(function(ms) {
        $scope.ms = ms;
        $scope.animationsEnabled = true;
        $scope.email = function() {
    	   if(ipCookie('LoginUser') == 1) {
    		  $scope.info = ipCookie('Login');
               User.getUser(ms.poster_id).success(function(userinfo){
                $scope.userinfo = userinfo;
                alert("Telephone Number: " + userinfo.phonenumber);
                $window.location = "mailto:" + userinfo.email;
              });		  
    	   }
    	   else {
    		  alert("Please login first!");
              var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/signin/signin.html',
                controller: 'SigninCtrl',
                size: 'sm'
              });
    	   }
        };
    });
  });
