;(function() {

  'use strict';

  /**
   * Main navigation
   * @author Adrian Insua
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('galiweather')
    .directive('mainNav', ['$mdSidenav', tinMainNav]);

  function tinMainNav($mdSidenav) {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/directives/navigation/main-nav.html',
      link: function(scope){
        scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
          return function() {
            $mdSidenav(componentId).toggle();
          };
        }
      }
    };


    return directiveDefinitionObject;

  }

})();
