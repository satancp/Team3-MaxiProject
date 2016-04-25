'use strict';

angular.module('maxiProjectApp')
    .factory('ResultDetail', ['$http', function($http){
   var api = {
     getMaterial : function(id) {
          return $http.get('/api/material/' + id);
     },
     getAllMaterials : function() {
          return $http.get('/api/material/');
     }
  };
  return api;
}]);