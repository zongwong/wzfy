'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

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
      sex: 'men',
      member_id: ''
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
          var data;
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
                  return _api2.default.register(this.member_id, {
                    phone: this.phone,
                    code: this.code,
                    real_name: this.name,
                    sex: this.sex
                  });

                case 11:
                  data = _context2.sent;

                  console.log(this.member_id);
                  console.log(data);

                  if (data.token) {
                    _context2.next = 17;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 17:

                  if (data.token) {
                    // wepy.setStorageSync('token',data.token)
                    // wepy.setStorageSync('user',data.member)
                    _wepy2.default.showToast({
                      title: '注册成功'
                    });
                    setTimeout(function () {
                      // wepy.switchTab({
                      //   url: '/pages/index/index'
                      // })
                      _wepy2.default.navigateTo({
                        url: '/pages/index/bind'
                      });
                    }, 600);
                  }

                case 18:
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

  _createClass(Share, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.member_id = options.id;
      console.log(this.member_id);
    }
  }]);

  return Share;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Share , 'pages/user/share'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbIlNoYXJlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG9uZSIsInRleHQiLCJkaXNhYmxlZCIsImNvZGUiLCJzZXgiLCJtZW1iZXJfaWQiLCJtZXRob2RzIiwic2V4U2VsZWN0IiwicGhvbmVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvZGVJbnB1dCIsIm5hbWVJbnB1dCIsIm5hbWUiLCJnZXRDb2RlIiwidGVzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsInNtcyIsInN0YXR1cyIsInNob3dUb2FzdCIsInNlY29uZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5IiwibWVzc2FnZSIsImJpbmQiLCJyZWdpc3RlciIsInJlYWxfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsImlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFNLEVBREQ7QUFFTEMsWUFBSyxPQUZBO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLFdBQUksS0FMQztBQU1MQyxpQkFBVTtBQU5MLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VILEdBREYsRUFDTztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNELE9BSE87QUFJUkksZ0JBSlEsc0JBSUdDLENBSkgsRUFJTTtBQUNaLGFBQUtULEtBQUwsR0FBYVMsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BTk87QUFPUkMsZUFQUSxxQkFPRUgsQ0FQRixFQU9LO0FBQ1gsYUFBS04s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RkQsbUJBQWY7QUFqRkksb0RBcUZHLEtBckZIOztBQUFBOztBQXdGTixzQkFBRzdCLEtBQUttQyxLQUFSLEVBQWM7QUFDWjtBQUNBO0FBQ0EsbUNBQUtaLFNBQUwsQ0FBZTtBQUNiSCw2QkFBTTtBQURPLHFCQUFmO0FBR0FnQiwrQkFBVyxZQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EscUNBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsNkJBQUs7QUFETyx1QkFBaEI7QUFHRCxxQkFQRCxFQU9HLEdBUEg7QUFRRDs7QUF0R0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozt3Q0F5R1MsQ0FBRTs7OzJCQUNkQyxPLEVBQVM7QUFDZCxXQUFLakMsU0FBTCxHQUFpQmlDLFFBQVFDLEVBQXpCO0FBQ0FQLGNBQVFDLEdBQVIsQ0FBWSxLQUFLNUIsU0FBakI7QUFDRDs7OztFQTNIZ0MsZUFBS21DLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yqg5YWl5oiR5LusJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICB0ZXh0Oifojrflj5bpqozor4HnoIEnLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBzZXg6J21lbicsXHJcbiAgICAgIG1lbWJlcl9pZDonJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgY29kZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOmqjOivgeeggVxyXG4gICAgICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuc21zKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihkYXRhLnN0YXR1cyl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6aqM6K+B56CB5bey5Y+R6YCBJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLnRleHQgPSAnNjBz5ZCO6I635Y+WJ1xyXG4gICAgICAgICAgbGV0IHNlY29uZCA9IDYwXHJcbiAgICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQgLSAxXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGAke3NlY29uZH1z5ZCO6I635Y+WYFxyXG4gICAgICAgICAgICBpZihzZWNvbmQ9PTApe1xyXG4gICAgICAgICAgICAgIHRoaXMudGV4dCA9ICfojrflj5bpqozor4HnoIEnXHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g57uR5a6aXHJcbiAgICAgIGFzeW5jIGJpbmQoKSB7XHJcbiAgICAgICAgaWYoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmNvZGUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+35aGr5YaZ55+t5L+h6aqM6K+B56CBJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5uYW1lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeecn+WunuWnk+WQjScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZWdpc3Rlcih0aGlzLm1lbWJlcl9pZCx7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICAgIHJlYWxfbmFtZTp0aGlzLm5hbWUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXhcclxuICAgICAgICB9KSBcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lbWJlcl9pZClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGlmKCFkYXRhLnRva2VuKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YS50b2tlbil7XHJcbiAgICAgICAgICAvLyB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsZGF0YS50b2tlbilcclxuICAgICAgICAgIC8vIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXInLGRhdGEubWVtYmVyKVxyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTon5rOo5YaM5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2JpbmQnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sIDYwMCk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm1lbWJlcl9pZCA9IG9wdGlvbnMuaWRcclxuICAgICAgY29uc29sZS5sb2codGhpcy5tZW1iZXJfaWQpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=