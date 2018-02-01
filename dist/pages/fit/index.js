"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_tab=require("./../../components/tab.js"),_tab2=_interopRequireDefault(_tab),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),_pagination=require("./../../mixin/pagination.js"),_pagination2=_interopRequireDefault(_pagination),Fitindex=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"装修服务"},r.$repeat={},r.$props={tab:{"xmlns:v-bind":"","v-bind:navs.once":"navs"}},r.$events={},r.components={tab:_tab2.default},r.mixins=[_pagination2.default],r.data={navs:[{text:"套餐介绍",selected:!0},{text:"装修案例",selected:!1}],list:null,tabIndex:0,page:{list:[]}},r.methods={toDetail:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.page.list.filter(function(e){return e.id==t}),console.log(n[0]),e.next=4,_wepy2.default.setStorageSync("detail",n[0]);case 4:_wepy2.default.navigateTo({url:"/pages/fit/detail"});case 5:case"end":return e.stop()}},e,this)}));return e}()},r.events={navTapEvent:function(e){this.tabIndex=e,0==e?this.getDecoratesList():this.getCaseList()}},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"onShareAppMessage",value:function(){}},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.removeStorageSync("detail");case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wepy2.default.removeStorageSync("detail");case 2:return e.next=4,this.getDecoratesList();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getDecoratesList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_api2.default.decorates();case 2:return this.page=e.sent,this.page.reset(),e.next=6,this.next();case 6:this.$apply();case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"getCaseList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_api2.default.cases();case 2:return this.page=e.sent,this.page.reset(),e.next=6,this.next();case 6:this.$apply();case 7:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Fitindex,"pages/fit/index"));