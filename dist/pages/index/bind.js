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
      code: ''
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
                  if (/^1[345789]\d{9}$/.test(this.phone)) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请输入正确的手机号',
                    title: '提示'
                  });
                  return _context.abrupt('return', false);

                case 3:
                  _context.next = 5;
                  return _api2.default.sms({
                    phone: this.phone
                  });

                case 5:
                  data = _context.sent;

                  if (data.status) {
                    _wepy2.default.showToast({
                      title: '验证码已发送'
                    });
                    this.disabled = true;
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
                  } else {
                    _wepy2.default.showModal({
                      content: data.message,
                      title: '提示'
                    });
                  }

                case 7:
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
                  if (/^1[3456789]\d{9}$/.test(this.phone)) {
                    _context2.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请输入正确的手机号',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 3:
                  if (this.code) {
                    _context2.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请填写短信验证码',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 6:
                  _context2.next = 8;
                  return _api2.default.bind({
                    phone: this.phone,
                    code: this.code
                  });

                case 8:
                  data = _context2.sent;

                  console.log(data);

                  if (data.token) {
                    _context2.next = 13;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 13:
                  if (!data.token) {
                    _context2.next = 21;
                    break;
                  }

                  _wepy2.default.setStorageSync('token', data.token);
                  _wepy2.default.setStorageSync('user', data.member);
                  _wepy2.default.showToast({
                    title: '登录成功'
                  });
                  _context2.next = 19;
                  return _wepy2.default.getStorageSync('agree');

                case 19:
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

                case 21:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuanMiXSwibmFtZXMiOlsiQmluZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGhvbmUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJjb2RlIiwibWV0aG9kcyIsInBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb2RlSW5wdXQiLCJnZXRDb2RlIiwidGVzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsInNtcyIsInN0YXR1cyIsInNob3dUb2FzdCIsInNlY29uZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5IiwibWVzc2FnZSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJzZXRTdG9yYWdlU3luYyIsIm1lbWJlciIsImdldFN0b3JhZ2VTeW5jIiwiaXNBZ3JlZSIsInNldFRpbWVvdXQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwiZXZlbnRzIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJjdXJyUGFnZSIsInByZXZQYWdlIiwicm91dGUiLCJjbGVhclN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU0sRUFERDtBQUVMQyxZQUFLLE9BRkE7QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxZQUFNO0FBSkQsSyxRQU9QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLGFBQUtOLEtBQUwsR0FBYU0sRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJRUgsQ0FKRixFQUlLO0FBQ1gsYUFBS0gsSUFBTCxHQUFZRyxFQUFFQyxNQUFG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QUFDYkMsNkJBQUs7QUFEUSx1QkFBZjtBQUdELHFCQUpELE1BSUs7QUFDSCxxQ0FBS0MsVUFBTCxDQUFnQjtBQUNkRCw2QkFBSztBQURTLHVCQUFoQjtBQUdEO0FBQ0YsbUJBVkQsRUFVRyxHQVZIOztBQS9FSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUE2RlZFLE0sR0FBUyxFOzs7Ozt3Q0E5RlUsQ0FBRTs7OzZCQWtHWjtBQUNQLFVBQUlDLFFBQVFDLGlCQUFaO0FBQ0EsVUFBR0QsTUFBTUUsTUFBTixJQUFjLENBQWpCLEVBQW1CO0FBQ2pCLFlBQUlDLFdBQVdILE1BQU1BLE1BQU1FLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBRGlCLENBQ3lCO0FBQzFDLFlBQUlFLFdBQVdKLE1BQU1BLE1BQU1FLE1BQU4sR0FBZSxDQUFyQixDQUFmLENBRmlCLENBRXdCO0FBQ3pDZCxnQkFBUUMsR0FBUixDQUFZVyxLQUFaO0FBQ0FaLGdCQUFRQyxHQUFSLENBQVllLFNBQVNDLEtBQXJCO0FBQ0EsWUFBR0QsU0FBU0MsS0FBVCxJQUFrQixrQkFBckIsRUFBd0M7QUFDdEMseUJBQUtDLGdCQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBeEgrQixlQUFLQyxJOztrQkFBbEJoRCxJIiwiZmlsZSI6ImJpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IFd4VmFsaWRhdGUgZnJvbSAnLi4vLi4vdXRpbHMvV3hWYWxpZGF0ZSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgdGV4dDon6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBjb2RlOiAnJ1xyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgY29kZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpqozor4HnoIFcclxuICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnNtcyh7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMpe1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+mqjOivgeeggeW3suWPkemAgSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJzYwc+WQjuiOt+WPlidcclxuICAgICAgICAgIGxldCBzZWNvbmQgPSA2MFxyXG4gICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgc2Vjb25kID0gc2Vjb25kIC0gMVxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBgJHtzZWNvbmR9c+WQjuiOt+WPlmBcclxuICAgICAgICAgICAgaWYoc2Vjb25kPT0wKXtcclxuICAgICAgICAgICAgICB0aGlzLnRleHQgPSAn6I635Y+W6aqM6K+B56CBJ1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOe7keWumlxyXG4gICAgICBhc3luYyBiaW5kKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb2RlKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeefreS/oemqjOivgeeggScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iaW5kKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgY29kZTogdGhpcy5jb2RlXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBpZighZGF0YS50b2tlbil7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW4nLGRhdGEudG9rZW4pXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1c2VyJyxkYXRhLm1lbWJlcilcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6J+eZu+W9leaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBsZXQgaXNBZ3JlZSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FncmVlJylcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc0FncmVlKXtcclxuICAgICAgICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL2FncmVlJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDUwMCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBpZihwYWdlcy5sZW5ndGg+PTIpe1xyXG4gICAgICAgIGxldCBjdXJyUGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdOyAgIC8v5b2T5YmN6aG16Z2iXHJcbiAgICAgICAgbGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07ICAvL+S4iuS4gOS4qumhtemdolxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZQYWdlLnJvdXRlKVxyXG4gICAgICAgIGlmKHByZXZQYWdlLnJvdXRlID09ICdwYWdlcy91c2VyL2FncmVlJyl7XHJcbiAgICAgICAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19