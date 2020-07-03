"use strict";define("widget-sliderWysiwyg-view",["jquery","owlEdit","U","goals/handlers","goals/helper"],function(t,e,l,o,n){var i={init:function(){return function(e,o){var i=this;t(window).off(".sliderWysy"),i.initOwl(e,o),window.localStorage&&document.referrer&&!localStorage.getItem("firstReferrer")&&localStorage.setItem("firstReferrer",document.referrer);var a=null,r=t(".ul-image .ul-slider-item-overlay",e).map(function(){return t(this).outerHeight(!0)+t(this).position().top-t(window).scrollTop()});a=Math.max.apply(null,r),e.find(".ul-image").outerHeight(!0)<a&&e.find(".ul-image").outerHeight(a+30),t(window).on("colResized.sliderWysy",function(){var e=[].slice.call(arguments,1);setTimeout(function(){t.each(e,function(e,l){var o=t(l).find(".ul-slider-wysy");o.length&&i._responseCarousel(o)})},500)}),window.constructorMode&&t(window).on("changeDeviceMode.sliderWysy",function(){i._responseCarousel()}),window.constructorMode||e.on("click",".ul-w-btn-el",function(e){var o=t(this),i=l.orderFormUrl.check(t(this).attr("href"));if(null!=i)return require(["orderForm"],function(t){t.open(i,"")}),e.preventDefault(),!1;if(l.params.isULanding){var a=o.closest(".ul-widget"),r=a.data("goalsData");n.sendLeadRequest({$el:t(e.target),event:e},"button"),n.sendAnalytcsRequest(r)}})}}(),_responseCarousel:function(){return function(e){void 0==e?t(".ul-slider-wysy").each(function(){t(this).data("owlCarousel").reinit()}):void 0!=e.data("owlCarousel")&&e.data("owlCarousel").reinit()}}(),initOwl:function(){return function(e,l){var o=!1;o=!e.data("edit")&&l.autoPlay&&!!l.autoPlay&&1e3*l.autoPlayTime;var n=function(){return function(){var l=0;t(".ul-control-panel .ul-owl-page",e).each(function(e,o){l+=t(o).outerWidth(!0)}),l+=t(".ul-control-panel .ul-add-image",e).outerWidth(!0),t(".ul-control-panel .ul-owl-pagination",e).width(l+5)}}(),i=function(){return function(o){e.data("edit")&&(t(".ul-control-panel",e).show(),n(o,this),e.data("edit")&&(t(".ul-control-panel .ul-owl-page",e).eq(l.active).addClass("active"),e.find(".ul-slider-wysy").trigger("owl.jumpTo",l.active)),t(".ul-control-panel .ul-sliderWysy-slide-thumb-left",e).click(function(){var l=parseInt(t(".ul-control-panel .ul-owl-pagination",e).css("margin-left"));t(".ul-control-panel .ul-owl-pagination",e).animate({marginLeft:0>=l+t(".ul-owl-controls",e).width()?l+t(".ul-owl-controls",e).width():0},200)}),t(".ul-control-panel .ul-sliderWysy-slide-thumb-right",e).click(function(){var l=parseInt(t(".ul-control-panel .ul-owl-pagination",e).css("margin-left")),o=t(".ul-control-panel .ul-owl-controls",e).width()+-1*l>=t(".ul-control-panel .ul-owl-pagination",e).width()?l:-1*t(".ul-owl-controls",e).width()+l+168;t(".ul-control-panel .ul-owl-pagination",e).animate({marginLeft:o},200)}),t(".ul-control-panel .ul-owl-page",e).click(function(){t(".active",t(this).parent()).removeClass("active"),t(this).addClass("active"),e.find(".ul-slider-wysy").data("owlCarousel").goTo(t(this).index())})),"click"==l.controls&&(t(".owl-buttons .owl-next",e).addClass("click"),t(".owl-buttons .owl-prev",e).addClass("click"),t(".ul-image",e).addClass("ul-click"),t(".owl-buttons .owl-next",e).css("pointer-events","none"),t(".owl-buttons .owl-prev",e).css("pointer-events","none"),t(".ul-image",e).on("click",function(l){e.data("edit")?!e.data("activeEdit")&&!t(l.target).hasClass("ul-slider-item-overlay")&&!t(l.target).closest(".ul-slider-item-overlay").length&&(t(".ul-control-panel .ul-owl-page.active ",e).removeClass("active"),l.offsetX<t(this).width()/2?t(".owl-buttons .owl-prev",e).trigger("touchend"):t(".owl-buttons .owl-next",e).trigger("touchend")):!t(l.target).hasClass("ul-slider-item-overlay")&&!t(l.target).closest(".ul-slider-item-overlay").length&&(l.offsetX<t(this).width()/2?t(".owl-buttons .owl-prev",e).trigger("touchend"):t(".owl-buttons .owl-next",e).trigger("touchend"))}))}}(),a=e.find(".ul-slider-wysy");a&&e.find(".ul-slider-wysy").owlCarousel({controlsClick:!("click"!=l.controls),items:l.count,autoPlay:o,singleItem:!(1<l.count),slideSpeed:500,responsive:!0,responsiveRefreshRate:100,mouseDrag:!1,navigation:!0,dragBeforeAnimFinish:!0,touchDrag:!1,pagination:l.pagination,navigationText:!1,lazyLoad:!0,scrollPerPage:!0,itemsScaleUp:!0,addClassActive:!0,rewindNav:!0,transitionStyle:l.animation,afterMove:function(){return function(l){if(e.data("edit")){t(".ul-control-panel .ul-owl-page",e).removeClass("active");var o=l.find(".owl-wrapper .active").index();if(t(".ul-control-panel .ul-owl-page",e).eq(o).addClass("active"),t(window).trigger("slideMove",o),t(".ul-control-panel .active",e).length){var n=t(".ul-control-panel .active",e).position(),i=t(".ul-control-panel .active",e).outerWidth(!0);n.left+i+50>t(".ul-control-panel .ul-owl-controls",e).width()&&t(".ul-control-panel .ul-sliderWysy-slide-thumb-right",e).trigger("click"),150>n.left+i&&t(".ul-control-panel .ul-sliderWysy-slide-thumb-left",e).trigger("click")}}}}(),afterUpdate:n,afterInit:i})}}(),setSlide:function(){return function(t,e){t.find(".ul-slider-wysy").data("owlCarousel").jumpTo(e)}}(),autoScrollStop:function(){return function(t){t.find(".ul-slider-wysy").data("owlCarousel").stop()}}(),autoScrollStart:function(){return function(t){t.find(".ul-slider-wysy").data("owlCarousel").play()}}(),open:function(){return function(e){var l=this,o=t("#"+e);if(!o.length)return void console.log('Widget with id "'+e+'" not exists!');var n=o.data("options");l.init(o,n)}}(),destroy:function(){return function(e){var l=t("#"+e);t(".ul-owl-controls .ul-owl-pagination",l).hasClass("ui-sortable")&&t(".ul-owl-controls .ul-owl-pagination",l).sortable("destroy"),t(window).off(".sliderWysy")}}()};return i});
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
