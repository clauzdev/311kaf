"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=_superPropBase(e,t);if(o){var n=Object.getOwnPropertyDescriptor(o,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=_getPrototypeOf(e),null!==e););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}define("map-helper/google-embed",["jquery","U","mapHelper"],function(e,t,r){var o=function(r){function o(){var e;return _classCallCheck(this,o),e=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this)),_defineProperty(_assertThisInitialized(e),"provider","google-embed"),e}return _inherits(o,r),_createClass(o,[{key:"init",value:function(r){var n=this;return _get(_getPrototypeOf(o.prototype),"init",this).call(this,r),new Promise(function(o,i){function a(){var t=c.buildIframeSrc(),r=e('<iframe src="'.concat(t,'" width="100%" height="100%" style="border: none;" allowfullscreen></iframe>'));r.on("load",function(){o(c)}),c.$el.append(r),c.insertPlaceholder(!1)}if(t.params.isScreenshotMode)return void o(n);var c=n,u=r.markers[0];if(u||(u={id:"old_model_marker",title:"Marker",description:"Marker",address:"Moscow Tverskaya 1",latitude:59.9342802,longitude:30.335098600000038,isEnabled:!0}),n.marker=u,n.marker.address)a();else{var s=u,f=s.latitude,l=s.longitude;n.geocodeReverse(f,l).then(function(e){n.marker.address=e,a()})}})}},{key:"buildIframeSrc",value:function(){var e=this.marker.address,r="".concat(e);return r=r.replace(/ /gi,"%20"),"https://www.google.com/maps/embed/v1/place?key=".concat(t.params.googleEmbedMapsApiKey,"&q=").concat(r)}},{key:"geocode",value:function(e){return new Promise(function(e,t){e([59.9342802,30.335098600000038])})}},{key:"geocodeReverse",value:function(e,t){return new Promise(function(r,o){r("".concat(e,",").concat(t))})}},{key:"updateMarker",value:function(t){this.marker=t;var r=this.buildIframeSrc();e("iframe",this.$el).attr("src",r)}}]),o}(r);return o});
//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map

//# sourceMappingURL=mapHelperGoogleEmbed.js.map
