"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),_WxValidate=require("./../../utils/WxValidate.js"),_WxValidate2=_interopRequireDefault(_WxValidate),Bind=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"登录"},r.data={phone:"",text:"获取验证码",disabled:!1,code:"",loginDisabled:!1},r.methods={phoneInput:function(e){this.phone=e.detail.value},codeInput:function(e){this.code=e.detail.value},getCode:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[345789]\d{9}$/.test(this.phone.replace(/-/g,""))){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:return this.disabled=!0,this.$apply(),e.next=7,_api2.default.sms({phone:this.phone.replace(/-/g,"")});case 7:t=e.sent,t.status?(this.text="60s后获取",n=60,r=setInterval(function(){n-=1,a.text=n+"s后获取",0==n&&(a.text="获取验证码",a.disabled=!1,clearInterval(r)),a.$apply()},1e3),_wepy2.default.showToast({title:"验证码已发送"})):(_wepy2.default.showModal({content:t.message,title:"提示"}),this.disabled=!1,this.$apply());case 9:case"end":return e.stop()}},e,this)}));return e}(),bind:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[3456789]\d{9}$/.test(this.phone.replace(/-/g,""))){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:if(this.code){e.next=6;break}return _wepy2.default.showModal({content:"请填写短信验证码",title:"提示"}),e.abrupt("return",!1);case 6:return this.loginDisabled=!0,this.$apply(),e.next=10,_api2.default.bind({phone:this.phone.replace(/-/g,""),code:this.code});case 10:if(t=e.sent,console.log(t),t.token){e.next=17;break}return _wepy2.default.showModal({title:"提示",content:t.message}),this.loginDisabled=!1,this.$apply(),e.abrupt("return",!1);case 17:if(!t.token){e.next=25;break}return _wepy2.default.setStorageSync("token",t.token),_wepy2.default.setStorageSync("user",t.member),_wepy2.default.showToast({title:"登录成功"}),e.next=23,_wepy2.default.getStorageSync("agree");case 23:n=e.sent,setTimeout(function(){n?_wepy2.default.switchTab({url:"/pages/index/index"}):_wepy2.default.navigateTo({url:"/pages/user/agree"})},500);case 25:case"end":return e.stop()}},e,this)}));return e}()},r.events={},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"onShareAppMessage",value:function(){}},{key:"onShow",value:function(){var e=getCurrentPages();if(e.length>=2){var t=(e[e.length-1],e[e.length-2]);console.log(e),console.log(t.route),"pages/user/agree"==t.route&&_wepy2.default.clearStorageSync()}}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Bind,"pages/index/bind"));