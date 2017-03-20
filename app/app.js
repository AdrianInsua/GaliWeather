/**
 *
 *
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 *
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('galiweather', [
      'ngRoute',
      'ngMaterial',
      'ngMessages',
      'ngSanitize',
      'underscore',
      'pascalprecht.translate'
    ])
    .config(routing)
    .config(translate)
    .config(theming);

  // safe dependency injection
  // this prevents minification issues
  routing.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function routing($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');
  };

  translate.$inject = ['$translateProvider'];

  function translate($translateProvider) {
    //translations
    $translateProvider.useStaticFilesLoader({
      prefix: 'lang/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('es');

    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  };

  theming.$inject = ['$mdThemingProvider'];

  function theming($mdThemingProvider){
    //theming
    var customPrimary = {
      '50': '#7bcb7e',
      '100': '#68c46d',
      '200': '#56bc5b',
      '300': '#46b34b',
      '400': '#3fa044',
      '500': '#388E3C',
      '600': '#317c34',
      '700': '#2a692d',
      '800': '#225725',
      '900': '#1b451d',
      'A100': '#8dd290',
      'A200': '#9fd9a2',
      'A400': '#ffffff',
      'A700': '#143315',
      'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
      .definePalette('customPrimary',
        customPrimary);

    var customAccent = {
      '50': '#01405d',
      '100': '#015276',
      '200': '#02638f',
      '300': '#0275a8',
      '400': '#0286c2',
      '500': '#0398db',
      '600': '#14b4fc',
      '700': '#2ebcfc',
      '800': '#47c4fd',
      '900': '#60ccfd',
      'A100': '#14b4fc',
      'A200': '#03A9F4',
      'A400': '#0398db',
      'A700': '#79d4fd',
      'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
      .definePalette('customAccent',
        customAccent);

    var customWarn = {
      '50': '#ffb280',
      '100': '#ffa266',
      '200': '#ff934d',
      '300': '#ff8333',
      '400': '#ff741a',
      '500': '#ff6400',
      '600': '#e65a00',
      '700': '#cc5000',
      '800': '#b34600',
      '900': '#993c00',
      'A100': '#ffc199',
      'A200': '#ffd1b3',
      'A400': '#ffe0cc',
      'A700': '#803200',
      'contrastDefaultColor': 'light'
    };
    $mdThemingProvider
      .definePalette('customWarn',
        customWarn);

    var customBackground = {
      '50': '#fdfdfd',
      '100': '#f0f0f0',
      '200': '#e3e3e3',
      '300': '#d6d6d6',
      '400': '#cacaca',
      '500': '#BDBDBD',
      '600': '#b0b0b0',
      '700': '#a3a3a3',
      '800': '#979797',
      '900': '#8a8a8a',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#eaedf2',
      'A700': '#7d7d7d'
    };
    $mdThemingProvider
      .definePalette('customBackground',
        customBackground);

    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn')
      .backgroundPalette('customBackground')


};
  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   *
   */
  angular
    .module('galiweather')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('galiweather')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();
