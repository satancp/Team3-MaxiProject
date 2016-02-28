'use strict';

angular.module('maxiProjectApp')
  .service('Usernumber', ['$http', function($http) {
    var api = {
     getNumbers : function() {
          return $http.get('/api/usernums');
     }
  };
  return api;
  }]);
