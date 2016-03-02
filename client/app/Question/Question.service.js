'use strict';

angular.module('maxiProjectApp')
    .factory('Question', ['$http', function($http){
   var api = {
     getallQuestion : function() {
          return $http.get('/api/questions/');
     }
  };
  return api;
}]);