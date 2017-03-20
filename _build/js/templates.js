angular.module("galiweather").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=en ng-csp ng-app=galiweather><head><base href=\"/\"><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>GaliWeather</title><meta name=description content=\"weather prediction application for galician territory\"><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=/bower_components/angular-material/angular-material.css><link rel=stylesheet type=text/css href=styles/style.css></head><body class=main-wrapper md-colors=\"{\'background-color\': \'background-A400\'}\"><div data-ng-view class=container></div></body><script type=text/javascript src=js/nonangular/jquery-1.11.2.min.js></script><script type=text/javascript src=js/nonangular/lodash.min.js></script><script type=text/javascript src=js/scripts.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-translate/angular-translate.js></script><script type=text/javascript src=bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-sanitize/angular-sanitize.js></script><script src=bower_components/angular-aria/angular-aria.js></script><script src=bower_components/angular-animate/angular-animate.js></script><script src=bower_components/angular-material/angular-material.js></script><script src=bower_components/angular-messages/angular-messages.js></script><script src=bower_components/underscore/underscore.js></script><script src=bower_components/angular-underscore-module/angular-underscore-module.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/LocalStorage.service.js></script><script type=text/javascript src=components/services/queryService.service.js></script><script type=text/javascript src=components/directives/navigation/main.nav.directive.js></script><script type=text/javascript src=components/directives/dashboard/dashboard.js></script><script type=text/javascript src=components/directives/singleresult/single.result.js></script><script type=text/javascript src=components/directives/lateral/lateral.panel.js></script><script type=text/javascript src=app/controller.js></script></html>");
$templateCache.put("fonts/icons-reference.html","<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge,chrome=1\"><meta name=viewport content=\"width=device-width,initial-scale=1\"><title>Font Reference - Untitled font 2</title><link href=\"http://fonts.googleapis.com/css?family=Dosis:400,500,700\" rel=stylesheet type=text/css><link rel=stylesheet href=styles.css><style type=text/css>html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-family:inherit;font-size:100%;vertical-align:baseline}body{line-height:1;color:#000;background:#fff}ol,ul{list-style:none}table{border-collapse:separate;border-spacing:0;vertical-align:middle}caption,th,td{text-align:left;font-weight:normal;vertical-align:middle}a img{border:none}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{font-family:\'Dosis\',\'Tahoma\',sans-serif}.container{margin:15px auto;width:80%}h1{margin:40px 0 20px;font-weight:700;font-size:38px;line-height:32px;color:#fb565e}h2{font-size:18px;padding:0 0 21px 5px;margin:45px 0 0 0;text-transform:uppercase;font-weight:500}.small{font-size:14px;color:#a5adb4;}.small a{color:#a5adb4;}.small a:hover{color:#fb565e}.glyphs.character-mapping{margin:0 0 20px 0;padding:20px 0 20px 30px;color:rgba(0,0,0,0.5);border:1px solid #d8e0e5;-webkit-border-radius:3px;border-radius:3px;}.glyphs.character-mapping li{margin:0 30px 20px 0;display:inline-block;width:90px}.glyphs.character-mapping .icon{margin:10px 0 10px 15px;padding:15px;position:relative;width:55px;height:55px;color:#162a36 !important;overflow:hidden;-webkit-border-radius:3px;border-radius:3px;font-size:32px;}.glyphs.character-mapping .icon svg{fill:#000}.glyphs.character-mapping input{margin:0;padding:5px 0;line-height:12px;font-size:12px;display:block;width:100%;border:1px solid #d8e0e5;-webkit-border-radius:5px;border-radius:5px;text-align:center;outline:0;}.glyphs.character-mapping input:focus{border:1px solid #fbde4a;-webkit-box-shadow:inset 0 0 3px #fbde4a;box-shadow:inset 0 0 3px #fbde4a}.glyphs.character-mapping input:hover{-webkit-box-shadow:inset 0 0 3px #fbde4a;box-shadow:inset 0 0 3px #fbde4a}.glyphs.css-mapping{margin:0 0 60px 0;padding:30px 0 20px 30px;color:rgba(0,0,0,0.5);border:1px solid #d8e0e5;-webkit-border-radius:3px;border-radius:3px;}.glyphs.css-mapping li{margin:0 30px 20px 0;padding:0;display:inline-block;overflow:hidden}.glyphs.css-mapping .icon{margin:0;margin-right:10px;padding:13px;height:50px;width:50px;color:#162a36 !important;overflow:hidden;float:left;font-size:24px}.glyphs.css-mapping input{margin:0;margin-top:5px;padding:8px;line-height:16px;font-size:16px;display:block;width:150px;height:40px;border:1px solid #d8e0e5;-webkit-border-radius:5px;border-radius:5px;background:#fff;outline:0;float:right;}.glyphs.css-mapping input:focus{border:1px solid #fbde4a;-webkit-box-shadow:inset 0 0 3px #fbde4a;box-shadow:inset 0 0 3px #fbde4a}.glyphs.css-mapping input:hover{-webkit-box-shadow:inset 0 0 3px #fbde4a;box-shadow:inset 0 0 3px #fbde4a}</style></head><body><div class=container><h1>Untitled font 2</h1><p class=small>This font was created with<a href=\"http://fontastic.me/\">Fontastic</a></p><h2>CSS mapping</h2><ul class=\"glyphs css-mapping\"><li><div class=\"icon icon-air\"></div><input type=text readonly value=air></li><li><div class=\"icon icon-water\"></div><input type=text readonly value=water></li><li><div class=\"icon icon-thermometer\"></div><input type=text readonly value=thermometer></li><li><div class=\"icon icon-cloud-1\"></div><input type=text readonly value=cloud-1></li><li><div class=\"icon icon-filter-1\"></div><input type=text readonly value=filter-1></li><li><div class=\"icon icon-info-1\"></div><input type=text readonly value=info-1></li><li><div class=\"icon icon-eye-1\"></div><input type=text readonly value=eye-1></li><li><div class=\"icon icon-globe\"></div><input type=text readonly value=globe></li></ul><h2>Character mapping</h2><ul class=\"glyphs character-mapping\"><li><div data-icon=a class=icon></div><input type=text readonly value=a></li><li><div data-icon=b class=icon></div><input type=text readonly value=b></li><li><div data-icon=c class=icon></div><input type=text readonly value=c></li><li><div data-icon=e class=icon></div><input type=text readonly value=e></li><li><div data-icon=g class=icon></div><input type=text readonly value=g></li><li><div data-icon=f class=icon></div><input type=text readonly value=f></li><li><div data-icon=h class=icon></div><input type=text readonly value=h></li><li><div data-icon=d class=icon></div><input type=text readonly value=d></li></ul></div><script>(function() {\n  var glyphs, i, len, ref;\n\n  ref = document.getElementsByClassName(\'glyphs\');\n  for (i = 0, len = ref.length; i < len; i++) {\n    glyphs = ref[i];\n    glyphs.addEventListener(\'click\', function(event) {\n      if (event.target.tagName === \'INPUT\') {\n        return event.target.select();\n      }\n    });\n  }\n\n}).call(this);\n\n    </script></body></html>");
$templateCache.put("views/404.html","<div class=text-center><h4>Page Not Found</h4><h1>404</h1></div>");
$templateCache.put("views/home.html","<md-content class=\"loader full-width full-height absolute op-animation opacity-hide smooth\" ng-hide=!main.loadingResults layout-xs=column layout=column flex=90 flex-gt-sm=70 md-colors=\"{\'background-color\': \'background-A400\'}\" layout-align=\"center center\"><div class=full-width><h1 class=\"wrap text-center logo opacity-hide smooth\" md-colors=\"{color: \'primary-400\'}\">Gali<md-icon class=\"icon-water md-accent\" ng-cloak></md-icon><span md-colors=\"{color: \'background-700\'}\">Weather</span></h1></div><md-progress-linear md-mode=indeterminate></md-progress-linear></md-content><main-nav></main-nav><md-content class=\"centering height-hide smooth\" ng-hide=\"!main.loadingResults && !main.landingPage\" layout-xs=column layout=column flex=90 flex-gt-sm=70 layout-align=\"center center\" md-colors=\"{\'background-color\': \'background-A400\'}\"><div class=full-width ng-if=main.landingPage><h1 class=\"wrap text-center logo\" md-colors=\"{color: \'primary-400\'}\">Gali<md-icon class=\"icon-water md-accent\" ng-cloak></md-icon><span md-colors=\"{color: \'background-700\'}\">Weather</span></h1><div class=\"wrap search-box\" layout=column layout-padding md-colors=\"{\'background-color\': \'background-50\'}\"><h2 class=center>{{\"FILT_PARAM\" | translate}}</h2><div layout=column layout-gt-sm=row><md-input-container flex=10><label>{{main.menuBarOptions.province.label | translate}}</label><md-select ng-model=main.menuBarOptions.province.variable multiple><md-select-header layout=row><md-button ng-disabled=\"main.menuBarOptions.province.variable.length === 0\" class=\"md-raised md-primary\" ng-click=main.demark()>{{\"DEMARK\" | translate}}</md-button></md-select-header><md-optgroup label=\"{{main.menuBarOptions.province.label | translate}}\"><md-option ng-repeat=\"(nk, nv) in main.menuBarOptions.province.values\" ng-value=main.menuBarOptions.province.values[nk]>{{nk | translate}}</md-option></md-optgroup></md-select></md-input-container><md-input-container flex=10><label>{{main.menuBarOptions.day.label | translate}}</label><md-select ng-model=main.menuBarOptions.day.variable><md-optgroup label=\"{{main.menuBarOptions.day.label | translate}}\"><md-option ng-repeat=\"(nk, nv) in main.menuBarOptions.day.values\" ng-value=main.menuBarOptions.day.values[nk]>{{nk | translate}}</md-option></md-optgroup></md-select></md-input-container></div><md-button class=md-primary ng-click=main.search()>{{\"SEARCH\" | translate}}</md-button></div></div></md-content><md-content class=\"dash-wrapper opacity-hide smooth\" layout=column md-colors=\"{\'background-color\': \'background-A400\'}\" ng-hide=main.landingPage><single-result></single-result><dash-board></dash-board></md-content><lateral-panel flex=20></lateral-panel>");
$templateCache.put("components/directives/dashboard/dashboard.html","<md-content class=\"results-wrapper full-width full-height height-hide smooth\" md-colors=\"{\'background-color\': \'background-A400\'}\" ng-hide=main.showSingle><h3><md-icon class=icon-info-1></md-icon>{{\"SEL_INFO_1\" | translate}}<md-icon class=icon-eye-1></md-icon>{{\"SEL_INFO_2\" | translate}}<md-icon class=icon-info-1></md-icon></h3><div ng-repeat=\"(pos, tile) in main.results\" class=\"pull-left city-card\"><md-card id={{tile.data.city.id}}><div class=full-width><img flex=100 ng-src={{cityImg[tile.data.city.id]}} class=md-card-image></div><md-card-title><md-card-title-text><span class=md-headline>{{tile.data.city.name}}</span> <span class=md-subhead>{{tile.data.list[selectedIndex].weather[0].id | translate}}</span></md-card-title-text><md-button class=\"md-fab md-accent md-mini view-more\" ng-click=main.updateSingleResult(tile.data.list)><md-icon class=icon-eye-1></md-icon><md-tooltip md-direction=bottom>{{\"MORE\" | translate}}</md-tooltip></md-button></md-card-title><md-card-content><md-tabs md-selected=selectedIndex md-border-bottom md-autoselect md-dynamic-height><md-tab ng-repeat=\"(k,v) in main.daysFilter\" label=\"{{v | date: \'EEEE\' | translate}}\" flex=20><md-content class=\"md-padding result-list\"><div layout=row><p flex=50><md-icon class=\"icon-water md-accent\"></md-icon>{{\"RAIN\" | translate}}</p><p flex=50>{{(tile.data.list[k].rain === undefined)?\"N/A\":tile.data.list[k].rain}}</p></div><div layout=row><p flex=50><md-icon class=icon-cloud-1></md-icon>{{\"CLOUDS\" | translate}}</p><p flex=50>{{(tile.data.list[k].clouds === undefined)?\"N/A\":tile.data.list[k].clouds}}%</p></div><div layout=row><p flex=50><md-icon class=\"icon-water md-accent\"></md-icon>{{\"HUMIDITY\" | translate}}</p><p flex=50>{{(tile.data.list[k].humidity === undefined)?\"N/A\":tile.data.list[k].humidity}}%</p></div><div layout=row><p flex=50><md-icon class=\"icon-air md-primary\"></md-icon>{{\"W_SPEED\" | translate}}</p><p flex=50>{{(tile.data.list[k].speed === undefined)?\"N/A\":tile.data.list[k].speed}}m/s</p></div><div layout=row><p flex=50><md-icon class=\"icon-thermometer md-warn\"></md-icon><md-truncate>{{\"TEMP\" | translate}}</md-truncate></p><md-chips flex=50><md-chip md-colors=\"{\'background-color\': \'warn-500\', color:\'warn-A400\'}\">{{(tile.data.list[k].temp.max === undefined)?\"N/A\":tile.data.list[k].temp.max}}ºC</md-chip><md-chip md-colors=\"{\'background-color\': \'accent-500\', color: \'warn-A400\'}\">{{(tile.data.list[k].temp.min === undefined)?\"N/A\":tile.data.list[k].temp.min}}ºC</md-chip></md-chips></div></md-content></md-tab></md-tabs></md-card-content></md-card></div></md-content>");
$templateCache.put("components/directives/lateral/lateral.html","<md-sidenav class=\"md-sidenav-right md-whiteframe-4dp\" md-component-id=right><md-toolbar class=\"md-primary md-hue-2\"><div class=md-toolbar-tools>{{\"FILTERS\" | translate}}</div></md-toolbar><md-content layout-padding layout=column><md-input-container flex=100><label>{{main.menuBarOptions.province.label | translate}}</label><md-select ng-model=main.menuBarOptions.province.variable multiple><md-select-header layout=row><md-button ng-disabled=\"main.menuBarOptions.province.variable.length === 0\" class=\"md-raised md-primary\" ng-click=main.demark()>{{\"DEMARK\" | translate}}</md-button></md-select-header><md-optgroup label=\"{{main.menuBarOptions.province.label | translate}}\"><md-option ng-repeat=\"(nk, nv) in main.menuBarOptions.province.values\" ng-value=main.menuBarOptions.province.values[nk]>{{nk | translate}}</md-option></md-optgroup></md-select></md-input-container><md-input-container flex=100><label>{{main.menuBarOptions.day.label | translate}}</label><md-select ng-model=main.menuBarOptions.day.variable><md-optgroup label=\"{{main.menuBarOptions.day.label | translate}}\"><md-option ng-repeat=\"(nk, nv) in main.menuBarOptions.day.values\" ng-value=main.menuBarOptions.day.values[nk]>{{nk | translate}}</md-option></md-optgroup></md-select></md-input-container><md-button class=md-primary ng-click=main.search();toggleRight()>{{\"SEARCH\" | translate}}</md-button></md-content></md-sidenav>");
$templateCache.put("components/directives/navigation/main-nav.html","<md-toolbar class=\"search-bar md-primary\" ng-if=\"!main.landingPage && !main.loadingResults\"><div class=md-toolbar-tools><md-button aria-label=\"Go Back\" ng-click=main.goBack()>{{ \"BACK\" | translate }}</md-button><md-truncate>Gali<span class=strong>WEATHER</span></md-truncate><div flex></div><md-button aria-label=Filters ng-click=toggleRight()><md-icon class=\"icon-filter-1 font-2x\"></md-icon></md-button></div></md-toolbar>");
$templateCache.put("components/directives/singleresult/single-result.html","<md-content class=\"full-width full-height height-hide smooth\" md-colors=\"{\'background-color\': \'background-A400\'}\" ng-if=!main.landingPage ng-hide=!main.showSingle><md-toolbar class=md-hue-2><div class=md-toolbar-tools>Coruña</div></md-toolbar><md-tabs md-selected=selectedIndex md-border-bottom md-autoselect md-dynamic-height><md-tab ng-repeat=\"(k, tab) in main.daysFilter\" label=\"{{tab | date: \'EEEE\' | translate}}\"><md-content layout-padding layout-align=\"center center\" md-colors=\"{\'background-color\': \'background-A400\'}\"><md-grid-list md-cols-gt-md=12 md-cols=4 md-cols-md=8 md-row-height-gt-md=1:1 md-row-height=4:3 md-gutter-gt-md=16px md-gutter-md=8px md-gutter=4px><md-grid-tile ng-repeat=\"tile in main.singleResult[k]\" ng-class=styles[tile.name].color md-colspan=2 md-rowspan=3 md-colspan-gt-sm=2 md-rowspan-gt-sm=2><div layout=column class=\"full-width full-height\"><md-toolbar class=translucid><div class=md-toolbar-tools layout layout-align=\"center center\">{{styles[tile.name].name | translate}}</div></md-toolbar><md-content layout=row layout-align=\"center center\" class=\"transparent full-height\" md-colors=\"{color: \'background-A200\'}\"><p layout-margin ng-if=\"tile.name !== \'weather\'\"><md-icon ng-class=styles[tile.name].ico class=\"font-2x single-result-icon\" md-colors=\"{color: \'background-A200\'}\"></md-icon></p><p layout-margin ng-if=\"tile.name !== \'temp\' && tile.name !== \'weather\'\">{{tile.data}}{{styles[tile.name].unit}}</p><div layout-margin ng-if=\"tile.name === \'temp\'\"><p>MAX: {{tile.data.max}}{{styles.temp.unit}}</p><p>MIN: {{tile.data.min}}{{styles.temp.unit}}</p></div><div layout-margin ng-if=\"tile.name === \'weather\'\"><p>{{tile.data[0].id | translate}}</p></div></md-content></div></md-grid-tile></md-grid-list></md-content></md-tab></md-tabs><div class=full-width layout=row layout-align=\"center center\" layout-padding ng-if=\"main.results.length > 1\"><md-button class=\"md-primary md-raised md-hue\" ng-click=main.goBack()>{{\'BACK_LIST\' | translate}}</md-button></div></md-content>");}]);