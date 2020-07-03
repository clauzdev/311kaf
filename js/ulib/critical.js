"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function e(){return{elements:[],selectors:[],loadAll:function(){for(var e=0;e<this.selectors.length;e++){var t=this.selectors[e];if(this.load(t))return}},load:function(e){var t=document.querySelector(e);if(!t.children)return!1;for(var n=0;n<t.children.length;n++){var r=t.children[n];if(s(r))for(var o=0;o<this.elements.length;o++){var i=this.elements[o];if("function"==typeof i&&i(r))return!0}}return!1}}}var t=[50,300,500],n=window.cache.lazyLoad,r=n&&t[n.range-1]||50,o=window.VERSION&&"?v=".concat(window.VERSION)||"",i=function(e){var t=e.src,n=document.createElement("script");n.setAttribute("src","".concat(t).concat(o)),document.head.appendChild(n)},c=function(e,t){var n=null;return t||(t=300),function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,o)},t)}},s=function(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,o=t.top-r<=n&&t.top+t.height+r>=0;return o},a=['[class*="srcset"]','[class*="background-images"]',"img[data-src]","img[data-srcset]","source[data-srcset]","source[data-src]"],u=function(e){-1!==e.className.indexOf("srcset-block")&&e.classList.add("srcset-lazy");for(var t=e.querySelectorAll('[class*="srcset-block"]'),n=0;n<t.length;n++){var r=t[n];s(r)&&r.classList.add("srcset-lazy")}for(var o=e.querySelectorAll(".ul-widget"),i=0;i<o.length;i++){var c=o[i];if(s(c))for(var u=c.querySelectorAll(a.join(",")),d=0;d<u.length;d++){var l=u[d];-1!==l.className.indexOf("srcset-widget")&&l.classList.add("srcset-lazy");var f=l.getAttribute("data-src");f&&(l.setAttribute("src",f),l.removeAttribute("data-src"));var w=l.getAttribute("data-srcset");w&&(l.setAttribute("srcset",w),l.removeAttribute("data-srcset"))}}return!1},d=!1,l=new Map,f=window.getSafeWidgetsData(),w=function(e){for(var t=e.querySelectorAll(".ul-widget"),n=function(e){var n=t[e];if(!s(n))return"continue";var r=n.dataset.widget,o=0;if(d){for(var i=0;i<f.length;i++){var c=f[i];if(c.id===n.id&&!c.loaded){o=c;break}}if(!o)return"continue";var a=window.widgetsDeps[r];return a?(o.loaded=!0,window.require([a],function(e){e.open(n.id)}),"continue"):"continue"}var u=window.widgetsDepsPaths[r];return u?"undefined"==typeof u.greenJs?(g(),l.clear(),{v:!0}):void l.set(n.id,u.greenJs):"continue"},r=0;r<t.length;r++){var o=n(r);switch(o){case"continue":continue;default:if("object"===_typeof(o))return o.v}}return!1},v=new e;n&&n.enabled&&v.elements.push(u),v.elements.push(w),window.cache.isScreenshotMode?document.querySelector("#body-fict")&&v.selectors.push("#body-fict"):(document.querySelector("header")&&v.selectors.push("header"),document.querySelector("#ul-content")&&v.selectors.push("#ul-content"),document.querySelector("footer")&&v.selectors.push("footer"));var h=c(function(){window.requireFullConfOnce(function(){v.loadAll()})},100),p=function(){window.require&&(window.cache.isExistCustomHtml||window.require(["ulErrorHandler"],function(e){return new e("/api/errors")}),window.cache.orderForms&&window.cache.orderForms.length&&window.require(["aDialogAppearOptions"],function(){})),i({src:"/311kaf/js/ulib/viewportObserver.js"})},g=function(){d||(d=!0,window.cache.isRequireConfLoaded?p():(window.addEventListener("requireConfReady",p,{once:!0}),i({src:"/311kaf/js/requireConf.js"})),window.addEventListener("scroll",h))},m=function(e){window.requireFullConfOnce(function(){for(var t=function(t){var n=e[t],r=window.widgetsDeps[n.type];window.require([r],function(e){e.open(n.id)})},n=0;n<e.length;n++)t(n)})},y=function(){if(v.loadAll(),d)window.requireFullConfOnce(function(){v.loadAll()});else{var e={};l.forEach(function(t,n){t.viewPath&&(e[t.viewName]=t.viewPath)});var t={baseUrl:"/",paths:e};window.VERSION&&(t.urlArgs="v=".concat(window.VERSION)),window.requirejs.config(t)}for(var n=[],r=function(e){var t=f[e];if((t.data&&t.data.abs||t.abs)&&n.push(t),d||!l.has(t.id))return"continue";var r=l.get(t.id),o=r.viewName;t.loaded=!0,window.require([o],function(e){e.open(t.id)})},o=0;o<f.length;o++){r(o)}n.length&&(d?m(n):setTimeout(function(){m(n)},3e3))};window.addEventListener("load",y),window.cache.isRequireConfLoaded?g():(window.addEventListener("requireFullConf",g,{once:!0}),window.addEventListener("scroll",g,{once:!0}),window.addEventListener("resize",h))}();
//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map
