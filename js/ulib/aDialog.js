"use strict";define("aDialog",["U","jquery","_","asyncjs","text!./html/aDialog/layout.html"],function(t,e,a,o,n){var i={$appendTo:e(e("#body-fict").length?"#body-fict":"body"),curForm:null,defaults:{wide:!1,data:"<h2>Empty data!</h2>",context:null,required:null,templateData:null,templateUrl:null,templateCss:null,specialModeOverlay:!1,extendClass:"",noBorderRadius:!1,handler:!1,eventHandlerClass:"",afterOpen:function(){return function(){}}(),beforeClose:function(){return function(){}}(),dataChanged:function(){return function(){}}()},open:function(){return function(o){var i=this;i.opt=e.extend({},i.defaults,o),i.$aDialog=e(a.template(n,{handler:i.opt.handler,__:i.opt.__||function(){},eventHandlerClass:i.opt.eventHandlerClass,extendClass:i.opt.extendClass||""})).appendTo(i.$appendTo),i.opt.wide&&i.$aDialog.addClass("aDialog-wide"),i.opt.specialModeOverlay&&i.$aDialog.addClass("aDialog-special-overlay"),i.opt.noBorderRadius&&i.$aDialog.addClass("aDialog-no-border-radius"),setTimeout(function(){i.$aDialog.addClass("ul-js-aDialog-visible")},10),i.$body=i.$aDialog.find("#aDialog-data"),t.layers.on(0,function(){i.hide()}),e("body").addClass("js-aDialogOpened"),i._addEvents(),e("body").on("changePreviewDevise.aDialog",function(){i.hide()}),i._loadTemplate(),i.opened=!0}}(),setNoClose:function(){return function(t){this.noClose=t,this.$aDialog.removeClass("noClose"),t&&this.$aDialog.addClass("noClose")}}(),changeData:function(){return function(t){return this.opened&&this.$body?(this.$body.html(t),this.opt.dataChanged(),this.$body):void 0}}(),hide:function(){return function(){var t=this,a=null;t.curForm&&(a=t.curForm.getResult(),t.curForm.destroy(),t.curForm=null),e("body").removeClass("js-aDialogOpened"),t.$aDialog&&t.$aDialog.off(".aDialog"),e("body").off("changePreviewDevise.aDialog"),t.opt.beforeClose(this.$body,a),t.$aDialog&&(t.$aDialog.remove(),t.$aDialog=null),t.$body=null,setTimeout(function(){t.opened=!1},500)}}(),_hide:function(){return function(){t.layers.off(!0)}}(),_addEvents:function(){return function(){var a=this;a.$aDialog.on("click.aDialog, touchend.aDialog",function(a){var o=e(a.target).closest(".ul-js-aDialog-visible");o.length&&o.hasClass("noClose")||(!e(a.target).closest("#aDialog-content").length||e(a.target).hasClass("js-aDialog-close"))&&t.layers.off(!0)})}}(),msg:{show:function(){return function(t){var a=this;this.hide(),t=e.extend({loading:!1,text:"",headerOverlap:!1,autoHide:0,clickClose:!1},t);var o=this._getStructure(t);t.headerOverlap&&o.css("top",i.$body.find("h2").outerHeight()||0),o=o.appendTo(i.$body),t.clickClose&&o.on("click.aDialog",function(t){a.hide(),t.stopPropagation()}),setTimeout(function(){o.addClass("aDialog-msg-visible")},10),t.autoHide&&(this.timer=setInterval(function(){a.hide()},t.autoHide))}}(),_getStructure:function(){return function(t){var a=e('<div class="aDialog-msg normal"></div>');return t.loading&&a.append('<span class="aDialog-msg-loading-icon"></span>'),a.append('<p class="aDialog-msg-text normal">'+t.text+"</p>"),a}}(),hide:function(){return function(){this.timer&&clearInterval(this.timer),null===i.$body||i.$body.find(".aDialog-msg").off(".aDialog").remove()}}(),changeText:function(){return function(t){if(null!==i.$body){var e=i.$body.find(".aDialog-msg-text");e.length&&e.html(t)}}}()},_loadTemplate:function(){return function(){var t=this,o=[];o.push(t.opt.required),o.push(t.opt.templateUrl),o.push(t.opt.templateCss),t.opt.templateUrl?require(o,function(o,n){t._renderFromData(a.template(n,t.opt.templateData)),o&&(t.curForm=e.extend({init:function(){return function(){}}(),getResult:function(){return function(){}}(),destroy:function(){return function(){}}()},o),t.curForm.init(t.$body,t._hide,t.opt.context))}):t._renderFromData(t.opt.data)}}(),_renderFromData:function(){return function(t){this.$body.html(t).removeClass("ul-loading-indicator"),this.opt.afterOpen(this.$body,this._hide)}}()};return i});
//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map
