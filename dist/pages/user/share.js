"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),Share=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"加入我们"},r.data={phone:"",text:"获取验证码",disabled:!1,code:"",sex:"men",member_id:""},r.methods={sexSelect:function(e){this.sex=e},phoneInput:function(e){this.phone=e.detail.value},codeInput:function(e){this.code=e.detail.value},nameInput:function(e){this.name=e.detail.value},getCode:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[345789]\d{9}$/.test(this.phone)){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:return e.next=5,_api2.default.sms({phone:this.phone});case 5:t=e.sent,t.status&&(_wepy2.default.showToast({title:"验证码已发送"}),this.disabled=!0,this.text="60s后获取",n=60,r=setInterval(function(){n-=1,a.text=n+"s后获取",0==n&&(a.text="获取验证码",a.disabled=!1,clearInterval(r)),a.$apply()},1e3));case 7:case"end":return e.stop()}},e,this)}));return e}(),bind:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^1[3456789]\d{9}$/.test(this.phone)){e.next=3;break}return _wepy2.default.showModal({content:"请输入正确的手机号",title:"提示"}),e.abrupt("return",!1);case 3:if(this.code){e.next=6;break}return _wepy2.default.showModal({content:"请填写短信验证码",title:"提示"}),e.abrupt("return",!1);case 6:if(this.name){e.next=9;break}return _wepy2.default.showModal({content:"请填写真实姓名",title:"提示"}),e.abrupt("return",!1);case 9:return e.next=11,_api2.default.register(this.member_id,{phone:this.phone,code:this.code,real_name:this.name,sex:this.sex});case 11:if(t=e.sent,console.log(t),t.token){e.next=16;break}return _wepy2.default.showModal({title:"提示",content:t.message}),e.abrupt("return",!1);case 16:t.token&&(_wepy2.default.setStorageSync("token",t.token),_wepy2.default.setStorageSync("user",t.member),_wepy2.default.showToast({title:"注册成功"}),setTimeout(function(){_wepy2.default.switchTab({url:"/pages/index/index"})},600));case 17:case"end":return e.stop()}},e,this)}));return e}()},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.member_id=e.id}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Share,"pages/user/share"));