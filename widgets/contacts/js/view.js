"use strict";define("widget-contacts-view",[],function(){return{open:function(t,n){var e=this,o=document.querySelectorAll("#".concat(t," .ul-w-contacts-map"));o.length&&("function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){e.initMaps(o,n)}):this.initMaps(o,n))},initMaps:function(t,n){require(["jquery","_","U","map-helper/google-embed"],function(e,o,a,r){for(var i=a.constructor.isConstructor,l=0;l<t.length;l++){var u=t[l],c=[],s=e(u),d=s.parent(".ul-w-contacts-item"),p=d.find(".ul-w-contacts-f-address span[itemprop]"),f=d?d.data("item-id"):"",m=parseFloat(s.data("latitude"))||55.757,g=parseFloat(s.data("longitude"))||37.613,h=parseInt(s.data("zoom"),10)||8,w="";p.length&&p.each(function(t,n){return w+=n.innerHTML?", ".concat(n.innerHTML):""}),c.push({id:f,latitude:Number(m),longitude:Number(g),text:"",isDraggable:i,address:w});var C=new r;C.init({$el:s,mapOpts:{mapTypeId:"roadmap",styles:null,zoom:h,draggable:!1,mapTypeControl:!1,zoomControl:!0,panControl:!0,streetViewControl:!1,scrollWheel:!1,bounds:null},markers:c,isContactsWidget:!0}).then(function(t){n&&"function"==typeof n&&n(t)})["catch"](function(t){return console.log(t)})}})}}});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
