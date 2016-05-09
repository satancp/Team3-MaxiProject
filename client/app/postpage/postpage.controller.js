'use strict';

angular.module('maxiProjectApp')
  .controller('PostpageCtrl', function ($scope, ipCookie, $location, $route, $uibModalInstance, Material) {
    $scope.postBtnClick = function() {
        var data = new Object();
        data.manufacturer = $scope.postForm.manufacturer;
        data.manufacturer_date = $scope.postForm.manufacturer_date;
        data.use_by_date = $scope.postForm.use_by_date;
        data.fibre_class = $scope.postForm.fibre_class;
        data.fibre_code = $scope.postForm.fibre_code;
        data.resin_class = $scope.postForm.resin_class;
        data.weave_pattern = $scope.postForm.weave_pattern;
        data.fabric_weight = $scope.postForm.fabric_weight;
        data.quantity = $scope.postForm.quantity;
        data.comments = $scope.postForm.comments;
        Material.addMaterials(data).success(function(added_material) {
        	$uibModalInstance.dismiss('ok');
        	$scope.err = undefined;
            $location.path('/');
            $route.reload();
        }).error(function(err){
            $scope.err = err;
        });
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

    $scope.open = function() {
      $scope.popup.opened = true;
    };

    $scope.popup = {
      opened: false
    };

    $scope.format = 'dd-MMMM-yyyy';
});
