'use strict';

angular.module('maxiProjectApp')
  .factory('User', ['$http', function($http){
   var api = {
     getUsers : function() {
          return $http.get('/api/users');
     },
     getUser : function(id) {
          return $http.get('/api/users/'+id);
     },
     confirmUser : function(content) {
          return $http.get('/api/users/confirm/'+content);
     },
     loginUser : function(user) {
          return $http.post('/api/users/login',user);
     },
     addUser : function(user) {
          return $http.post('/api/users',user);
     },
     updateUser : function(id,user) {
          return $http.put('/api/users/'+id,user);
     },
     checkUser : function(query) {
          return $http.get('/api/solvequerys?api='+query.api+'&type='+query.type+'&content='+query.content+'&auth='+query.auth);
     }
  };
  return api;
}]);