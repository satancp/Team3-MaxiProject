'use strict';

angular.module('maxiProjectApp')
  .controller('SignupCtrl', function ($scope, ipCookie, Question, User, $uibModalInstance, $location, $route, rfc4122) {
  Question.getallQuestion().success(function(sqs) {
        $scope.sqs = sqs;
        $scope.handleRegBtnClick = function () {
          var data = new Object();
          data.name = $scope.registrationForm.name;
          data.email = $scope.registrationForm.email;
          data.password = $scope.registrationForm.password;
          data.company = $scope.registrationForm.company;
          data.question_id = $scope.registrationForm.question.id;
          data.answer = $scope.registrationForm.answer;
          data.phonenumber = $scope.registrationForm.phonenumber;
          data.power = 0;
          data.confirmation = rfc4122.v4();
          data.confirmation_state = false;
          User.addUser(data).success(function (added_user) {
            alert("Successfully!Enjoy~");
            $uibModalInstance.dismiss('ok');
            $scope.err = undefined;
            ipCookie('LoginUser',1);
            ipCookie('Login',added_user);
            $location.path('/');
            $route.reload();
          }).error(function(err){
            $scope.err = err;
          });
        };
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      });
});