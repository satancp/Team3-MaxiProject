'use strict';

angular.module('maxiProjectApp')
    .factory('Location', ['$http', function($http){
   var api = {
     getallLocation : function() {
          return $http.get('/api/locations/');
     }
  };
  return api;
}]);
