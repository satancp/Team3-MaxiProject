'use strict';

angular.module('maxiProjectApp')
  .factory('Question', ['$http', function($http){
   var api = {
     getallQuestions : function() {
          return $http.get('/api/questions/');
     }
  };
  return api;
}]);
