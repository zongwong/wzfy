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
                    _wepy2.default.setStorageSync('token', data.token);
                    _wepy2.default.setStorageSync('user', data.member);
                    _wepy2.default.showToast({
                      title: '登录成功'
                    });
                    setTimeout(function () {
                      _wepy2.default.switchTab({
                        url: '/pages/index/index'
                      });
                    }, 500);
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
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Bind;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Bind , 'pages/index/bind'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuanMiXSwibmFtZXMiOlsiQmluZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGhvbmUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJjb2RlIiwibWV0aG9kcyIsInBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb2RlSW5wdXQiLCJnZXRDb2RlIiwidGVzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsInNtcyIsInN0YXR1cyIsInNob3dUb2FzdCIsInNlY29uZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsIm1lc3NhZ2UiLCJzZXRTdG9yYWdlU3luYyIsIm1lbWJlciIsInNldFRpbWVvdXQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLFlBQUssT0FGQTtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLFlBQU07QUFKRCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS04sS0FBTCxHQUFhTSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlFSCxDQUpGLEVBSUs7QUFDWCxhQUFLSCxJQUFMLEdBQVlHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQU5POztBQU9SO0FBQ01FLGFBUkU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFTRCxtQkFBbUJDLElBQW5CLENBQXdCLEtBQUtYLEtBQTdCLENBVEM7QUFBQTtBQUFBO0FBQUE7O0FBVUosaUNBQUtZLFNBQUwsQ0FBZTtBQUNiQyw2QkFBUyxXQURJO0FBRWJDLDJCQUFPO0FBRk0sbUJBQWY7QUFWSSxtREFjRyxLQWRIOztBQUFBO0FBQUE7QUFBQSx5QkFnQmEsY0FBSUMsR0FBSixDQUFRO0FBQ3pCZiwyQkFBTyxLQUFLQTtBQURhLG1CQUFSLENBaEJiOztBQUFBO0FBZ0JBRCxzQkFoQkE7O0FBbUJOLHNCQUFHQSxLQUFLaUIsTUFBUixFQUFlO0FBQ2IsbUNBQUtDLFNBQUwsQ0FBZTtBQUNiSCw2QkFBTztBQURNLHFCQUFmO0FBR0EseUJBQUtaLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSx5QkFBS0QsSUFBTCxHQUFZLFFBQVo7QUFDSWlCLDBCQU5TLEdBTUEsRUFOQTtBQU9UQyx5QkFQUyxHQU9EQyxZQUFZLFlBQUk7QUFDMUJGLCtCQUFTQSxTQUFTLENBQWxCO0FBQ0EsNkJBQUtqQixJQUFMLEdBQWVpQixNQUFmO0FBQ0EsMEJBQUdBLFVBQVEsQ0FBWCxFQUFhO0FBQ1gsK0JBQUtqQixJQUFMLEdBQVksT0FBWjtBQUNBLCtCQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FtQixzQ0FBY0YsS0FBZDtBQUNEO0FBQ0QsNkJBQUtHLE1BQUw7QUFDRCxxQkFUVyxFQVNWLElBVFUsQ0FQQztBQWlCZDs7QUFwQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBc0NSO0FBQ01DLFVBdkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBd0NELG1CQUFtQlosSUFBbkIsQ0FBd0IsS0FBS1gsS0FBN0IsQ0F4Q0M7QUFBQTtBQUFBO0FBQUE7O0FBeUNKLGlDQUFLWSxTQUFMLENBQWU7QUFDYkMsNkJBQVMsV0FESTtBQUViQywyQkFBTztBQUZNLG1CQUFmO0FBekNJLG9EQTZDRyxLQTdDSDs7QUFBQTtBQUFBLHNCQStDRixLQUFLWCxJQS9DSDtBQUFBO0FBQUE7QUFBQTs7QUFnREosaUNBQUtTLFNBQUwsQ0FBZTtBQUNiQyw2QkFBUyxVQURJO0FBRWJDLDJCQUFPO0FBRk0sbUJBQWY7QUFoREksb0RBb0RHLEtBcERIOztBQUFBO0FBQUE7QUFBQSx5QkFzRGEsY0FBSVMsSUFBSixDQUFTO0FBQzFCdkIsMkJBQU8sS0FBS0EsS0FEYztBQUUxQkcsMEJBQU0sS0FBS0E7QUFGZSxtQkFBVCxDQXREYjs7QUFBQTtBQXNEQUosc0JBdERBOztBQTBETnlCLDBCQUFRQyxHQUFSLENBQVkxQixJQUFaOztBQTFETSxzQkEyREZBLEtBQUsyQixLQTNESDtBQUFBO0FBQUE7QUFBQTs7QUE0REosaUNBQUtkLFNBQUwsQ0FBZTtBQUNiRSwyQkFBTyxJQURNO0FBRWJELDZCQUFTZCxLQUFLNEI7QUFGRCxtQkFBZjtBQTVESSxvREFnRUcsS0FoRUg7O0FBQUE7O0FBbUVOLHNCQUFHNUIsS0FBSzJCLEtBQVIsRUFBYztBQUNaLG1DQUFLRSxjQUFMLENBQW9CLE9BQXBCLEVBQTRCN0IsS0FBSzJCLEtBQWpDO0FBQ0EsbUNBQUtFLGNBQUwsQ0FBb0IsTUFBcEIsRUFBMkI3QixLQUFLOEIsTUFBaEM7QUFDQSxtQ0FBS1osU0FBTCxDQUFlO0FBQ2JILDZCQUFNO0FBRE8scUJBQWY7QUFHQWdCLCtCQUFXLFlBQU07QUFDZixxQ0FBS0MsU0FBTCxDQUFlO0FBQ2JDLDZCQUFLO0FBRFEsdUJBQWY7QUFHRCxxQkFKRCxFQUlHLEdBSkg7QUFLRDs7QUE5RUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLLFFBaUZWQyxNLEdBQVMsRTs7Ozs7NkJBSUEsQ0FFUjs7OztFQW5HK0IsZUFBS0MsSTs7a0JBQWxCdEMsSSIsImZpbGUiOiJiaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGltcG9ydCBXeFZhbGlkYXRlIGZyb20gJy4uLy4uL3V0aWxzL1d4VmFsaWRhdGUnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHRleHQ6J+iOt+WPlumqjOivgeeggScsXHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgY29kZTogJydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgY29kZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpqozor4HnoIFcclxuICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnNtcyh7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMpe1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+mqjOivgeeggeW3suWPkemAgSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJzYwc+WQjuiOt+WPlidcclxuICAgICAgICAgIGxldCBzZWNvbmQgPSA2MFxyXG4gICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgc2Vjb25kID0gc2Vjb25kIC0gMVxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBgJHtzZWNvbmR9c+WQjuiOt+WPlmBcclxuICAgICAgICAgICAgaWYoc2Vjb25kPT0wKXtcclxuICAgICAgICAgICAgICB0aGlzLnRleHQgPSAn6I635Y+W6aqM6K+B56CBJ1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g57uR5a6aXHJcbiAgICAgIGFzeW5jIGJpbmQoKSB7XHJcbiAgICAgICAgaWYoISgvXjFbMzQ1Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY29kZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7floavlhpnnn63kv6Hpqozor4HnoIEnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYmluZCh7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgIGNvZGU6IHRoaXMuY29kZVxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgaWYoIWRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhLnRva2VuKXtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyxkYXRhLnRva2VuKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndXNlcicsZGF0YS5tZW1iZXIpXHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifnmbvlvZXmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LCA1MDApOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==