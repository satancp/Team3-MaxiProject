'use strict';

(function() {

class MainController {

  constructor($http, $scope, ipCookie) {
    this.$http = $http;
    this.awesomeThings = [];
  }
}

angular.module('maxiProjectApp')
  .controller('MainController', MainController);

})();
