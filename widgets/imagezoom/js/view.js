"use strict";define("widget-imagezoom-view",[],function(){var e=window.cache.imagezoom&&window.cache.imagezoom.i18n;return{name:"imagezoom-view",opened:!1,init:function(){!window.constructorMode&&window.MSInputMethodContext&&document.documentMode&&require(["js/lib/picturefill.min.js"])},open:function(e){this.opened||(this.init(),this.opened=!0);var t=document.getElementById(e);if(t){var i={};try{i=JSON.parse(t.dataset.options)}catch(n){return void console.log("Error on JSON.parse",n)}i.el=t,this.eventLightBox(i)}},eventLightBox:function(e){var t=this,i=e.el,n=i.querySelector(".js-image-lightbox"),o=i.querySelector(".ul-w-imagezoom-img"),r=this.lightBoxOpen,l=this.lightBoxOpenOld;if("function"==typeof window.requireFullConfOnce&&(r=function(e){window.requireFullConfOnce(function(){t.lightBoxOpen(e)})},l=function(e){window.requireFullConfOnce(function(){t.lightBoxOpenOld(e)})}),n&&("lightbox"===e.click?n.addEventListener("click",r):n.removeEventListener("click",r)),o)if("lightbox"===e.click){var c=o.querySelector("img");c.addEventListener("click",l),o.dataset.lightbox||(o.dataset.lightbox=!0)}else o.removeEventListener("click",l)},lightBoxOpen:function(t){var i=t.currentTarget,n=i.querySelector("img[data-lightbox]");if(n){var o=n.querySelector(".js-alt"),r=n.dataset.lightbox,l=o?o.textConent:"";require(["lightbox","jquery"],function(t){t.show({srcList:[{src:r,title:l}],i18n:e})})}},lightBoxOpenOld:function(t){require(["lightbox","jquery"],function(i,n){var o=n(this);o.find("img").parent().is("a")||n(t.target).hasClass("ul-handler-resize")||i.show({srcList:[{src:o.attr("data-lightbox")||o.attr("data-img"),title:o.parents(".ul-w-imagezoom").find(".js-alt").text()}],i18n:e})})},destroy:function(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}});
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
