'use strict';
angular.module('maxiProjectApp')
  .controller('MainController', function ($scope, ipCookie, $location, $route, $uibModal, Material) {
    Material.getallMaterial().success(function(data) {
      $scope.data = data;
      $scope.cookie = ipCookie;
      $scope.animationsEnabled = true;
      $scope.listall = function() {
        $location.path('/informationdisplay/list/all');
        $route.reload();
      };
      $scope.search = function() {
        $location.path('/informationdisplay/search/' + $scope.select2.selected_Fibre.content + '+' + $scope.select2.selected_Fibre_code + '+' + $scope.select2.selected_Resin.content + '+' + $scope.select2.selected_Resin_code + '+' + $scope.select2.selected_Weave.content);
        $route.reload();
      };
      $scope.keywordsearch = function() {
        $location.path('/informationdisplay/keywordsearch/' + $scope.searchWord);
        $route.reload();
      };
      $scope.request = function() {
        $location.path('/requestedview');
        $route.reload();
      };
      $scope.postmaterial = function(){
        var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/postpage/postpage.html',
        controller: 'PostpageCtrl',
        size: 'md'
      });
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
      var temp_array = [];
      for(var temp in $scope.data) {
        if(temp.fibre_class != 'Carbon' && temp.fibre_class != 'Glass' && temp.fibre_class != 'Kevlar') {
          if(!temp_array.includes(temp.fibre_class)) {
            temp_array.push(temp.fibre_class);
          }
        }
      }
      for(var t in temp_array) {
        $scope.select2.all_Fibre.push({id:$scope.select2.all_Fibre.length,content:t});
      }
      $scope.select2.all_Fibre.push({id:$scope.select2.all_Fibre.length,content:'Other'});
      $scope.select2 = {
        all_Fibre: [
          {id:'0',content:'Any'},
          {id:'1',content:'Carbon'},
          {id:'2',content:'Glass'},
          {id:'3',content:'Kevlar'}
        ],
        selected_Fibre: {id:'0',content:'Any'},
        all_Fibre_code: [],
        selected_Fibre_code: 'Any',
        all_Resin: [
          {id:'0',content:'Any'},
          {id:'1',content:'Epoxy'},
          {id:'2',content:'Phenolic'},
          {id:'3',content:'Bismaleimide'},
          {id:'4',content:'Other'}
        ],
        selected_Resin: {id:'0',content:'Any'},
        all_Resin_code: [],
        selected_Resin_code: 'Any',
        all_Weave: [
          {id:'0',content:'Any'},
          {id:'1',content:'UD'},
          {id:'2',content:'Plain'},
          {id:'3',content:'Twill'},
          {id:'4',content:'Satin'},
          {id:'5',content:'Basket'},
          {id:'6',content:'Leno'},
          {id:'7',content:'Other'}
        ],
        selected_Weave: {id:'0',content:'Any'},
        all_Weave_code: [
          {id:'0',content:'Any'},
          {id:'1',content:'UD'},
          {id:'2',content:'Plain'},
          {id:'3',content:'Twill'},
          {id:'4',content:'Satin'},
          {id:'5',content:'Basket'},
          {id:'6',content:'Leno'},
          {id:'7',content:'Other'}
        ],
        selected_Weave_code: {id:'0',content:'Any'},
        setFibreClass : function() {
          $scope.select2.all_Fibre_code = [];
          $scope.select2.selected_Fibre_code = 'Any';
          $scope.select2.all_Fibre_code.push('Any');
          for(var i = 0;i <= $scope.data.length - 1;i++) {
            if(!($scope.data[i].fibre_code in $scope.select2.all_Fibre_code) && $scope.data[i].fibre_class === $scope.select2.selected_Fibre.content) {
              $scope.select2.all_Fibre_code.push($scope.data[i].fibre_code);
            }
          }
        },
        setResinClass : function() {
          $scope.select2.all_Resin_code = [];
          $scope.select2.selected_Resin_code = 'Any';
          $scope.select2.all_Resin_code.push('Any');
          for(var i = 0;i <= $scope.data.length - 1;i++) {
            if(!($scope.data[i].resin_details in $scope.select2.all_Resin_code) && $scope.data[i].resin_classification == $scope.select2.selected_Resin.content) {
              $scope.select2.all_Resin_code.push($scope.data[i].resin_details);
            }
          }
        }
      };
    });
});