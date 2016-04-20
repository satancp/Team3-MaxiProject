'use strict';

class NavbarController {
  //start-non-standard
  //end-non-standard

  constructor($scope,$location,ipCookie,$route,$uibModal) {
    this.$location = $location;
    $scope.state_cookie = ipCookie('LoginUser');
    $scope.logout = function () {
      ipCookie.remove('LoginUser');
      $scope.state_cookie = ipCookie('LoginUser');
      $route.reload();
    };
    
    $scope.search = function () {
      alert($scope.keywords);
    };
    $scope.animationsEnabled = true;
    $scope.login = function () {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninCtrl',
        size: 'sm'
      });
    };
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('maxiProjectApp')
  .controller('NavbarController', NavbarController);
