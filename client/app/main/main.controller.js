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
      $scope.select1 = {
        all: [
          {id:"0",content:"Any"},
          {id:"1",content:"SHD"},
          {id:"2",content:"Cytec"},
          {id:"3",content:"Hexcel"},
          {id:"4",content:"SGL"},
          {id:"5",content:"Other"}
        ],
        selected: {id:"0",content:"Any"}
      };
      $scope.select2 = {
        all: [
          {id:"0",content:"Any"},
          {id:"1",content:"Fibre"},
          {id:"2",content:"Resin"},
          {id:"3",content:"Weave"}
        ],
        selected: {id:"0",content:"Any"},
        all_Fibre: [
          {id:"0",content:"Any"},
          {id:"1",content:"Carbon"},
          {id:"2",content:"Glass"},
          {id:"3",content:"Kevlar"},
          {id:"4",content:"Other"}
        ],
        selected_Fibre: {id:"0",content:"Any"},
        all_Resin: [
          {id:"0",content:"Any"},
          {id:"1",content:"Epoxy"},
          {id:"2",content:"Phenolic"},
          {id:"3",content:"Bismaleimide"},
          {id:"4",content:"Other"}
        ],
        selected_Resin: {id:"0",content:"Any"},
        all_Weave: [
          {id:"0",content:"Any"},
          {id:"1",content:"UD"},
          {id:"2",content:"Plain"},
          {id:"3",content:"Twill"},
          {id:"4",content:"Satin"},
          {id:"5",content:"Basket"},
          {id:"6",content:"Leno"},
          {id:"7",content:"Other"}
        ],
        selected_Weave: {id:"0",content:"Any"}
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