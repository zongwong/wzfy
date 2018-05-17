"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var o=t[i](a),u=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),_wxapi=require("./../../interfaces/wxapi.js"),_wxapi2=_interopRequireDefault(_wxapi),City=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.config={navigationBarTitleText:"选择城市"},n.data={city:[],gpsCity:""},n.methods={chooseCity:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=this.city.indexOf(t)){e.next=4;break}return t=this.city[0],e.next=4,_wepy2.default.showModal({title:"提示",content:"当前城市未开通服务"});case 4:return _wepy2.default.setStorageSync("city",t),e.next=7,_wepy2.default.navigateBack({delta:1});case 7:case"end":return e.stop()}},e,this)}));return e}()},n.events={},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"onShareAppMessage",value:function(){}},{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_api2.default.cities();case 2:t=e.sent,this.city=t,this.$apply(),_wxapi2.default.BaiduMap().then(function(e){var t=e.originalData.result.addressComponent.city;r.gpsCity=t.slice(0,t.length-1),r.$apply()});case 6:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(City,"pages/index/city"));