"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../interfaces/api.js"),_api2=_interopRequireDefault(_api),FinancialForm=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"金融服务"},r.data={name:"",phone:"",sex:"men",type:"finance",content:"",money:""},r.methods={nameInput:function(e){this.name=e.detail.value},phoneInput:function(e){this.phone=e.detail.value},sexSelect:function(e){this.sex=e},moneyInput:function(e){this.money=e.detail.value},contentInput:function(e){this.content=e.detail.value},submit:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.name){e.next=3;break}return _wepy2.default.showModal({title:"提示",content:"请填写姓名"}),e.abrupt("return",!1);case 3:if(/^1[3456789]\d{9}$/.test(this.phone)){e.next=6;break}return _wepy2.default.showModal({title:"提示",content:"请填写正确的手机号"}),e.abrupt("return",!1);case 6:if(this.money){e.next=9;break}return _wepy2.default.showModal({title:"提示",content:"请填借款额度"}),e.abrupt("return",!1);case 9:return e.next=11,_api2.default.reports({name:this.name,phone:this.phone,sex:this.sex,type:this.type,quota:this.money,content:this.content});case 11:t=e.sent,t&&_wepy2.default.showModal({title:"提示",content:"推荐成功"});case 13:case"end":return e.stop()}},e,this)}));return e}()},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onShareAppMessage",value:function(){}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(FinancialForm,"pages/financial/form"));