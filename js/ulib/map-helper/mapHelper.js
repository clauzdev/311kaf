"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(e){for(var n,r=1;r<arguments.length;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},_createClass=function(){function e(e,n){for(var r,t=0;t<n.length;t++)r=n[t],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();define("mapHelper",[],function(){var e=function(){function e(){_classCallCheck(this,e),this.isInit=!1,this.markers=[],this.$el=null,this.callbacks={onMarkerDragStart:function(){return function(){}}(),onMarkerDragEnd:function(){return function(){}}(),onMarkerClick:function(){return function(){}}(),onMapOptsChange:function(){return function(){}}()}}return _createClass(e,[{key:"init",value:function(){return function(e){this.$el=e.$el,this.callbacks=_extends({},this.callbacks,e.callbacks),this.mapOpts=_extends({},this.mapOpts,e.mapOpts)}}()},{key:"createMap",value:function(){return function(){}}()},{key:"destroy",value:function(){return function(){this.$el.removeClass("ul-map-no-api-key")}}()},{key:"geocode",value:function(){return function(){return Promise.reject(new Error('Provider "'+this.provider+'" does not support geocode method'))}}()},{key:"geocodeReverse",value:function(){return function(){var e=this;return new Promise(function(n,r){r(new Error('Provider "'+e.provider+'" does not support geocodeReverse method'))})}}()},{key:"getMarker",value:function(){return function(){}}()},{key:"addMarkers",value:function(){return function(){new Error('Provider "'+this.provider+'" does not support addMarkers method')}}()},{key:"removeMarkers",value:function(){return function(){new Error('Provider "'+this.provider+'" does not support addMarkers removeMarkers')}}()},{key:"fitMapToMarkers",value:function(){return function(){new Error('Provider "'+this.provider+'" does not support addMarkers fitMapToMarkers')}}()},{key:"fitToViewport",value:function(){return function(){new Error('Provider "'+this.provider+'" does not support addMarkers fitToViewport')}}()},{key:"setMarkerPosition",value:function(){return function(){}}()},{key:"setMarkerText",value:function(){return function(){}}()},{key:"getMapBounds",value:function(){return function(){}}()},{key:"getMapZoom",value:function(){return function(){return this.map.getZoom()}}()},{key:"addListeners",value:function(){return function(){}}()},{key:"setMapOpts",value:function(){return function(){}}()},{key:"updateApiKey",value:function(){return function(){return new Promise(function(e){return e()})}}()},{key:"insertPlaceholder",value:function(){return function(e){e?this.$el.addClass("ul-map-no-api-key").append('<div class="ul-map-placeholder"><span class="ul-icon icon-content-widget-maps"></span></div>'):this.$el.removeClass("ul-map-no-api-key")}}()},{key:"validateApiKey",value:function(){return function(e){var n=this;return new Promise(function(r,t){require([n.provider+"-maps-api-key-validator"],function(n){n(e).then(r)["catch"](t)})})}}()}]),e}();return e.defaultMapOpts={zoom:10,mapTypeId:"roadmap",draggable:!0,mapTypeControl:!0,zoomControl:!0,panControl:!1,streetViewControl:!1},e});
//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map

//# sourceMappingURL=mapHelper.js.map
