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
      templateUrl: 'components/directives/dashboard/dashboard.html',
      link: function(scope){
            var dateList = {}
            scope.cityImg = {
              6357300: 'images/cor.png',
              6359189: 'images/lugo.png',
              6359872: 'images/ourense.png',
              6360237: 'images/pont.png'
            };
      }
    };

    return directiveDefinitionObject;

  }

})();
