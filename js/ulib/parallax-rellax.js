"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"function"==typeof define&&define.amd?define(t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t():e.Rellax=t()}(void 0,function(){var e=function(){function e(t,n){var o=Object.create(e.prototype),r=0,i=0,u=[],s=!1,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},f=(window.transformProp||function(){var e=document.createElement("div");if(null==e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}(),function(){return function(e,t,n){return t>=e?t:e>=n?n:e}}());o.options={speed:-2,center:!1,round:!0,scrollContainer:null,callback:function(){return function(){}}()},n&&Object.keys(n).forEach(function(e){o.options[e]=n[e]}),o.options.speed=f(o.options.speed,-10,10),t||(t=".rellax");var l=document.querySelectorAll(t);if(!(0<l.length))throw new Error("The elements you're trying to select don't exist.");o.elems=l;var a=function(){return function(){v()}}(),d=function(){return function(){i=window.innerHeight,p();for(var e,t=0;t<o.elems.length;t++)e=m(o.elems[t]),u.push(e);window.addEventListener("resize",a),w(),v()}}(),m=function(){return function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),r=e.getAttribute("data-rellax-zindex")||0,u=t||o.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,s=u+e.getBoundingClientRect().top,c=e.clientHeight||e.offsetHeight||e.scrollHeight,l=t?t:(u-s+i)/(c+i);o.options.center&&(l=.5);var a=n?f(n,-10,10):o.options.speed;(t||o.options.center)&&(a=f(n||o.options.speed,-5,5));var d=y(l,a),m=e.style.cssText,p="";if(0<=m.indexOf("transform")){var w=m.indexOf("transform"),v=m.slice(w),b=v.indexOf(";");p=b?" "+v.slice(11,b).replace(/\s/g,""):" "+v.slice(11).replace(/\s/g,"")}return{base:d,top:s,height:c,speed:a,style:m,transform:p,zindex:r}}}(),p=function(){return function(){var e=r,t=o.options.scrollContainer;return r=t?document.querySelector(t).scrollTop:void 0===window.pageYOffset?(document.documentElement||document.body.parentNode||document.body).scrollTop:window.pageYOffset,e!=r}}(),y=function(){return function(e,t){var n=t*(100*(1-e));return o.options.round?Math.round(10*n)/10:n}}(),w=function(){function e(){p()&&0==s&&v(),c(e)}return e}(),v=function(){return function(){for(var e=0;e<o.elems.length;e++){var t=(r-u[e].top+i)/(u[e].height+i),n=y(t,u[e].speed)-u[e].base;u[e].zindex;o.elems[e].style.setProperty("background-position-y",n+"px","important")}o.options.callback(n)}}();return o.destroy=function(){s=!0,window.removeEventListener("resize",a)},setTimeout(d,300),o}return e}();return e});
//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map

//# sourceMappingURL=parallax-rellax.js.map
