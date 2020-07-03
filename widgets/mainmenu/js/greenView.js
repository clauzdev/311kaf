"use strict";function ownKeys(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(i,!0).forEach(function(n){_defineProperty(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(i).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function _defineProperty(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}define("widget-mainmenu-green-view",[],function(){return{open:function(e){var n=this,i=window.innerWidth<992;if(!i)return void this.doRequireConfReady({id:e,isMobile:i});var r=document.getElementById(e),t=r.getElementsByClassName("ul-w-mainmenu-nav")[0];t.classList.add("mobile"),t.style.opacity="",r.addEventListener("click",function(r){n.doRequireConfReady({id:e,isMobile:i,clickTarget:r})},{once:!0})},doRequireConfReady:function(e){var n=this;window.cache.isRequireConfLoaded?this.loadRealView(_objectSpread({},e,{isNeedManualClick:!0})):window.requireFullConfOnce(function(){n.loadRealView(_objectSpread({},e,{isNeedManualClick:!0}))})},loadRealView:function(e){var n=e.id,i=e.isMobile,r=e.clickTarget,t=e.isNeedManualClick;require(["!/widgets/mainmenu/js/fontobserver.js"],function(){require(["!/widgets/mainmenu/js/preView.js"],function(){require(["widget-mainmenu-view"],function(e){e.open(n),i&&t&&e.handlerClickBurger(r)})})})}}});
//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map

//# sourceMappingURL=greenView.js.map
