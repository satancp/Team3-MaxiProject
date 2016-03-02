'use strict';

angular.module('maxiProjectApp')
    .factory('Business', ['$http', function($http){
   var api = {
     getallBusiness : function() {
          return $http.get('/api/businesss/');
     },
     getBusiness : function(id) {
          return $http.get('/api/businesss/'+id);
     }
  };
  return api;
}]);