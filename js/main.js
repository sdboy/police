"use strict";

require.config({
  baseUrl : "./js",
  paths : {
    init : "app/init",
    async : "lib/require/async",
    domReady : "lib/require/domReady",
    text : "lib/require/text",
    jquery : "lib/jquery/jquery-1.11.3",
    Map3D : "lib/coorun/Map3D",
    CooMap : "lib/coorun/Class",
    Util : "lib/coorun/Util",
    zTree : "lib/ztree/jquery.ztree.all",
    underscore : "lib/underscore/underscore",
    jqueryUI : "lib/jquery_ui/jquery-ui",
    createIframe : "app/iframe/createIframe",
    removeIframe : "app/iframe/removeIframe",
    adaption : "app/iframe/adaption"
  },
  shim: {
    'Map3D': {
      deps: ['CooMap', 'Util'],
      exports: 'Map3D'
    },
    'zTree': {
      deps: ['jquery']
    },
    'jqueryUI': {
      deps: ['jquery']
    }
  }
    
});
require([
  "jquery",
  "require",
  "domReady!",
  "init"
  ], function($, require, doc, init) {
    var height = document.body.clientHeight - 89;
    $("#map").css("height", height + "px");
    init.initialize("map");
    var map = init.map.mapObj;
    var SDKpath = init.map.SDKpath;
    // var SDKevent = init.map.SDKevent;
  require([
    "createIframe"
    ], function (createIframe) {
      var root = $("body");
      // 创建左部导航栏
      createIframe.createIframe(root, "./html/navigationbar/mapleftTool.html", 
        "navigationbar", "true", {
        // "width" : "68px",
        // "height" : "445px",
        "position" : "absolute",
        "padding" : "0",
        "margin" : "0",
        "left" : "0px",
        "top" : "50%",
        "marginTop" : "-222px",
        "zIndex" : "999",
        "backgroundColor" : "transparent"
      });
      // 创建搜索框
      createIframe.createIframe(root, "./html/search/mapSearch.html", 
        "searchbar", "true", {
        "width" : "378px",
        "height" : "44px",
        "position" : "absolute",
        "padding" : "0",
        "margin" : "0",
        "left" : "80px",
        "top" : "115px",
        "zIndex" : "999",
        "backgroundColor" : "transparent"
      });
      // 创建右部工具栏
      createIframe.createIframe(root, "./html/toolbar/maprightTool.html", 
        "toolbar", "true", {
        "width" : "160px",
        "height" : "340px",
        "position" : "absolute",
        "padding" : "0",
        "margin" : "0",
        "right" : "0px",
        "top" : "50%",
        "marginTop" : "-170px",
        "zIndex" : "999",
        "backgroundColor" : "transparent"
      });
  });
});