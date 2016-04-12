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
  		$scope.date = new Date();
  		$scope.myInterval = 5000;
  		$scope.noWrapSlides = false;
  		$scope.active = 0;
  		$scope.currentIndex = 2;
  		$scope.slides = 
  		[
  			{image: '../../assets/images/1.jpg',
      	text: 'Nice image',
      	link: 'http://www.google.co.uk',
      	id: 0},
      	{image: '../../assets/images/2.jpg',
      	text: 'Awesome photograph',
      	link: 'http://www.baidu.com',
      	id: 1},
        {image: '../../assets/images/3.jpg',
        text: 'Awesome photograph',
        link: 'http://www.baidu.com',
        id: 2},
        {image: '../../assets/images/4.jpg',
        text: 'Awesome photograph',
        link: 'http://www.baidu.com',
        id: 3}
      	];
      	function generateIndexesArray() {
    		var indexes = [];
    		for (var i = 0; i < currentIndex; ++i) {
      			indexes[i] = i;
    		}
    		return shuffle(indexes);
  		}
		function shuffle(array) {
    		var tmp, current, top = array.length;
			if (top) {
      			while (--top) {
        			current = Math.floor(Math.random() * (top + 1));
        			tmp = array[current];
        			array[current] = array[top];
        			array[top] = tmp;
      			}
    		}
    		return array;
  		}
  	//});
//});
});