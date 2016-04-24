'use strict';

angular.module('maxiProjectApp')
    .factory('Material', ['$http', function($http){
   var api = {
     getallMaterial : function() {
          return $http.get('/api/materials/');
     },
     getMaterial : function(id) {
          return $http.get('/api/materials/' + id);
     }
  };
  return api;
}]);
