"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),_WxValidate=require("./../../utils/WxValidate.js"),_WxValidate2=_interopRequireDefault(_WxValidate),Bind=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"登录"},r.data={phone:"",text:"获取验证码",disabled:!1,code:""},r.methods={phoneInput:function(e){this.phone=e.detail.value},codeInput:function(e){this.code=e.detail.value},getCode:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[345789]\d{9}$/.test(this.phone)){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:return e.next=5,_api2.default.sms({phone:this.phone});case 5:t=e.sent,t.status&&(_wepy2.default.showToast({title:"验证码已发送"}),this.disabled=!0,this.text="60s后获取",n=60,r=setInterval(function(){n-=1,o.text=n+"s后获取",0==n&&(o.text="获取验证码",o.disabled=!1,clearInterval(r)),o.$apply()},1e3));case 7:case"end":return e.stop()}},e,this)}));return e}(),bind:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[345789]\d{9}$/.test(this.phone)){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:if(this.code){e.next=6;break}return _wepy2.default.showModal({content:"请填写短信验证码",title:"提示"}),e.abrupt("return",!1);case 6:return e.next=8,_api2.default.bind({phone:this.phone,code:this.code});case 8:if(t=e.sent,console.log(t),t.token){e.next=13;break}return _wepy2.default.showModal({title:"提示",content:t.message}),e.abrupt("return",!1);case 13:t.token&&(_wepy2.default.setStorageSync("token",token),_wepy2.default.setStorageSync("user",t),_wepy2.default.showToast({title:"登录成功"}),setTimeout(function(){_wepy2.default.redirectTo({url:"/pages/index/index"})},600));case 14:case"end":return e.stop()}},e,this)}));return e}()},r.events={},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){}}]),t}(_wepy2.default.page);exports.default=Bind;