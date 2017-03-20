;(function() {

  'use strict';

  /**
   * Main panel single result
   * @author Adrian Insua
   * @ngdoc  Directive
   *
   * @example
   * <single-result><single-result/>
   *
   */
  angular
    .module('galiweather')
    .directive('singleResult',  singleResult);


  function singleResult($anchorScroll, $timeout) {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/directives/dashboard/single-result.html',
      link: function(scope){
        scope.styles = {
          deg: {
            name: 'W_DIR',
            color: 'wdir',
            unit: 'º',
            ico: 'icon-air'
          },
          temp: {
            name: 'TEMP',
            color: 'tem',
            unit: 'ºC',
            ico: 'icon-thermometer'
          },
          pressure: {
            name: 'PRESS',
            color: 'press',
            unit: 'hPa',
            ico: 'icon-globe'
          },
          speed: {
            name: 'W_SPEED',
            color: 'wspeed',
            unit:'m/s',
            ico: 'icon-air'
          },
          humidity: {
            name: 'HUMIDITY',
            color: 'humidity',
            unit:'%',
            ico: 'icon-water'
          },
          clouds: {
            name: 'CLOUDS',
            color: 'clouds',
            unit: '%',
            ico: 'icon-cloud-1'
          },
          weather: {
            name: 'WEATHER',
            color: 'weather',
            unit: '',
            ico: ''
          },
          rain: {
            name: 'RAIN',
            color: 'rain',
            unit: 'mm',
            ico: 'icon-water'
          }
        }
      }
    };

    return directiveDefinitionObject;

  }

})();
