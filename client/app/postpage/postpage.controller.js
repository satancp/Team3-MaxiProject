'use strict';

angular.module('maxiProjectApp')
  .controller('PostpageCtrl', function ($scope, ipCookie, $location, $route) {
    $scope.mn = [{text:"This is a material name"},{text:"e.g. Material Name"}];
    $scope.ca = [{text:"This is a material category"},{text:"e.g. Material Type"}];
    $scope.ar = [{text:"This is a application area"},{text:"e.g. Sheffield"},{text:"e.g. London"}];
    $scope.lo = [{text:"This is a location"},{text:"e.g. Sheffield"}];
    $scope.post = function() {
      $location.path('/main');
      $route.reload();
    }

    $scope.clear = function() {
    	$scope.dt = null;
    };

    $scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	  };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  	function disabled(data) {
    	var date = data.date,
      mode = data.mode;
    	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  	}

  	$scope.open1 = function() {
      $scope.dt = new Date();
  		$scope.popup.opened = true;
  	};

  	$scope.popup1 = {opened: false};

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

  	function getDayClass(data) {
    	var date = data.date,
      	mode = data.mode;
    	if (mode === 'day') {
      		var dayToCheck = new Date(date).setHours(0,0,0,0);
      		for (var i = 0; i < $scope.events.length; i++) {
        		var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
        		if (dayToCheck === currentDay) {
          			return $scope.events[i].status;
        		}
      		}
    	}
    	return '';
  	}

  	$scope.model = {weight: 'e.g. 10g'};

});

