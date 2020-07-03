"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],o=!0,n=!1,i=void 0;try{for(var a,d=e[Symbol.iterator]();!(o=(a=d.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(u){n=!0,i=u}finally{try{o||null==d["return"]||d["return"]()}finally{if(n)throw i}}return r}}function _arrayWithHoles(e){return Array.isArray(e)?e:void 0}define("widget-goods-view",[],function(){return{oFormCanBeOpened:!0,open:function(e){var t=document.querySelector("#".concat(e));this.addEvents(e),window.constructorMode||(this.supportOldVersion(t),this.removeNullLink(t)),this.initIcon(t)},supportOldVersion:function(e){var t=e.querySelector(".ul-goods-view-button a");if(t){var r=t.classList;r.contains("js-goods-popup-link")||(r.value="".concat(r.value," js-goods-popup-link"))}},removeNullLink:function(e){var t=e.querySelector(".ul-goods-view-image-wrap2 a");t&&!t.getAttribute("href")&&(t.parentNode.removeChild(t),t=null);var r=e.querySelector("a.ul-goods-view-item");if(r&&!r.getAttribute("href")){for(var o=document.createElement("div"),n=[["class","ul-goods-view-item"],["itemscope"],["itemtype","http://schema.org/Product"]],i=0;i<n.length;i++){var a=n[i],d=_slicedToArray(a,2),u=d[0],c=d[1],l=void 0===c?"":c;o.setAttribute(u,l)}for(var s=r,f=s.childNodes,v=0;v<f.length;v++)o.appendChild(f[v].cloneNode(!0));r.parentNode.replaceChild(o,r),r=null,f=null}var p=e.querySelector("a");if(p){var h=p.getAttribute("href"),m=e.querySelector(".js-goods-link-card");!h&&m&&m.setAttribute("style","cursor: default;")}},showOrderForm:function(e){var t=this;require(["jquery","U","orderForm"],function(r,o,n){var i=r(e),a=o.orderFormUrl.check(r(".js-goods-popup-link",i).attr("href"));return null!==a&&t.oFormCanBeOpened?(t.oFormCanBeOpened=!1,void n.open(a,t.getOrderFormData(o,i),function(){setTimeout(function(){t.oFormCanBeOpened=!0,e.removeAttribute("data-is-disabled-access")},50)})):void e.removeAttribute("data-is-disabled-access")})},addEvents:function(e){var t=this;if(!window.constructorMode){var r=document.getElementById(e);if(!r)throw new Error("Widget is not founded");for(var o=r.querySelectorAll(".js-goods-popup-link"),n=0;n<o.length;n++)o[n].addEventListener("click",function(e){if(r.dataset.isDisabledAccess)return e.preventDefault(),void e.stopPropagation();var o=/#=.{2}-.{2}=/i;o.test(e.target.href)&&(r.dataset.isDisabledAccess=!0,"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){t.showOrderForm(r)}):t.showOrderForm(r),e.stopPropagation(),e.preventDefault())});r.addEventListener("click",function(e){var t=e.target,r=e.currentTarget,n=r.querySelector(".js-goods-link-card");n&&o.length&&"A"!==t.tagName&&o[0].click()},!1)}},getOrderFormData:function(e,t){var r=e.escapeHtml(t.find(".ul-goods-view-title").text());return r?"<h3>".concat(r,"</h3>"):r},initIcon:function(e){var t=e.dataset.iconSet;if(t)return window.constructorMode||!window.cache.isNewRequireConf?void window.require(["icon-set-loader"],function(r){r.loadIconSet(t,function(){e.setAttribute("data-is-icon-font-loaded","true")})}):void(t&&e.setAttribute("data-is-icon-font-loaded","true"))}}});
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
