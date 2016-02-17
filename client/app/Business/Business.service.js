'use strict';

angular.module('maxiProjectApp')
    .factory('Business', ['$http', function($http){
   var api = {
     getallBusiness : function() {
          return $http.get('/api/businesss/');
     }
  };
  return api;
}]);