'use strict';

angular.module('maxiProjectApp')
  .controller('SignupCtrl', function ($scope, ipCookie, User, $uibModalInstance, $location, $route) {
  Business.getallBusiness()
    .success(function(bs) {
      $scope.bs = bs;
    });
  Question.getallQuestions()
    .success(function(sqs) {
      $scope.sqs1 = sqs[0];
      $scope.sqs2 = sqs[1];
      $scope.sqs3 = sqs[2];
      $scope.sqs4 = sqs[3];
    });
  $scope.handleRegBtnClick = function () {
    var data = new Object();
    data.username = $scope.registrationForm.username;
    data.email = $scope.registrationForm.email;
    data.password = $scope.registrationForm.password;
    data.company = $scope.registrationForm.company;
    data.business = $scope.registrationForm.business;
    data.squestion1 = $scope.registrationForm.squestion1;
    data.squestion2 = $scope.registrationForm.squestion2;
    data.squestion3 = $scope.registrationForm.squestion3;
    data.squestion4 = $scope.registrationForm.squestion4;
    data.answer1 = $scope.registrationForm.answer1;
    data.answer2 = $scope.registrationForm.answer2;
    data.answer3 = $scope.registrationForm.answer3;
    data.answer4 = $scope.registrationForm.answer4;
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