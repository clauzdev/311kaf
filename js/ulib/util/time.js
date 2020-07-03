"use strict";define("ulib/util/time",[],function(){return{getMskTimeZoneText:function(t){var e=-180;if(t===e)return"MSK";var n=(t-e)/60,c=n>0?"-":"+";return"MSK".concat(c).concat(Math.abs(n))},getUtcTimeZoneText:function(t){if(0===t)return"UTC";var e=t/60,n=0>t?"+":"-";return"UTC".concat(n).concat(Math.abs(e))},getMskRelativeTimeZone:function(t){return"".concat(this.getMskTimeZoneText(t)," (").concat(this.getUtcTimeZoneText(t),")")},getLocalTimeZone:function(){var t=new Date;return t.toString().match(/([\+-][0-9]+.*)/)[1].replace(/(\+\d{2})(\d{2})(\s\(\w{3}\))/,"$1:$2 $3").replace(/ \(\W\W*/,")")}}});
//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map

//# sourceMappingURL=time.js.map
