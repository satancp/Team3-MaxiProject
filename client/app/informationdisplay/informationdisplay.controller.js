'use strict';

angular.module('maxiProjectApp')
  .controller('InformationdisplayCtrl', function ($scope, ipCookie, $filter, NgTableParams, $location, $route, $routeParams, Material) {
    $scope.data = [];
    $scope.cookie = ipCookie;
    if($routeParams.type === 'list') {
      Material.getallMaterial().success(function(data) {
        for(var i = 0;i <= data.length - 1;i++) {
          if((data[i].stock_state && $scope.cookie('Login').power == 0) || ($scope.cookie('Login').power == 1)) {
            $scope.data.push(data[i]);
          }
        }
        $scope.go = function(id) {
          $location.path('/materialDetail/' + id);
          $route.reload();
        };
        $scope.button_fuck = {'true': 'Out', 'false': 'In'};
        $scope.change = function(id) {
          for(var i = 0;i <= $scope.data.length - 1;i++) {
            if($scope.data[i].id === id) {
              $scope.data[i].stock_state = !$scope.data[i].stock_state;
              Material.updateState(id,$scope.data[i].stock_state).success(function(result) {
                $location.replace();
              });
            }
          }
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
    else if($routeParams.type === 'search') {
      var query_array = $routeParams.content.split('+');
      var query = {
        fibre_class: query_array[0],
        fibre_code: query_array[1],
        resin_class: query_array[2],
        resin_code: query_array[3],
        weave: query_array[4]
      };
      Material.searchMaterials(query).success(function(result) {
        for(var i = 0;i <= data.length - 1;i++) {
          if((data[i].stock_state && $scope.cookie('Login').power == 0) || ($scope.cookie('Login').power == 1)) {
            $scope.data.push(data[i]);
          }
        }
        $scope.go = function(id) {
          $location.path('/materialDetail/' + id);
          $route.reload();
        };
        $scope.button_fuck = {'true': 'Out', 'false': 'In'};
        $scope.change = function(id) {
          for(var i = 0;i <= $scope.data.length - 1;i++) {
            if($scope.data[i].id === id) {
              $scope.data[i].stock_state = !$scope.data[i].stock_state;
              Material.updateState(id,$scope.data[i].stock_state).success(function(result) {
                $location.replace();
              });
            }
          }
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
      Material.keywordSearchMaterial($routeParams.content).success(function(data) {
        for(var i = 0;i <= data.length - 1;i++) {
          if((data[i].stock_state && $scope.cookie('Login').power == 0) || ($scope.cookie('Login').power == 1)) {
            $scope.data.push(data[i]);
          }
        }
        $scope.go = function(id) {
          $location.path('/materialDetail/' + id);
          $route.reload();
        };
        $scope.button_fuck = {'true': 'Out', 'false': 'In'};
        $scope.change = function(id) {
          for(var i = 0;i <= $scope.data.length - 1;i++) {
            if($scope.data[i].id === id) {
              $scope.data[i].stock_state = !$scope.data[i].stock_state;
              Material.updateState(id,$scope.data[i].stock_state).success(function(result) {
                $location.replace();
              });
            }
          }
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
});
