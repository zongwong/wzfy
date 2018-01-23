'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_wepy$page) {
  _inherits(Share, _wepy$page);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '加入我们'
    }, _this.data = {
      phone: '',
      text: '获取验证码',
      disabled: false,
      code: '',
      sex: 'men'
    }, _this.methods = {
      sexSelect: function sexSelect(sex) {
        this.sex = sex;
      },
      phoneInput: function phoneInput(e) {
        this.phone = e.detail.value;
      },
      codeInput: function codeInput(e) {
        this.code = e.detail.value;
      },
      nameInput: function nameInput(e) {
        this.name = e.detail.value;
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
                  return api.sms({
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
                  if (this.name) {
                    _context2.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请填写真实姓名',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 9:
                  _context2.next = 11;
                  return api.register({
                    phone: this.phone,
                    code: this.code,
                    real_name: this.name,
                    sex: this.sex
                  });

                case 11:
                  data = _context2.sent;

                  console.log(data);

                  if (data.token) {
                    _context2.next = 16;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 16:

                  if (data.token) {
                    _wepy2.default.setStorageSync('token', token);
                    _wepy2.default.setStorageSync('user', data);
                    _wepy2.default.showToast({
                      title: '注册成功'
                    });
                    setTimeout(function () {
                      _wepy2.default.redirectTo({
                        url: '/pages/index/index'
                      });
                    }, 600);
                  }

                case 17:
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Share;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Share , 'pages/user/share'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbIlNoYXJlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG9uZSIsInRleHQiLCJkaXNhYmxlZCIsImNvZGUiLCJzZXgiLCJtZXRob2RzIiwic2V4U2VsZWN0IiwicGhvbmVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvZGVJbnB1dCIsIm5hbWVJbnB1dCIsIm5hbWUiLCJnZXRDb2RlIiwidGVzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsImFwaSIsInNtcyIsInN0YXR1cyIsInNob3dUb2FzdCIsInNlY29uZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5IiwiYmluZCIsInJlZ2lzdGVyIiwicmVhbF9uYW1lIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwibWVzc2FnZSIsInNldFN0b3JhZ2VTeW5jIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLFlBQUssT0FGQTtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxXQUFJO0FBTEMsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUYsR0FERixFQUNPO0FBQ2IsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0QsT0FITztBQUlSRyxnQkFKUSxzQkFJR0MsQ0FKSCxFQUlNO0FBQ1osYUFBS1IsS0FBTCxHQUFhUSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SQyxlQVBRLHFCQU9FSCxDQVBGLEVBT0s7QUFDWCxhQUFLTCxJQUFMLEdBQVlLLEVBQUVDLE1BQUYsQ0FBU0MsS0FB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Siw2QkFBTTtBQURPLHFCQUFmO0FBR0FrQiwrQkFBVyxZQUFNO0FBQ2YscUNBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsNkJBQUs7QUFEUyx1QkFBaEI7QUFHRCxxQkFKRCxFQUlHLEdBSkg7QUFLRDs7QUE3Rks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBYnVCLGVBQUtDLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKoOWFpeaIkeS7rCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgdGV4dDon6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgc2V4OidtZW4nXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb2RlSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgLy8g6aqM6K+B56CBXHJcbiAgICAgIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICAgICAgaWYoISgvXjFbMzQ1Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5zbXMoe1xyXG4gICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHlt7Llj5HpgIEnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICc2MHPlkI7ojrflj5YnXHJcbiAgICAgICAgICBsZXQgc2Vjb25kID0gNjBcclxuICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNlY29uZCA9IHNlY29uZCAtIDFcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gYCR7c2Vjb25kfXPlkI7ojrflj5ZgXHJcbiAgICAgICAgICAgIGlmKHNlY29uZD09MCl7XHJcbiAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ+iOt+WPlumqjOivgeeggSdcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOe7keWumlxyXG4gICAgICBhc3luYyBiaW5kKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmNvZGUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35aGr5YaZ55+t5L+h6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5uYW1lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZWdpc3Rlcih7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICAgIHJlYWxfbmFtZTp0aGlzLm5hbWUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXhcclxuICAgICAgICB9KSBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGlmKCFkYXRhLnRva2VuKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YS50b2tlbil7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsdG9rZW4pXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1c2VyJyxkYXRhKVxyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTon5rOo5YaM5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDYwMCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ==