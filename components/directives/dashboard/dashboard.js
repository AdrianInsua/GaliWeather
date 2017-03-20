;(function() {

  'use strict';

  /**
   * Main panel
   * @author Adrian Insua
   * @ngdoc  Directive
   *
   * @example
   * <dash-board><dash-board/>
   *
   */
  angular
    .module('galiweather')
    .directive('dashBoard', dashBoard);


  function dashBoard() {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/directives/dashboard/dashboard.html'
    };

    return directiveDefinitionObject;

  }

})();
