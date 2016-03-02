'use strict';

angular.module('maxiProjectApp')
  .controller('SigninCtrl', function ($scope, User, $uibModalInstance, $uibModal, ipCookie, $location, $route) {
  $scope.animationsEnabled = true;
  $scope.handleLoginBtnClick = function () {
    var data = new Object();
    data.username = $scope.loginForm.username;
    data.password = $scope.loginForm.password;
    $uibModalInstance.dismiss('ok');
    ipCookie('LoginUser',1);
    $location.path('/');
    $route.reload();
  };
  $scope.cancel = function () {
  	$uibModalInstance.dismiss('cancel');
  };
  $scope.signup = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupCtrl',
      size: '',
    });
  };
});
