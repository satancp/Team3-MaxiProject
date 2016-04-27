'use strict';

angular.module('maxiProjectApp')
  .controller('PostpageCtrl', function ($scope, ipCookie, $location, $route) {
   

    $scope.post = function() {
      $location.path('/main');
      $route.reload();
    }

    $scope.clear = function() {
    	$scope.postMaterialForm.manufacturer_date = null;
    };

    $scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	  };

    function disabled(data) {
      var date = data.date,
      mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };


    $scope.popup1 = {
      opened: false
    };
    $scope.setDate = function(year, month, day) {
      $scope.postMaterialForm.manufacturer_date = new Date(year, month, day);
    };

    $scope.format = 'dd-MMMM-yyyy';
    $scope.altInputFormats = ['M!/d!/yyyy'];

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
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
  	
    function getDayClass(data) {
      alert("fuck");
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


    $scope.handleRegBtnClick = function () {
          var materialdata = new Object();
          materialdata.manufacturer = $scope.postMaterialForm.manufacturer;
          materialdata.manufacturer_date = $postMaterialForm.manufacturer_date;
          materialdata.use_by_date = $scope.postMaterialForm.use_by_date;
          materialdata.fibre_class = $scope.postMaterialForm.fibre_class;
          materialdata.fibre_code = $scope.postMaterialForm.fibre_code;
          materialdata.resin_classification = $scope.postMaterialForm.resin_classification;
          materialdata.weave_pattern = $scope.postMaterialForm.weave_pattern;
          materialdata.fabric_weight = $postMaterialForm.fabric_weight;
          materialdata.quantity = $scope.postMaterialForm.quantity;
          materialdata.comments = $scope.postMaterialForm.comments;
          // Material.addMaterials(data).success(function () {  
          //   $uibModalInstance.dismiss('ok');
          //   $scope.err = undefined;
          //   $location.path('/');
          //   $route.reload();
          // }).error(function(err){
          //   $scope.err = err;
          // });
        };

});

