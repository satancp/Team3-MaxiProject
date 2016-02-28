'use strict';

angular.module('maxiProjectApp')
  .controller('SignupCtrl', function ($scope, ipCookie, User, $uibModalInstance, $location, $route) {
  $scope.bs = [{text:"This is a business"}];
  $scope.sqs = [{text:"This is a question"}];
  $scope.la = [{text:"This is a location"}];
  $scope.handleRegBtnClick = function () {
    var data = new Object();
    data.username = $scope.registrationForm.username;
    data.email = $scope.registrationForm.email;
    data.password = $scope.registrationForm.password;
    data.company = $scope.registrationForm.company;
    data.business = $scope.registrationForm.business;
    data.squestion = $scope.registrationForm.squestion;
    data.answer = $scope.registrationForm.answer;
    User.addUser(data).success(function (added_user) {
      $uibModalInstance.dismiss('ok');
      $scope.err = undefined;
      ipCookie('LoginUser',added_user);
      $location.path('/users/'+ added_user._id);
      $route.reload();
    }).error(function(err){
      $scope.err = err;
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});