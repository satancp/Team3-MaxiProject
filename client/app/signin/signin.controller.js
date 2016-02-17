'use strict';

angular.module('maxiProjectApp')
  .controller('SigninCtrl', function ($scope, User, $uibModalInstance, $uibModal, ipCookie, $location, $route) {
  $scope.animationsEnabled = true;
  $scope.handleLoginBtnClick = function () {
    var data = new Object();
    data.username = $scope.loginForm.username;
    data.password = $scope.loginForm.password;
    var query = new Object();
    query.type = 'username';
    query.content = data.username;
    query.auth = '';
    query.api = 'user';
    User.checkUser(query).success(function (message) {
      if(message == "OK"){
        $scope.errm = 0;
        User.loginUser(data)
        .success(function (user) {
          $uibModalInstance.dismiss('ok');
          ipCookie('LoginUser',user);
          $location.path('/users/'+user._id);
          $route.reload();
        }).error(function () {
          $scope.errm = 2;
        });
      }
      else{
        $scope.errm = 1;
      }
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
      size: 'sm',
    });
  };
});
