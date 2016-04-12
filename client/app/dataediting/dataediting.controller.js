'use strict';
(function(){

function DataeditingComponent($scope) {
  $scope.message = 'Hello';
}

angular.module('maxiProjectApp')
  .component('dataediting', {
    templateUrl: 'app/dataediting/dataediting.html',
    controller: DataeditingComponent
  });

})();
