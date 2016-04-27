'use strict';
angular.module('maxiProjectApp')
  .controller('ConfirmationCtrl', function ($scope, User, $routeParams, ipCookie, $location, $route) {
    User.confirmUser($routeParams.content).success(function(result) {
    	alert("Confirmation success!");
    	ipCookie('LoginUser',1);
      	ipCookie('Login',result);
      	$location.path('/');
      	$route.reload();
    });
});