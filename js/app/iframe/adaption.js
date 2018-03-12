"use strict";

define([
  'jquery'
], function($) {
  var adaptionHeight = function(obj) {
    if(obj){
      if(obj.contentDocument && obj.contentDocument.body.offsetHeight){
        obj.style.height = obj.contentDocument.body.offsetHeight;
      }else if(obj.Document && obj.Document.body.scrollHeight){
        obj.style.height = obj.Document.body.scrollHeight;
      }
    }
  };
  var adaptionWidth = function(obj) {
    if(obj){
      if(obj.contentDocument && obj.contentDocument.body.offsetWidth){
        obj.style.width = obj.contentDocument.body.offsetWidth;
      }else if(obj.Document && obj.Document.body.scrollWidth){
        obj.style.width = obj.Document.body.scrollWidth;
      }
    }
  };
  return {
    adaptionHeight : adaptionHeight,
    adaptionWidth : adaptionWidth
  };
  
});