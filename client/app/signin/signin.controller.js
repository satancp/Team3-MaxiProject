'use strict';

angular.module('maxiProjectApp')
  .controller('SigninCtrl', function ($scope, User, $uibModalInstance, $uibModal, ipCookie, $location, $route) {
  $scope.animationsEnabled = true;
  $scope.handleLoginBtnClick = function () {
    var data = new Object();
    data.username = $scope.loginForm.username;
    data.password = $scope.loginForm.password;
    User.loginUser(data).success(function (user) {
      $uibModalInstance.dismiss('ok');
      $scope.err = undefined;
      ipCookie('LoginUser',1);
      ipCookie('Login',user);
      $location.path('/');
      $route.reload();
    }).error(function(err){
      alert("Username/Password is invalid!");
    });
  };
  $scope.cancel = function () {
  	$uibModalInstance.dismiss('cancel');
  };
  $scope.signup = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupCtrl',
      size: ''
    });
  };
});
