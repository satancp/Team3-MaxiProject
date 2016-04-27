'use strict';

angular.module('maxiProjectApp')
  .controller('RequestedviewCtrl', function($scope, ipCookie, $filter, NgTableParams, $location, $route, $uibModal) {
    $scope.un = [{text:'This is a user name'},{text:'e.g. John'}];
    $scope.mn = [{text:'This is a material name'},{text:'e.g. Material Name'}];
    $scope.ca = [{text:'This is a material category'},{text:'e.g. Material Type'}];
    $scope.pd = [{text:'This is a post date'},{text:'e.g. 03-04-2016'}];
    $scope.get = function() {
    	$location.path('/requestedview');
    	$route.reload();
    };
	  $scope.post = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/postpage/postpage.html',
        controller: 'PostpageCtrl',
        size: ''
      });
    };
	  var data = 
  	[
  		{username:'Data1',name:'Data1',type:'Fiber',date:'01-02-2016'},
  		{username:'Data2',name:'Data2',type:'EX',date:'01-03-2016'},
  		{username:'Data3',name:'Data3',type:'Wine',date:'11-03-2016'},
  		{username:'Data4',name:'Data4',type:'Game',date:'01-04-2016'},
  		{username:'Data5',name:'Data5',type:'Game',date:'11-04-2016'},
  		{username:'Data6',name:'Data6',type:'Wine',date:'01-02-2016'},
  		{username:'Data7',name:'Data7',type:'Wine',date:'11-02-2016'},
  		{username:'Data8',name:'Data8',type:'Wine',date:'10-02-2016'},
  		{username:'Data9',name:'Data9',type:'Wine',date:'07-02-2016'},
  		{username:'Data10',name:'Data10',type:'Wine',date:'09-03-2016'},
  		{username:'Data11',name:'Data11',type:'Wine',date:'26-03-2016'},
  		{username:'Data12',name:'Data12',type:'Wine',date:'15-03-2016'}
  	];
  	$scope.tableParams = new NgTableParams({
      page: 1, 
      count: data.length * 0.6,  
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
