!function(){function e(e,t,o,r){t.html5Mode(!1),e.when("/",{templateUrl:"views/home.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"}),o.interceptors.push("authInterceptor")}function t(e){e.useStaticFilesLoader({prefix:"lang/",suffix:".json"}),e.preferredLanguage("es"),e.useSanitizeValueStrategy("sanitizeParameters")}function o(e){var t={50:"#7bcb7e",100:"#68c46d",200:"#56bc5b",300:"#46b34b",400:"#3fa044",500:"#388E3C",600:"#317c34",700:"#2a692d",800:"#225725",900:"#1b451d",A100:"#8dd290",A200:"#9fd9a2",A400:"#ffffff",A700:"#143315",contrastDefaultColor:"light"};e.definePalette("customPrimary",t);var o={50:"#01405d",100:"#015276",200:"#02638f",300:"#0275a8",400:"#0286c2",500:"#0398db",600:"#14b4fc",700:"#2ebcfc",800:"#47c4fd",900:"#60ccfd",A100:"#14b4fc",A200:"#03A9F4",A400:"#0398db",A700:"#79d4fd",contrastDefaultColor:"light"};e.definePalette("customAccent",o);var r={50:"#ffb280",100:"#ffa266",200:"#ff934d",300:"#ff8333",400:"#ff741a",500:"#ff6400",600:"#e65a00",700:"#cc5000",800:"#b34600",900:"#993c00",A100:"#ffc199",A200:"#ffd1b3",A400:"#ffe0cc",A700:"#803200",contrastDefaultColor:"light"};e.definePalette("customWarn",r);var a={50:"#fdfdfd",100:"#f0f0f0",200:"#e3e3e3",300:"#d6d6d6",400:"#cacaca",500:"#BDBDBD",600:"#b0b0b0",700:"#a3a3a3",800:"#979797",900:"#8a8a8a",A100:"#ffffff",A200:"#ffffff",A400:"#eaedf2",A700:"#7d7d7d"};e.definePalette("customBackground",a),e.theme("default").primaryPalette("customPrimary").accentPalette("customAccent").warnPalette("customWarn").backgroundPalette("customBackground")}function r(e,t,o,r){return{request:function(e){return e.headers=e.headers||{},e},responseError:function(e){return 404===e.status?(r.path("/"),t.reject(e)):t.reject(e)}}}function a(e,t){}angular.module("galiweather",["ngRoute","ngMaterial","ngMessages","ngSanitize","underscore","pascalprecht.translate"]).config(e).config(t).config(o),e.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],t.$inject=["$translateProvider"],o.$inject=["$mdThemingProvider"],angular.module("galiweather").factory("authInterceptor",r),r.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("galiweather").run(a),a.$inject=["$rootScope","$location"]}(),function(){angular.module("galiweather").constant("CONSTANTS",{API_URL:"http://api.openweathermap.org/data/2.5/forecast/daily",API_KEY:"3698df8cc8e27b990e20db7aa3b15f06"})}(),function(){function e(e,t){function o(t,o){this.imageLocations=t,this.id=o,this.imageCount=this.imageLocations.length,this.loadCount=0,this.errorCount=0,this.states={PENDING:1,LOADING:2,RESOLVED:3,REJECTED:4},this.state=this.states.PENDING,this.deferred=e.defer(),this.promise=this.deferred.promise}return o.preloadImages=function(e,t){console.log(t);var r=new o(e,t);return r.load()},o.prototype={constructor:o,isInitiated:function(){return this.state!==this.states.PENDING},isRejected:function(){return this.state===this.states.REJECTED},isResolved:function(){return this.state===this.states.RESOLVED},load:function(){if(this.isInitiated())return this.promise;this.state=this.states.LOADING;for(var e=0;e<this.imageCount;e++)this.loadImageLocation(this.imageLocations[e]);return this.promise},handleImageError:function(e){this.errorCount++,this.isRejected()||(this.state=this.states.REJECTED,this.deferred.reject(e))},handleImageLoad:function(e){if(this.loadCount++,!this.isRejected()&&(this.deferred.notify({percent:Math.ceil(this.loadCount/this.imageCount*100),imageLocation:e,id:this.id}),this.loadCount===this.imageCount)){var t={src:this.imageLocations[0],id:this.id};this.state=this.states.RESOLVED,console.log(this.id),this.deferred.resolve(t)}},loadImageLocation:function(e){var o=this,r=angular.element(new Image).bind("load",function(e){t.$apply(function(){o.handleImageLoad(e.target.src),o=r=e=null})}).bind("error",function(e){t.$apply(function(){o.handleImageError(e.target.src),o=r=e=null})}).attr("src",e)}},o}angular.module("galiweather").factory("preloader",["$q","$rootScope",e])}(),function(){"use strict";function e(e,t){function o(t,o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(t)?e.localStorage&&e.localStorage.setItem(t,angular.toJson(o)):void console.warn("localStorage with the name "+t+" already exists. Please pick another name.")}function r(t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&angular.fromJson(e.localStorage.getItem(t))}function a(t,o){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.setItem(t,angular.toJson(o))}function n(t){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.removeItem(t)}function i(){return s||console.log("localStorage not supported, make sure you have the $cookies supported."),e.localStorage&&e.localStorage.clear()}function c(){return e.localStorage}var l="undefined"==typeof window.localStorage?void 0:window.localStorage,s=!(void 0===typeof l||void 0===typeof window.JSON);return angular.element(e).on("storage",function(e,o){e.key===o&&t.$apply()}),{set:o,get:r,update:a,remove:n,removeAll:i,list:c}}angular.module("galiweather").factory("LocalStorage",["$window","$rootScope",e])}(),function(){"use strict";function e(e,t,o){function r(r,a){var n=t.defer(),i={id:a,APPID:o.API_KEY,units:"metric"};return e({method:r,url:o.API_URL,params:i}).then(function(e){e.config||console.log("Server error occured."),n.resolve(e)},function(e){n.reject(e)}),n.promise}var a={query:r};return a}angular.module("galiweather").factory("QueryService",["$http","$q","CONSTANTS",e])}(),function(){"use strict";function e(e){var t={restrict:"E",replace:!0,templateUrl:"components/directives/navigation/main-nav.html",link:function(t){function o(t){return function(){e(t).toggle()}}t.toggleRight=o("right")}};return t}angular.module("galiweather").directive("mainNav",["$mdSidenav",e])}(),function(){"use strict";function e(){var e={restrict:"E",replace:!0,templateUrl:"components/directives/dashboard/dashboard.html"};return e}angular.module("galiweather").directive("dashBoard",e)}(),function(){"use strict";function e(){var e={restrict:"E",replace:!0,templateUrl:"components/directives/singleresult/single-result.html",link:function(e){e.styles={deg:{name:"W_DIR",color:"wdir",unit:"º",ico:"icon-air"},temp:{name:"TEMP",color:"tem",unit:"ºC",ico:"icon-thermometer"},pressure:{name:"PRESS",color:"press",unit:"hPa",ico:"icon-globe"},speed:{name:"W_SPEED",color:"wspeed",unit:"m/s",ico:"icon-air"},humidity:{name:"HUMIDITY",color:"humidity",unit:"%",ico:"icon-water"},clouds:{name:"CLOUDS",color:"clouds",unit:"%",ico:"icon-cloud-1"},weather:{name:"WEATHER",color:"weather",unit:"",ico:""},rain:{name:"RAIN",color:"rain",unit:"mm",ico:"icon-water"}}}};return e}angular.module("galiweather").directive("singleResult",e)}(),function(){"use strict";function e(){var e={restrict:"E",replace:!0,templateUrl:"components/directives/lateral/lateral.html"};return e}angular.module("galiweather").directive("lateralPanel",e)}();