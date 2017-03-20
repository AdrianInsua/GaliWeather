;(function() {

  'use strict';

  /**
   * Lateral panel
   * @author Adrian Insua
   * @ngdoc  Directive
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular
    .module('galiweather')
    .directive('lateralPanel', lateralPanel);

  function lateralPanel() {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/directives/lateral/lateral.html'
    };

    return directiveDefinitionObject;

  }

})();
