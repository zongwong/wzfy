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
      member_id: '',
      ajax: false
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
                  console.log(this.member_id);
                  this.ajax = true;
                  _context2.next = 13;
                  return _api2.default.register(this.member_id, {
                    phone: this.phone,
                    code: this.code,
                    real_name: this.name,
                    sex: this.sex
                  });

                case 13:
                  data = _context2.sent;

                  console.log(data);

                  if (!(typeof data.status != 'undefined' && !data.status)) {
                    _context2.next = 20;
                    break;
                  }

                  // wepy.setStorageSync('token',data.token)
                  // wepy.setStorageSync('user',data.member)
                  this.ajax = false;
                  this.$apply();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 20:

                  _wepy2.default.showToast({
                    title: '注册成功'
                  });
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '/pages/index/bind'
                    });
                  }, 600);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbIlNoYXJlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG9uZSIsInRleHQiLCJkaXNhYmxlZCIsImNvZGUiLCJzZXgiLCJtZW1iZXJfaWQiLCJhamF4IiwibWV0aG9kcyIsInNleFNlbGVjdCIsInBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb2RlSW5wdXQiLCJuYW1lSW5wdXQiLCJuYW1lIiwiZ2V0Q29kZSIsInRlc3QiLCJzaG93TW9kYWwiLCJjb250ZW50IiwidGl0bGUiLCJzbXMiLCJzdGF0dXMiLCJzaG93VG9hc3QiLCJzZWNvbmQiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIiRhcHBseSIsIm1lc3NhZ2UiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIiwicmVhbF9uYW1lIiwic2V0VGltZW91dCIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsIm9wdGlvbnMiLCJpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxFQUREO0FBRUxDLFlBQUssT0FGQTtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxXQUFJLEtBTEM7QUFNTEMsaUJBQVUsRUFOTDtBQU9MQyxZQUFLO0FBUEEsSyxRQVVQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUosR0FERixFQUNPO0FBQ2IsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0QsT0FITztBQUlSSyxnQkFKUSxzQkFJR0MsQ0FKSCxFQUlNO0FBQ1osYUFBS1YsS0FBTCxHQUFhVSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SQyxlQVBRLHFCQU9FSCxD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QUt1QixNQW5GdkM7QUFBQTtBQUFBO0FBQUE7O0FBb0ZKO0FBQ0E7QUFDQSx1QkFBS2hCLElBQUwsR0FBWSxLQUFaO0FBQ0EsdUJBQUtzQixNQUFMO0FBQ0EsaUNBQUtWLFNBQUwsQ0FBZTtBQUNiRSwyQkFBTyxJQURNO0FBRWJELDZCQUFTcEIsS0FBSzhCO0FBRkQsbUJBQWY7QUF4Rkksb0RBNEZHLEtBNUZIOztBQUFBOztBQStGTixpQ0FBS04sU0FBTCxDQUFlO0FBQ2JILDJCQUFNO0FBRE8sbUJBQWY7QUFHQWUsNkJBQVcsWUFBTTtBQUNmQyx1QkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLDJCQUFLO0FBREsscUJBQWQ7QUFHRCxtQkFKRCxFQUlHLEdBSkg7O0FBbEdNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7d0NBMEdTLENBQUU7OzsyQkFDZEMsTyxFQUFTO0FBQ2QsV0FBS2xDLFNBQUwsR0FBaUJrQyxRQUFRQyxFQUF6QjtBQUNBVCxjQUFRQyxHQUFSLENBQVksS0FBSzNCLFNBQWpCO0FBQ0Q7Ozs7RUE3SGdDLGVBQUtvQyxJOztrQkFBbkI3QyxLIiwiZmlsZSI6InNoYXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKoOWFpeaIkeS7rCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgdGV4dDon6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICBtZW1iZXJfaWQ6JycsXHJcbiAgICAgIGFqYXg6ZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZGVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpqozor4HnoIFcclxuICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnNtcyh7XHJcbiAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMpe1xyXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+mqjOivgeeggeW3suWPkemAgSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJzYwc+WQjuiOt+WPlidcclxuICAgICAgICAgIGxldCBzZWNvbmQgPSA2MFxyXG4gICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgc2Vjb25kID0gc2Vjb25kIC0gMVxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBgJHtzZWNvbmR9c+WQjuiOt+WPlmBcclxuICAgICAgICAgICAgaWYoc2Vjb25kPT0wKXtcclxuICAgICAgICAgICAgICB0aGlzLnRleHQgPSAn6I635Y+W6aqM6K+B56CBJ1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOe7keWumlxyXG4gICAgICBhc3luYyBiaW5kKCkge1xyXG4gICAgICAgIGlmKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb2RlKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeefreS/oemqjOivgeeggScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7floavlhpnnnJ/lrp7lp5PlkI0nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVtYmVyX2lkKVxyXG4gICAgICAgIHRoaXMuYWpheCA9IHRydWVcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnJlZ2lzdGVyKHRoaXMubWVtYmVyX2lkLHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgcmVhbF9uYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleFxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVvZiBkYXRhLnN0YXR1cyAhPSd1bmRlZmluZWQnICYmICFkYXRhLnN0YXR1cyl7XHJcbiAgICAgICAgICAvLyB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsZGF0YS50b2tlbilcclxuICAgICAgICAgIC8vIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXInLGRhdGEubWVtYmVyKVxyXG4gICAgICAgICAgdGhpcy5hamF4ID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTon5rOo5YaM5oiQ5YqfJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvYmluZCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMubWVtYmVyX2lkID0gb3B0aW9ucy5pZFxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lbWJlcl9pZClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==