'use strict';

angular.module('maxiProjectApp')
    .factory('Material', ['$http', function($http){
   var api = {
     getallMaterial : function() {
          return $http.get('/api/materials/all/');
     },
     getMaterial : function(id) {
          return $http.get('/api/materials/' + id);
     },
     searchMaterials : function(query) {
          return $http.get('/api/materials?fibreclass=' + query.fibre_class + '&fibrecode=' + query.fibre_code + '&resinclass=' + query.resin_class + '&resincode=' + query.resin_code + '&weave=' + query.weave);
     }
  };
  return api;
}]);
