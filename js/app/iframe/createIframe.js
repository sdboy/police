"use strict";

define([
  "removeIframe",
  "jquery"
  ], function(removeIframe) {
    var createIframe = function (dom, src, id, trans, styleObj) {
      var iframe = $("<iframe></iframe>");
      for(var key in styleObj){
        $(iframe).css("" + key, styleObj["" + key]);
      }
      $(iframe).attr("frameborder", "0");
      $(iframe).attr("scrolling", "no");
      // $(iframe).attr("allowTransparency", trans);
      $(iframe).attr("id", id);
      $(iframe).attr("src", src);
      $(dom).prepend(iframe);
      return iframe;
    };

    var destroyIframe = function (obj) {
      removeIframe.removeIframe(obj);
    };
  
    return {
      createIframe : createIframe,
      destroyIframe : destroyIframe
    };
});