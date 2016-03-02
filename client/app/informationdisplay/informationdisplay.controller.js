'use strict';

angular.module('maxiProjectApp')
  .controller('InformationdisplayCtrl', function ($scope, ipCookie, $filter, NgTableParams, $location, $route) {
  	$scope.bs = [{text:"This is a business"}];
    $scope.ca = [{text:"This is a category"}];
    $scope.ma = [{text:"This is a market"}];
  	$scope.get = function() {
    	$location.path('/informationdisplay');
        $route.reload();
  	};
  	var data = 
  	[
  		{name:"Data1",type:"Fiber"},
  		{name:"Data2",type:"EX"},
  		{name:"Data3",type:"Wine"},
  		{name:"Data4",type:"Game"},
  		{name:"Data5",type:"Game"}

  	];
  	$scope.tableParams = new NgTableParams({
        page: 1, 
        count: data.length * 0.4,  
        filter: {
        	name: ''
        },
        sorting: {
            name: 'asc'  
        }
    }, {total: data.length,
    	counts: [2,3,4],
        getData: function(params) {
            var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;
            params.total(orderedData.length);
            return (orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});
