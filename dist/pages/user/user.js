"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a),s=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxapi=require("./../../interfaces/wxapi.js"),_wxapi2=_interopRequireDefault(_wxapi),User=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.config={navigationBarTitleText:"个人中心"},n.data={userInfo:null,user:null},n.methods={loginOut:function(){wx.clearStorageSync()}},n.events={},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_wxapi2.default.getUser();case 2:return t=e.sent,e.next=5,_wepy2.default.getStorageSync("user");case 5:r=e.sent,this.userInfo=t,this.user=r,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShareAppMessage",value:function(){var e=this.user.id;return{imageUrl:"https://www.xmwzfy.com/assets/img/bg.png",path:"/pages/user/share?id="+e,success:function(){console.log("/pages/user/share?id="+e)}}}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(User,"pages/user/user"));