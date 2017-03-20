/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('galiweather')
    .controller('MainController', ['QueryService',
      '$timeout', '$route', '_', 'preloader', MainController]);



  function MainController(QueryService, $timeout, $route, _, preloader) {

    // 'controller as' syntax
    var self = this;
    self.loadingResults = false;
    self.landingPage = true;
    self.showSingle = false;
    self.provincesFilter = [6357300, 6359189, 6359872, 6360237];
    self.daysFilter = [];
    self.results = [];
    self.singleResult = undefined;

    /*****************************
     * Preload Images
     **************************/
    self.cityImg = {
      6357300: {
        src:"images/cor.png",
        loading: true
      },
      6359189: {
        src:'images/lugo.png',
        loading: true
      },
      6359872: {
        src:'images/ourense.png',
        loading: true
      },
      6360237: {
        src:'images/pont.png',
        loading: true
      }
    };

    for(var img in self.cityImg)
      preloader.preloadImages( [self.cityImg[img].src], img ).then(
        function handleResolve( image ) {
          // Loading was successful.
          console.log(image)
          self.cityImg[image.id].loading = false;
          // self.cityImg[image.id].src = image.source;
          console.info( self.cityImg);
        },
        function handleReject(imageLocation) {
          // Loading failed on at least one image.
          console.error( "Image Failed", imageLocation );
          console.info( "Preload Failure" );
        },
        function handleNotify( event, id ) {
          // $scope.percentLoaded = event.percent;
          console.info( "Percent loaded:", event.percent, " ", event.id );
        }
      );

    /***********************************
     *
     *  MENUBAR DATA CONTROL
     *
     ***********************************/
    var provinces = {
      'COR': 6357300,
      'LUG': 6359189,
      'OUR': 6359872,
      'PONT': 6360237
    };

    var days = {
      1: 1,
      2: 2,
      3: 3,
      4: 4
    };

    self.vegObjs = [
      {
        'name' : 'Broccoli',
        'type' : 'Brassica'
      },
      {
        'name' : 'Cabbage',
        'type' : 'Brassica'
      },
      {
        'name' : 'Carrot',
        'type' : 'Umbelliferous'
      }
    ];

    self.menuBarOptions = {
      province: {
        id: 1,
        placeholder: "SEL_PROV",
        label: "Prov.",
        variable: '',
        values: provinces
      },
      day: {
        id: 2,
        placeholder: "SEL_DAY",
        label: "Pred.",
        variable: '',
        values: days
      }
    };

    self.demark = function(){
      self.menuBarOptions.province.variable = '';
    };

    self.updateSingleResult = function(list){
      var newList = _.map(list, function(item){
        delete item["dt"];
        var newItem = _.map(item, function(v, k){
          var newValue = {};
          newValue.data = v;
          newValue.name = k;
          return newValue;
        });
        return newItem;
      });
      console.log(newList);
      self.showSingle = true;
      self.singleResult = newList;
    };

    function addDays(days){
      var newDate = new Date();
      return newDate.setDate(newDate.getDate()+days);
    };

    function constructDaysList(value){
      var newArray = [];
      for(var i = 0; i < value; i++){
        newArray = newArray.concat(addDays(i));
      }
      return newArray;
    }
    /******************************
     * NAV FUNCTIONS
     ***********************************/
    self.search = function(){
      try{
        self.results = [];
        if(self.landingPage)
          self.loadingResults = true;
        self.landingPage = false;
        if(self.menuBarOptions.province.variable.length > 0)
          self.provincesFilter = self.menuBarOptions.province.variable;
        if(self.menuBarOptions.day.variable !== '')
          self.daysFilter = constructDaysList(self.menuBarOptions.day.variable);
        else
          self.daysFilter = constructDaysList(4);
        for(var prov in self.provincesFilter)
          QueryService.query("GET", self.provincesFilter[prov]).then(function(result){
            //se establece un timeout para dejar salir de la animacion de carga
            //más relevante para cargas más pesadas de datos
            if(self.results.length === 0)
              self.loadingResults = false;
            if(self.provincesFilter.length>1) {
              self.showSingle = false;
              self.results = self.results.concat(result);
            }else{
              self.updateSingleResult(result.data.list);
              console.log(self.singleResult);
            }
          });
      } catch(Exception){
        console.log(Exception);
        self.landingPage = true;
        self.loadingResults = false;
        self.resuslt = []
        //toast de error
      }
    };

    self.goBack = function(){
      if(self.showSingle) {
        self.landingPage = (self.results.length === 0);
        self.showSingle = false;
      }else{
        self.landingPage = true;
        self.results = [];
        self.singleResult = undefined;
      }

    }
  }

})();
