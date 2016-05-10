'use strict';

angular.module('maxiProjectApp')
  .controller('PostpageCtrl', function ($scope, ipCookie, $location, $route, $uibModalInstance, Material) {
    $scope.postForm = {};
    $scope.postBtnClick = function() {
        var data = new Object();
        data.manufacturer = $scope.postForm.manufacturer;
        var year1 = $scope.postForm.manufacturer_date.getFullYear();
        var year2 = $scope.postForm.use_by_date.getFullYear();
        var month1 = $scope.postForm.manufacturer_date.getMonth();
        var month2 = $scope.postForm.use_by_date.getMonth();
        var day1 = $scope.postForm.manufacturer_date.getDay();
        var day2 = $scope.postForm.use_by_date.getDay();
        if(month1.toString().length != 2) {
          month1 = '0' + month1;
        }
        if(month2.toString().length != 2) {
          month2 = '0' + month2;
        }
        if(day1.toString().length != 2) {
          day1 = '0' + day1;
        }
        if(day2.toString().length != 2) {
          day2 = '0' + day2;
        }
        data.manufacturer_date = year1 + "-" + month1 + "-" + day1 + " 00:00:00";
        data.use_by_date = year2 + "-" + month2 + "-" + day2 + " 00:00:00";
        if($scope.select.selected_Fibre.content != 'Other') {
            data.fibre_class = $scope.select.selected_Fibre.content;
        }
        else {
            data.fibre_class = $scope.select.input_Fibre;
        }
        data.fibre_code = $scope.postForm.fibre_code;
        data.resin_classification = $scope.postForm.resin_class;
        data.resin_details = $scope.postForm.resin_code;
        data.weave_pattern = $scope.postForm.weave_pattern;
        data.fabric_weight = parseInt($scope.postForm.fabric_weight);
        data.quantity = parseInt($scope.postForm.fabric_weight);
        data.comments = $scope.postForm.comments;
        if(data.comments == undefined) {
          data.comments = "";
        }
        data.poster_id = ipCookie('Login').id;
        data.stock_state = true;
        Material.addMaterials(data).success(function(added_material) {
        	$uibModalInstance.dismiss('ok');
        	$scope.err = undefined;
            $location.path('/');
            $route.reload();
        }).error(function(err){
            $scope.err = err;
        });
    };

    $scope.select = {
        all_Fibre: [
          {id:'0',content:'Carbon'},
          {id:'1',content:'Glass'},
          {id:'2',content:'Kevlar'},
          {id:'3',content:'Other'}
        ],
        selected_Fibre: {id:'0',content:'Carbon'},
        input_Fibre: '',
        setFibreInputState : function() {
          if($scope.select.selected_Fibre.content == 'Other') {
            $scope.select.state = true;
          }
          else {
            $scope.select.state = false;
          }
        },
        state : false
      };

    $scope.cancel = function() {
    	$uibModalInstance.dismiss('cancel');
    };

    $scope.today = function() {
    	$scope.postForm.manufacturer_date = new Date();
    };
    $scope.today();

    $scope.clear = function() {
    	$scope.postForm.manufacturer_date = null;
    };

    function disabled(data) {
      	var date = data.date,
      	mode = data.mode;
      	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1,
	    showWeeks: false
	  };

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.popup1 = {
      opened: false
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.popup2 = {
      opened: false
    };

    $scope.format = 'dd-MMMM-yyyy';
});
