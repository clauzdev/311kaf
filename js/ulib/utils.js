"use strict";define("U",["require","_","jquery","guid","normalizeUrl","sprintf","functionPrototypeOkPatcher"],function(t,e,n,r,o,i){var a=[];n(document).on("keydown",function(t){if(27==t.keyCode&&27==t.keyCode&&a.length>0){n(document).data("disableCtrlZ",!1);var e=a.pop();e()}}),n.ajaxSetup({success:function(t){this.api===!0&&(t[0]&&this.noOk?this.noOk(t[0]):this.ok(t[1]))}}),n.fn.moveUp=function(){n.each(this,function(){n(this).after(n(this).prev())})},n.fn.moveDown=function(){n.each(this,function(){n(this).before(n(this).next())})},n.fn.moveTo=function(t){return n(this).each(function(){if(!(t>n(this).parent().children().length||0>t))for(;n(this).index()!=t;)n(this).index()<t?n(this).moveDown():n(this).moveUp()})},n.fn.classes=function(t){var e=[];return n.each(this,function(t,n){var r=n.className.split(/\s+/);r.forEach(function(t,n){var o=r[n];""!==o&&e.push(o)})}),e=n.unique(e),"function"==typeof t&&e.forEach(function(n,r){t(e[r])}),e};var c,l=[];for(c=65;90>=c;c++)l.push(String.fromCharCode(c));for(c=97;122>=c;c++)l.push(String.fromCharCode(c));for(c=48;57>=c;c++)l.push(String.fromCharCode(c));var s={params:window.cache,cancelCurrentEdit:function(t){n(document).trigger("cancelCurrentEdit").off("cancelCurrentEdit").on("cancelCurrentEdit",t)},delay:function(t,e,n){var r;return function(o,i){clearTimeout(r),r=setTimeout(function(){t.call(e,o)},null===i?n:i)}},diff:function(t,e){var n={};return Object.keys(t).forEach(function(r){t[r]!=e[r]&&(n[r]=t[r])}),n},extendClass:function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.superclass=e.prototype},fileSizeToStr:function(t){var e=["кб","мб"],n="";if(1024>t)n=t;else for(;t/1024>=1;)t=(t/1024).toFixed(2),n=t+" "+e.shift();return n},getCookie:function(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0},setCookie:function(t,e,n){n=n||{};var r=n.expires;if("number"==typeof r&&r){var o=new Date;o.setTime(o.getTime()+1e3*r),r=n.expires=o}r&&r.toUTCString&&(n.expires=r.toUTCString()),e=encodeURIComponent(e);var i=t+"="+e;for(var a in n)if(n.hasOwnProperty(a)){i+="; "+a;var c=n[a];c!==!0&&(i+="="+c)}document.cookie=i},limiter:function(t,e){var n=null;return e||(e=300),function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(r,o)},e)}},ok:function(t){return function(){var e=Array.prototype.slice.call(arguments);try{var n=e.shift();if(n)throw console.log(n),"error";t.apply(null,e)}catch(r){throw console.log(r),"error"}}},parse:function(t,e){var n={},r=n,o=t.split(".");if(1==o)return e;for(var i=0;i<o.length-1;i++)n[o[i]]={},n=n[o[i]];return n[o[i]]=e,r},requireCss:function(t){var e=new Error;if(console.log('U.requireCss is deprecated. Use requireCssR or require(["css!/public/style.css"], function () {}) instead.',e.stack?e.stack.toString().split("\n")[2]:"no stack"),null!==t)if("array"==n.type(t))for(var r=0,o=t.length;o>r;r++)0===n('link[href="'+t[r]+'"]').length&&n("head").append('<link rel="stylesheet" href="'+t[r]+'"/>');else 0===n('link[href="'+t+'"]').length&&n("head").append('<link rel="stylesheet" href="'+t+'"/>')},requireCssR:function(e,r){if(e){var o=[];n.isArray(e)?n.each(e,function(t,e){e&&o.push("css!"+e)}):"string"==typeof e&&o.push("css!"+e),o.length>0?t(o,function(){r&&r()}):r&&r()}else r&&r()},randStr:function(t){for(var e="",n=0;t>n;)e+=l[Math.floor(Math.random()*l.length)],n++;return e},sprintf:i,splitArgs:function(t){return function(e){t.apply(null,e)}},guid:r,normalizeUrl:o,layers:{on:function(t,e){a.push(e),n(document).data("disableCtrlZ",!0)},off:function(t){var e=a.pop();n(document).data("disableCtrlZ",!1),t&&e&&e()}},checkUrl:function(t){var e=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return e.test(t)},extTemplate:function(t,n,r){return e.template(t.replace(/<%[-|=|\s]\s*include\s*(.*?)\s*%>/g,function(t,e){return n[e]}),r)},getScrollWidth:function(){if(!this.scrollWidth){var t=n("<div>",{style:"width: 100%; height: 2px; visibility: hidden; opacity: 0;",html:"<div><br>|<br>|<br></div>"}).appendTo("body"),e=t.find("div"),r=e.outerWidth();t.css("overflow-y","scroll");var o=e.outerWidth();e=null,t.remove(),this.scrollWidth=r-o}return this.scrollWidth},overlay:{add:function(t){var e=n.extend({to:n("#ul-content"),onClick:function(){}},t),r=n('<div class="ul-disabled-overlay">').appendTo(e.to).click(e.onClick);return n(e.except).addClass("ul-widget ul-disabled-overlay-element"),s.layers.on(0,e.onClick),{$el:r,remove:function(){r.remove(),n(e.except).removeClass("ul-widget ul-disabled-overlay-element")}}}},hist:{cb:function(){},_init:function(t,e){window.onpopstate=this.popState,window.history.replaceState(t.data,t.title,t.url),this.cb=e},pushState:function(t){window.onpopstate||(window.onpopstate=this.popState),window.history.pushState(t.data,t.title,t.url)},popState:function(t){t.state&&s.hist.cb(t.state)}},orderFormUrl:{get:function(t){var e="#="+s.randStr(2)+"-"+s.randStr(2)+"=";return null==t&&void 0==t||(e+=t),e},check:function(t){var e=/#=.{2}-.{2}=/;return e.test(t)?t.replace(e,""):null}},escapeHtml:function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},acl:{isResourceAllowed:function(t){return!!(s.params.acl&&s.params.acl.resources&&s.params.acl.resources[t])},getRole:function(){return s.params.acl&&s.params.acl.role?s.params.acl.role:!1}},getUrlParam:function(t){var e,n=decodeURIComponent(window.location.search.substring(1)),r=n.split("&");return r.forEach(function(n){var r=n.split("=");r[0]===t&&(e=void 0===r[1]?!0:r[1])}),e},smoothScrollIntoView:function(t){if(!t.$el||!t.$parent)return void console.error("No $el or $parent. Can not scroll into view");t=e.extend({elHeight:t.$el.outerHeight(),topViewportMargin:0,bottomViewportMargin:0,duration:450,onPositionCalculated:function(){},onComplete:function(){}},t);var n=t.$parent,r=n.offset().top+t.topViewportMargin,o=n.outerHeight()-t.topViewportMargin-t.bottomViewportMargin,i=t.elHeight,a=t.$el.offset().top-r;if(0>a||0>o-(a+i)){var c=i>=o||0>a?a+n.scrollTop():n.scrollTop()+(a+i-o);n.animate({scrollTop:c},{duration:t.duration}).promise().done(function(){n.clearQueue(),t.onComplete()}),t.onPositionCalculated(c)}},hexToRgb:function(t){if("string"!=typeof t)return null;var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,n,r){return e+e+n+n+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},RGBtoHEX:function(t){var e="#";return t=t.replace(/[a-z%\s\(\)]/g,"").split(","),t.forEach(function(t){t=parseInt(t).toString(16),e+=1===t.length?"0"+t:t}),e},generateTitle:function(t,e,n){var r=t+n,o=e.filter(function(t){return new RegExp("^".concat(r,"\\s*\\d*$"),"i").test(t)}).map(function(t){return Number((t.match(/\d+$/)||["1"])[0])}).sort().pop();return void 0!==o?"".concat(r," ").concat(o+1):r},isBrightColor:function(t){return"string"==typeof t&&(t=s.hexToRgb(t)),t?(.299*t.r+.587*t.g+.114*t.b)/255>.5:!1}};return s});
//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map

//# sourceMappingURL=utils.js.map
