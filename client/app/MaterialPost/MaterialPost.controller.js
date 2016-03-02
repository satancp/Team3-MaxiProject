'use strict';

angular.module('maxiProjectApp')
  .controller('MaterialPostCtrl', function ($scope) {
    $scope.today = function () {
    	$scope.dt = new Date();
    };
    $scope.today();
    $scope.clear = function () {
    	$scope.dt = null;
    };
    $scope.dateOptions = {
    	dateDisabled: disabled,
    	formatYear: 'yy',
    	maxDate: new Date(2020, 5, 15),
    	minDate: new Date(),
    	startingDay: 1
    };
    function disabled(data) {
    	var date = data.date,
    	mode = data.mode;
    	return mode === 'day' && (date.getDay()===0 || date.getDay()===6);
    }
    $scope.open1 = function () {
    	$scope.popup1.opened = true;
    };
    $scope.setDate = function (year, month, day) {
    	$scope..dt = new Date(year, month, day);
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.popup1 = {
    	opened: false
    };
    $scope.isCollapsed = true;
    $scope.getData = function() {

  	};
  	$scope.status1 = {
    	isopen: false
  	};
  	$scope.status2 = {
    	isopen: false
  	};
  	$scope.status3 = {
    	isopen: false
  	};
  	$scope.status4 = {
    	isopen: false
  	};
  	$scope.selections = ["one","two","three"];
  	$scope.weight = {
    	optins: ["0.0","1.0","2.0","3.0"],
    	selected: "0.0"
  	};

  });

