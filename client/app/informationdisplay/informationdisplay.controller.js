'use strict';

angular.module('maxiProjectApp')
  .controller('InformationdisplayCtrl', function ($scope, ipCookie, $filter, NgTableParams, $location, $route, $routeParams, Material) {
    if($routeParams.type == "list") {
      Material.getallMaterial().success(function(data) {
        $scope.data = data;
        $scope.bs = [{text:"This is a business"}];
        $scope.ca = [{text:"This is a category"}];
        $scope.ma = [{text:"This is a market"}];
        $scope.get = function() {
          $location.path('/informationdisplay');
          $route.reload();
        };
        $scope.post = function() {
          $location.path('/postpage');
          $route.reload();
        };
        $scope.tableParams = new NgTableParams({
          page: 1, 
          count: 15,  
          filter: {
            name: ''
          },
          sorting: {
            name: 'asc'  
          }
        }, {total: data.length,
          counts: [],
          getData: function(params) {
            var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;
            params.total(orderedData.length);
            return (orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }
        });
      });
    }
    else {
      
    }
});
