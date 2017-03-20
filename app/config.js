;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('galiweather')
    .constant('CONSTANTS', {
      'API_URL': 'http://api.openweathermap.org/data/2.5/forecast/daily',
      'API_KEY': '3698df8cc8e27b990e20db7aa3b15f06'
    });


})();
