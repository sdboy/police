"use strict";

require.config({
  baseUrl : "../../js",
  paths : {
    init : "app/init",
    async : "lib/require/async",
    domReady : "lib/require/domReady",
    text : "lib/require/text",
    jquery : "lib/jquery/jquery-1.11.3",
    zTree : "lib/ztree/jquery.ztree.all",
    underscore : "lib/underscore/underscore",
    jqueryUI : "lib/jquery_ui/jquery-ui",
    createIframe : "app/iframe/createIframe",
    removeIframe : "app/iframe/removeIframe",
    adaption : "app/iframe/adaption",
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
  "createIframe",
  "removeIframe",
  "adaption"
  ], function ($, createIframe, removeIframe, adaption) {
    var eleObj = parent.document.getElementById("navigationbar");
    // adaption.adaptionHeight(eleObj);
    // adaption.adaptionWidth(eleObj);
    $("#jyys").click(function () {
      if(parent.$("#mapResult_jyysFrame").length > 0){
        parent.$("#mapResult_jyysFrame").toggle();
      }else{
        var root = parent.$("body");
        // 创建警用要素
        createIframe.createIframe(root, "./html/layer/mapResult_jyys.html", 
          "featureList", "true", {
          "width" : "310px",
          "height" : "680px",
          "position" : "absolute",
          "padding" : "0",
          "margin" : "0",
          "left" : "80px",
          "top" : "50%",
          "marginTop" : "-280px",
          "display" : "block",
          "zIndex" : "1000",
          "backgroundColor" : "transparent"
        });

      }
    });

    $("#bjbh").click(function () {
      if(parent.$("#mapResult_bjbhFrame").length > 0){
        parent.$("#mapResult_bjbhFrame").toggle();
      }else{
        var root = parent.$("body");
        // 创建标记标绘
        createIframe.createIframe(root, "./html/layer/mapResult_bjbh.html", 
          "featurePolting", "true", {
          "width" : "310px",
          "height" : "680px",
          "position" : "absolute",
          "padding" : "0",
          "margin" : "0",
          "left" : "80px",
          "top" : "50%",
          "marginTop" : "-280px",
          "display" : "block",
          "zIndex" : "1001",
          "backgroundColor" : "transparent"
        });       
      }
    });

    $(".left_gn_center .menu").click(function () {
			$('.left_gn_center .menu').removeClass('menuclick');
			$(this).addClass('menuclick');
    });
});