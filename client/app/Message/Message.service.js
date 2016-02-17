'use strict';

angular.module('maxiProjectApp')
  .factory('Message', ['$http', function($http){
   var api = {
     getMails : function(id) {
          return $http.get('/api/messages/'+id);
     },
     sendMail : function(message) {
          return $http.post('/api/messages/',message);
     },
     deleteMail : function(user_id,message_id) {
          return $http.delete('/api/messages/'+user_id+'/messages/'+message_id);
     }
  };
  return api;
}]);