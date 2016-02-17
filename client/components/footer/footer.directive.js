'use strict';

angular.module('maxiProjectApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      controller: 'FooterController',
      controllerAs: 'footer',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
