'use strict';

angular.module('maxiProjectApp')
  .controller('ResetpasswordCtrl', function ($scope, $uibModalInstance, $uibModal) {
    $scope.login = function () {
      	var modalInstance = $uibModal.open({
        	animation: $scope.animationsEnabled,
        	templateUrl: 'app/signin/signin.html',
        	controller: 'SigninCtrl',
        	size: 'sm'
      	});
    };
    $scope.cancel = function () {
  		$uibModalInstance.dismiss('cancel');
  	};
  });
