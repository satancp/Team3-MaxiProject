angular.module('maxiProjectApp')
  .controller('MainController', function ($scope, Usernumber, News, ipCookie, $location, $route) {
  	//Usernumber.getNumbers().success(function (numbers) {
  		//News.getLatest().success(function (news) {
  		//$scope.numbers = numbers;
  		//$scope.allnews = news;
      $scope.bs = [{text:"This is a business"}];
      $scope.ca = [{text:"This is a category"}];
      $scope.ma = [{text:"This is a market"}];
  		$scope.isCollapsed = true;
  		$scope.get = function() {
        $location.path('/informationdisplay');
        $route.reload();
  		};
      $scope.request = function() {
        $location.path('/requestedview');
        $route.reload();
      }
  		$scope.status1 = {
    		isopen: false
  		};
  		$scope.status2 = {
    		isopen: false
  		};
  		$scope.status3 = {
    		isopen: false
  		};
      $scope.select = {
        all_materials: [
          {id:"0",type:"Any"},
          {id:"1",type:"Fibre"},
          {id:"2",type:"Resin"},
          {id:"3",type:"Weave"}
        ],
        selected_material: {id:"0",type:"Any"}
      };
      $scope.allnews = 
  		[
  			{date:"1992.05.08",
         title:"Hello this is a demo",
         content:"The contents",
         id:0},
         {date:"1992.05.08",
         title:"Hello this is a demo",
         content:"The contents",
         id:1},
         {date:"1992.05.08",
         title:"Hello this is a demo",
         content:"The contents",
         id:2},
         {date:"1992.05.08",
         title:"Hello this is a demo",
         content:"The contents",
         id:3},
         {date:"1992.05.08",
         title:"Hello this is a demo",
         content:"The contents",
         id:4}
  		];
  	//});
//});
});