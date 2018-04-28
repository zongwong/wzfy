'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

var _WxValidate = require('./../../utils/WxValidate.js');

var _WxValidate2 = _interopRequireDefault(_WxValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bind = function (_wepy$page) {
  _inherits(Bind, _wepy$page);

  function Bind() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bind);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bind.__proto__ || Object.getPrototypeOf(Bind)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录'
    }, _this.data = {
      phone: '',
      text: '获取验证码',
      disabled: false,
      code: '',
      loginDisabled: false
    }, _this.methods = {
      phoneInput: function phoneInput(e) {
        this.phone = e.detail.value;
      },
      codeInput: function codeInput(e) {
        this.code = e.detail.value;
      },

      // 验证码
      getCode: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          var data, second, timer;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (/^1[345789]\d{9}$/.test(this.phone.replace(/-/g, ''))) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请输入正确的手机号',
                    title: '提示'
                  });
                  return _context.abrupt('return', false);

                case 3:
                  this.disabled = true;
                  this.$apply();
                  _context.next = 7;
                  return _api2.default.sms({
                    phone: this.phone.replace(/-/g, '')
                  });

                case 7:
                  data = _context.sent;

                  if (data.status) {
                    this.text = '60s后获取';
                    second = 60;
                    timer = setInterval(function () {
                      second = second - 1;
                      _this2.text = second + 's\u540E\u83B7\u53D6';
                      if (second == 0) {
                        _this2.text = '获取验证码';
                        _this2.disabled = false;
                        clearInterval(timer);
                      }
                      _this2.$apply();
                    }, 1000);

                    _wepy2.default.showToast({
                      title: '验证码已发送'
                    });
                  } else {
                    _wepy2.default.showModal({
                      content: data.message,
                      title: '提示'
                    });
                    this.disabled = false;
                    this.$apply();
                  }

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getCode() {
          return _ref2.apply(this, arguments);
        }

        return getCode;
      }(),

      // 绑定
      bind: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var data, isAgree;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.code) {
                    _context2.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请填写短信验证码',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 3:
                  this.loginDisabled = true;
                  this.$apply();
                  _context2.next = 7;
                  return _api2.default.bind({
                    phone: this.phone.replace(/-/g, ''),
                    code: this.code
                  });

                case 7:
                  data = _context2.sent;

                  console.log(data);

                  if (data.token) {
                    _context2.next = 14;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  this.loginDisabled = false;
                  this.$apply();
                  return _context2.abrupt('return', false);

                case 14:
                  if (!data.token) {
                    _context2.next = 22;
                    break;
                  }

                  _wepy2.default.setStorageSync('token', data.token);
                  _wepy2.default.setStorageSync('user', data.member);
                  _wepy2.default.showToast({
                    title: '登录成功'
                  });
                  _context2.next = 20;
                  return _wepy2.default.getStorageSync('agree');

                case 20:
                  isAgree = _context2.sent;

                  setTimeout(function () {
                    if (isAgree) {
                      _wepy2.default.switchTab({
                        url: '/pages/index/index'
                      });
                    } else {
                      _wepy2.default.navigateTo({
                        url: '/pages/user/agree'
                      });
                    }
                  }, 500);

                case 22:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function bind() {
          return _ref3.apply(this, arguments);
        }

        return bind;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bind, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var pages = getCurrentPages();
      if (pages.length >= 2) {
        var currPage = pages[pages.length - 1]; //当前页面
        var prevPage = pages[pages.length - 2]; //上一个页面
        console.log(pages);
        console.log(prevPage.route);
        if (prevPage.route == 'pages/user/agree') {
          _wepy2.default.clearStorageSync();
        }
      }
    }
  }]);

  return Bind;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Bind , 'pages/index/bind'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuanMiXSwibmFtZXMiOlsiQmluZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGhvbmUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJjb2RlIiwibG9naW5EaXNhYmxlZCIsIm1ldGhvZHMiLCJwaG9uZUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwiY29kZUlucHV0IiwiZ2V0Q29kZSIsInRlc3QiLCJyZXBsYWNlIiwic2hvd01vZGFsIiwiY29udGVudCIsInRpdGxlIiwiJGFwcGx5Iiwic21zIiwic3RhdHVzIiwic2Vjb25kIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzaG93VG9hc3QiLCJtZXNzYWdlIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInNldFN0b3JhZ2VTeW5jIiwibWVtYmVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJpc0FncmVlIiwic2V0VGltZW91dCIsInN3aXRjaFRhYiIsInVybCIsIm5hdmlnYXRlVG8iLCJldmVudHMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsImN1cnJQYWdlIiwicHJldlBhZ2UiLCJyb3V0ZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLFlBQUssT0FGQTtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxxQkFBYztBQUxULEssUUFRUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLUCxLQUFMLEdBQWFPLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVI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Q0EsaUNBQUtQLFNBQUwsQ0FBZTtBQUNiUiwyQkFBTTtBQURPLG1CQUFmO0FBbEZJO0FBQUEseUJBcUZnQixlQUFLZ0IsY0FBTCxDQUFvQixPQUFwQixDQXJGaEI7O0FBQUE7QUFxRkFDLHlCQXJGQTs7QUFzRkpDLDZCQUFXLFlBQU07QUFDZix3QkFBR0QsT0FBSCxFQUFXO0FBQ1QscUNBQUtFLFNBQUwsQ0FBZTtBQUNiQyw2QkFBSztBQURRLHVCQUFmO0FBR0QscUJBSkQsTUFJSztBQUNILHFDQUFLQyxVQUFMLENBQWdCO0FBQ2RELDZCQUFLO0FBRFMsdUJBQWhCO0FBR0Q7QUFDRixtQkFWRCxFQVVHLEdBVkg7O0FBdEZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQW9HVkUsTSxHQUFTLEU7Ozs7O3dDQXJHVSxDQUFFOzs7NkJBeUdaO0FBQ1AsVUFBSUMsUUFBUUMsaUJBQVo7QUFDQSxVQUFHRCxNQUFNRSxNQUFOLElBQWMsQ0FBakIsRUFBbUI7QUFDakIsWUFBSUMsV0FBV0gsTUFBTUEsTUFBTUUsTUFBTixHQUFlLENBQXJCLENBQWYsQ0FEaUIsQ0FDeUI7QUFDMUMsWUFBSUUsV0FBV0osTUFBTUEsTUFBTUUsTUFBTixHQUFlLENBQXJCLENBQWYsQ0FGaUIsQ0FFd0I7QUFDekNkLGdCQUFRQyxHQUFSLENBQVlXLEtBQVo7QUFDQVosZ0JBQVFDLEdBQVIsQ0FBWWUsU0FBU0MsS0FBckI7QUFDQSxZQUFHRCxTQUFTQyxLQUFULElBQWtCLGtCQUFyQixFQUF3QztBQUN0Qyx5QkFBS0MsZ0JBQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs7RUFoSStCLGVBQUtDLEk7O2tCQUFsQmxELEkiLCJmaWxlIjoiYmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgV3hWYWxpZGF0ZSBmcm9tICcuLi8uLi91dGlscy9XeFZhbGlkYXRlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICB0ZXh0Oifojrflj5bpqozor4HnoIEnLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBsb2dpbkRpc2FibGVkOmZhbHNlXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb2RlSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOmqjOivgeeggVxyXG4gICAgICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUucmVwbGFjZSgvLS9nLCcnKSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuc21zKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICc2MHPlkI7ojrflj5YnXHJcbiAgICAgICAgICBsZXQgc2Vjb25kID0gNjBcclxuICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNlY29uZCA9IHNlY29uZCAtIDFcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gYCR7c2Vjb25kfXPlkI7ojrflj5ZgXHJcbiAgICAgICAgICAgIGlmKHNlY29uZD09MCl7XHJcbiAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ+iOt+WPlumqjOivgeeggSdcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHlt7Llj5HpgIEnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g57uR5a6aXHJcbiAgICAgIGFzeW5jIGJpbmQoKSB7XHJcbiAgICAgICAgLy8gaWYoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUucmVwbGFjZSgvLS9nLCcnKSkpKXtcclxuICAgICAgICAvLyAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAvLyAgICAgY29udGVudDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsXHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYoIXRoaXMuY29kZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7floavlhpnnn63kv6Hpqozor4HnoIEnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9naW5EaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iaW5kKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJyksXHJcbiAgICAgICAgICBjb2RlOiB0aGlzLmNvZGVcclxuICAgICAgICB9KSBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGlmKCFkYXRhLnRva2VuKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmxvZ2luRGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW4nLGRhdGEudG9rZW4pXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1c2VyJyxkYXRhLm1lbWJlcilcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6J+eZu+W9leaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBsZXQgaXNBZ3JlZSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FncmVlJylcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0FncmVlKXtcclxuICAgICAgICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL2FncmVlJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDUwMCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBpZihwYWdlcy5sZW5ndGg+PTIpe1xyXG4gICAgICAgIGxldCBjdXJyUGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAgIC8v5b2T5YmN6aG16Z2iXHJcbiAgICAgICAgbGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07ICAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZQYWdlLnJvdXRlKVxyXG4gICAgICAgIGlmKHByZXZQYWdlLnJvdXRlID09ICdwYWdlcy91c2VyL2FncmVlJyl7XHJcbiAgICAgICAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19