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
      navigationBarTitleText: '绑定手机号'
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
                  _wepy2.default.setStorageSync('token', 'GF3HIMALCZEpL7zdexeqavILoQNUmdKh');

                  if (/^1[345789]\d{9}$/.test(this.phone)) {
                    _context2.next = 4;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请输入正确的手机号',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 4:
                  if (this.code) {
                    _context2.next = 7;
                    break;
                  }

                  _wepy2.default.showModal({
                    content: '请填写短信验证码',
                    title: '提示'
                  });
                  return _context2.abrupt('return', false);

                case 7:
                  _context2.next = 9;
                  return _api2.default.bind({
                    phone: this.phone,
                    code: this.code
                  });

                case 9:
                  data = _context2.sent;

                  console.log(data);

                  if (data.status) {
                    _context2.next = 14;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 14:

                  if (data.token) {
                    _wepy2.default.setStorageSync('token', 'Bearer' + token);
                    _wepy2.default, showToast({
                      title: '登录成功'
                    });
                  }
                  // if(0){
                  //   wepy.navigateTo({
                  //     url: '/pages/index/index'
                  //   })
                  // }

                case 15:
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

exports.default = Bind;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuanMiXSwibmFtZXMiOlsiQmluZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGhvbmUiLCJ0ZXh0IiwiZGlzYWJsZWQiLCJjb2RlIiwibWV0aG9kcyIsInBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb2RlSW5wdXQiLCJnZXRDb2RlIiwidGVzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsInNtcyIsInN0YXR1cyIsInNob3dUb2FzdCIsInNlY29uZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5IiwiYmluZCIsInNldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0b2tlbiIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFNLEVBREQ7QUFFTEMsWUFBSyxPQUZBO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsWUFBTTtBQUpELEssUUFPUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLTixLQUFMLEdBQWFNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVILENBSkYsRUFJSztBQUNYLGFBQUtILElBQUwsR0FBWUcsRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BTk87O0FBT1I7QUFDTUUsYUFSRTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVNELG1CQUFtQkMsSUFBbkIsQ0FBd0IsS0FBS1gsS0FBN0IsQ0FUQztBQUFBO0FBQUE7QUFBQTs7QUFVSixpQ0FBS1ksU0FBTCxDQUFlO0FBQ2JDLDZCQUFTLFdBREk7QUFFYkMsMkJBQU87QUFGTSxtQkFBZjtBQVZJLG1EQWNHLEtBZEg7O0FBQUE7QUFBQTtBQUFBLHlCQWdCYSxjQUFJQyxHQUFKLENBQVE7QUFDekJmLDJCQUFPLEtBQUtBO0FBRGEsbUJBQVIsQ0FoQmI7O0FBQUE7QUFnQkFELHNCQWhCQTs7QUFtQk4sc0JBQUdBLEtBQUtpQixNQUFSLEVBQWU7QUFDYixtQ0FBS0MsU0FBTCxDQUFlO0FBQ2JILDZCQUFPO0FBRE0scUJBQWY7QUFHQSx5QkFBS1osUUFBTCxHQUFnQixJQUFoQjtBQUNBLHlCQUFLRCxJQUFMLEdBQVksUUFBWjtBQUNJaUIsMEJBTlMsR0FNQSxFQU5BO0FBT1RDLHlCQVBTLEdBT0RDLFlBQVksWUFBSTtBQUMxQkYsK0JBQVNBLFNBQVMsQ0FBbEI7QUFDQSw2QkFBS2pCLElBQUwsR0FBZWlCLE1BQWY7QUFDQSwwQkFBR0EsVUFBUSxDQUFYLEVBQWE7QUFDWCwrQkFBS2pCLElBQUwsR0FBWSxPQUFaO0FBQ0EsK0JBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQW1CLHNDQUFjRixLQUFkO0FBQ0Q7QUFDRCw2QkFBS0csTUFBTDtBQUNELHFCQVRXLEVBU1YsSUFUVSxDQVBDO0FBaUJkOztBQXBDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFzQ1I7QUFDTUMsVUF2Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3Q04saUNBQUtDLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNEIsa0NBQTVCOztBQXhDTSxzQkF5Q0QsbUJBQW1CYixJQUFuQixDQUF3QixLQUFLWCxLQUE3QixDQXpDQztBQUFBO0FBQUE7QUFBQTs7QUEwQ0osaUNBQUtZLFNBQUwsQ0FBZTtBQUNiQyw2QkFBUyxXQURJO0FBRWJDLDJCQUFPO0FBRk0sbUJBQWY7QUExQ0ksb0RBOENHLEtBOUNIOztBQUFBO0FBQUEsc0JBZ0RGLEtBQUtYLElBaERIO0FBQUE7QUFBQTtBQUFBOztBQWlESixpQ0FBS1MsU0FBTCxDQUFlO0FBQ2JDLDZCQUFTLFVBREk7QUFFYkMsMkJBQU87QUFGTSxtQkFBZjtBQWpESSxvREFxREcsS0FyREg7O0FBQUE7QUFBQTtBQUFBLHlCQXVEYSxjQUFJUyxJQUFKLENBQVM7QUFDMUJ2QiwyQkFBTyxLQUFLQSxLQURjO0FBRTFCRywwQkFBTSxLQUFLQTtBQUZlLG1CQUFULENBdkRiOztBQUFBO0FBdURBSixzQkF2REE7O0FBMkROMEIsMEJBQVFDLEdBQVIsQ0FBWTNCLElBQVo7O0FBM0RNLHNCQTRERkEsS0FBS2lCLE1BNURIO0FBQUE7QUFBQTtBQUFBOztBQTZESixpQ0FBS0osU0FBTCxDQUFlO0FBQ2JFLDJCQUFPLElBRE07QUFFYkQsNkJBQVNkLEtBQUs0QjtBQUZELG1CQUFmO0FBN0RJLG9EQWlFRyxLQWpFSDs7QUFBQTs7QUFvRU4sc0JBQUc1QixLQUFLNkIsS0FBUixFQUFjO0FBQ1osbUNBQUtKLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNEIsV0FBU0ksS0FBckM7QUFDQSxvQ0FBS1gsVUFBVTtBQUNiSCw2QkFBTTtBQURPLHFCQUFWLENBQUw7QUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQWlGVmUsTSxHQUFTLEU7Ozs7OzZCQUlBLENBRVI7Ozs7RUFuRytCLGVBQUtDLEk7O2tCQUFsQmxDLEkiLCJmaWxlIjoiYmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgV3hWYWxpZGF0ZSBmcm9tICcuLi8uLi91dGlscy9XeFZhbGlkYXRlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uR5a6a5omL5py65Y+3J1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICB0ZXh0Oifojrflj5bpqozor4HnoIEnLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIGNvZGU6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZGVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgLy8g6aqM6K+B56CBXHJcbiAgICAgIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICAgICAgaWYoISgvXjFbMzQ1Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5zbXMoe1xyXG4gICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHlt7Llj5HpgIEnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICc2MHPlkI7ojrflj5YnXHJcbiAgICAgICAgICBsZXQgc2Vjb25kID0gNjBcclxuICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHNlY29uZCA9IHNlY29uZCAtIDFcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gYCR7c2Vjb25kfXPlkI7ojrflj5ZgXHJcbiAgICAgICAgICAgIGlmKHNlY29uZD09MCl7XHJcbiAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ+iOt+WPlumqjOivgeeggSdcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOe7keWumlxyXG4gICAgICBhc3luYyBiaW5kKCkge1xyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywnR0YzSElNQUxDWkVwTDd6ZGV4ZXFhdklMb1FOVW1kS2gnKTtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb2RlKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeefreS/oemqjOivgeeggScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iaW5kKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgY29kZTogdGhpcy5jb2RlXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBpZighZGF0YS5zdGF0dXMpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhLnRva2VuKXtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywnQmVhcmVyJyt0b2tlbilcclxuICAgICAgICAgIHdlcHksc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6J+eZu+W9leaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKDApe1xyXG4gICAgICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==