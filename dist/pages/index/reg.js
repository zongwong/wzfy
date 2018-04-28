'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
          var data;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (/^1[345789]\d{9}$/.test(this.phone)) {
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

                  if (data.token) {
                    _wepy2.default.setStorageSync('token', token);
                    _wepy2.default.setStorageSync('user', data);
                    _wepy2.default.showToast({
                      title: '登录成功'
                    });
                    setTimeout(function () {
                      _wepy2.default.redirectTo({
                        url: '/pages/index/index'
                      });
                    }, 600);
                  }

                case 14:
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
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Bind;
}(_wepy2.default.page);

exports.default = Bind;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy5qcyJdLCJuYW1lcyI6WyJCaW5kIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG9uZSIsInRleHQiLCJkaXNhYmxlZCIsImNvZGUiLCJtZXRob2RzIiwicGhvbmVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvZGVJbnB1dCIsImdldENvZGUiLCJ0ZXN0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInRpdGxlIiwic21zIiwic3RhdHVzIiwic2hvd1RvYXN0Iiwic2Vjb25kIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCIkYXBwbHkiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwibWVzc2FnZSIsInNldFN0b3JhZ2VTeW5jIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLFlBQUssT0FGQTtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLFlBQU07QUFKRCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS04sS0FBTCxHQUFhTSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlFSCxDQUpGLEVBSUs7QUFDWCxhQUFLSCxJQUFMLEdBQVlHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQU5POztBQU9SO0FBQ01FLGFBUkU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFTRCxtQkFBbUJDLElBQW5CLENBQXdCLEtBQUtYLEtBQTdCLENBVEM7QUFBQTtBQUFBO0FBQUE7O0FBVUosaUNBQUtZLFNBQUwsQ0FBZTtBQUNiQyw2QkFBUyxXQURJO0FBRWJDLDJCQUFPO0FBRk0sbUJBQWY7QUFWSSxtREFjRyxLQWRIOztBQUFBO0FBQUE7QUFBQSx5QkFnQmEsY0FBSUMsR0FBSixDQUFRO0FBQ3pCZiwyQkFBTyxLQUFLQTtBQURhLG1CQUFSLENBaEJiOztBQUFBO0FBZ0JBRCxzQkFoQkE7O0FBbUJOLHNCQUFHQSxLQUFLaUIsTUFBUixFQUFlO0FBQ2IsbUNBQUtDLFNBQUwsQ0FBZTtBQUNiSCw2QkFBTztBQURNLHFCQUFmO0FBR0EseUJBQUtaLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSx5QkFBS0QsSUFBTCxHQUFZLFFBQVo7QUFDSWlCLDBCQU5TLEdBTUEsRUFOQTtBQU9UQyx5QkFQUyxHQU9EQyxZQUFZLFlBQUk7QUFDMUJGLCtCQUFTQSxTQUFTLENBQWxCO0FBQ0EsNkJBQUtqQixJQUFMLEdBQWVpQixNQUFmO0FBQ0EsMEJBQUdBLFVBQVEsQ0FBWCxFQUFhO0FBQ1gsK0JBQUtqQixJQUFMLEdBQVksT0FBWjtBQUNBLCtCQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FtQixzQ0FBY0YsS0FBZDtBQUNEO0FBQ0QsNkJBQUtHLE1BQUw7QUFDRCxxQkFUVyxFQVNWLElBVFUsQ0FQQztBQWlCZDs7QUFwQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBc0NSO0FBQ01DLFVBdkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBd0NELG1CQUFtQlosSUFBbkIsQ0FBd0IsS0FBS1gsS0FBN0IsQ0F4Q0M7QUFBQTtBQUFBO0FBQUE7O0FBeUNKLGlDQUFLWSxTQUFMLENBQWU7QUFDYkMsNkJBQVMsV0FESTtBQUViQywyQkFBTztBQUZNLG1CQUFmO0FBekNJLG9EQTZDRyxLQTdDSDs7QUFBQTtBQUFBLHNCQStDRixLQUFLWCxJQS9DSDtBQUFBO0FBQUE7QUFBQTs7QUFnREosaUNBQUtTLFNBQUwsQ0FBZTtBQUNiQyw2QkFBUyxVQURJO0FBRWJDLDJCQUFPO0FBRk0sbUJBQWY7QUFoREksb0RBb0RHLEtBcERIOztBQUFBO0FBQUE7QUFBQSx5QkFzRGEsY0FBSVMsSUFBSixDQUFTO0FBQzFCdkIsMkJBQU8sS0FBS0EsS0FEYztBQUUxQkcsMEJBQU0sS0FBS0E7QUFGZSxtQkFBVCxDQXREYjs7QUFBQTtBQXNEQUosc0JBdERBOztBQTBETnlCLDBCQUFRQyxHQUFSLENBQVkxQixJQUFaOztBQTFETSxzQkEyREZBLEtBQUsyQixLQTNESDtBQUFBO0FBQUE7QUFBQTs7QUE0REosaUNBQUtkLFNBQUwsQ0FBZTtBQUNiRSwyQkFBTyxJQURNO0FBRWJELDZCQUFTZCxLQUFLNEI7QUFGRCxtQkFBZjtBQTVESSxvREFnRUcsS0FoRUg7O0FBQUE7O0FBbUVOLHNCQUFHNUIsS0FBSzJCLEtBQVIsRUFBYztBQUNaLG1DQUFLRSxjQUFMLENBQW9CLE9BQXBCLEVBQTRCRixLQUE1QjtBQUNBLG1DQUFLRSxjQUFMLENBQW9CLE1BQXBCLEVBQTJCN0IsSUFBM0I7QUFDQSxtQ0FBS2tCLFNBQUwsQ0FBZTtBQUNiSCw2QkFBTTtBQURPLHFCQUFmO0FBR0FlLCtCQUFXLFlBQU07QUFDZixxQ0FBS0MsVUFBTCxDQUFnQjtBQUNkQyw2QkFBSztBQURTLHVCQUFoQjtBQUdELHFCQUpELEVBSUcsR0FKSDtBQUtEOztBQTlFSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUFpRlZDLE0sR0FBUyxFOzs7Ozt3Q0FsRlUsQ0FBRTs7OzZCQXNGWixDQUVSOzs7O0VBbkcrQixlQUFLQyxJOztrQkFBbEJyQyxJIiwiZmlsZSI6InJlZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgV3hWYWxpZGF0ZSBmcm9tICcuLi8uLi91dGlscy9XeFZhbGlkYXRlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICB0ZXh0Oifojrflj5bpqozor4HnoIEnLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIGNvZGU6ICcnXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb2RlSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOmqjOivgeeggVxyXG4gICAgICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuc21zKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihkYXRhLnN0YXR1cyl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6aqM6K+B56CB5bey5Y+R6YCBJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLnRleHQgPSAnNjBz5ZCO6I635Y+WJ1xyXG4gICAgICAgICAgbGV0IHNlY29uZCA9IDYwXHJcbiAgICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQgLSAxXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGAke3NlY29uZH1z5ZCO6I635Y+WYFxyXG4gICAgICAgICAgICBpZihzZWNvbmQ9PTApe1xyXG4gICAgICAgICAgICAgIHRoaXMudGV4dCA9ICfojrflj5bpqozor4HnoIEnXHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDnu5HlrppcclxuICAgICAgYXN5bmMgYmluZCgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb2RlKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeefreS/oemqjOivgeeggScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iaW5kKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgY29kZTogdGhpcy5jb2RlXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBpZighZGF0YS50b2tlbil7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW4nLHRva2VuKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlcicsZGF0YSlcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6J+eZu+W9leaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LCA2MDApOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==