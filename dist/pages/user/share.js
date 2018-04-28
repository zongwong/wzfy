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
                    _wepy2.default.showToast({
                      title: '验证码已发送'
                    });

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
          var data;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (/^1[3456789]\d{9}$/.test(this.phone.replace(/-/g, ''))) {
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

                  if (!this.ajax) {
                    _context2.next = 12;
                    break;
                  }

                  return _context2.abrupt('return', false);

                case 12:
                  this.ajax = true;
                  this.$apply();
                  _context2.next = 16;
                  return _api2.default.register(this.member_id, {
                    phone: this.phone.replace(/-/g, ''),
                    code: this.code,
                    real_name: this.name,
                    sex: this.sex
                  });

                case 16:
                  data = _context2.sent;

                  console.log(data);

                  if (!(typeof data.status != 'undefined' && !data.status)) {
                    _context2.next = 23;
                    break;
                  }

                  this.ajax = false;
                  this.$apply();
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context2.abrupt('return', false);

                case 23:
                  _wepy2.default.setStorageSync('token', data.token);
                  _wepy2.default.setStorageSync('user', data.member);
                  _wepy2.default.showToast({
                    title: '注册成功'
                  });
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '/pages/user/agree'
                    });
                  }, 600);

                case 27:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbIlNoYXJlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwaG9uZSIsInRleHQiLCJkaXNhYmxlZCIsImNvZGUiLCJzZXgiLCJtZW1iZXJfaWQiLCJhamF4IiwibWV0aG9kcyIsInNleFNlbGVjdCIsInBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb2RlSW5wdXQiLCJuYW1lSW5wdXQiLCJuYW1lIiwiZ2V0Q29kZSIsInRlc3QiLCJyZXBsYWNlIiwic2hvd01vZGFsIiwiY29udGVudCIsInRpdGxlIiwiJGFwcGx5Iiwic21zIiwic3RhdHVzIiwic2hvd1RvYXN0Iiwic2Vjb25kIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtZXNzYWdlIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInJlYWxfbmFtZSIsInNldFN0b3JhZ2VTeW5jIiwidG9rZW4iLCJtZW1iZXIiLCJzZXRUaW1lb3V0Iiwid3giLCJyZWRpcmVjdFRvIiwidXJsIiwib3B0aW9ucyIsImlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFNLEVBREQ7QUFFTEMsWUFBSyxPQUZBO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLFdBQUksS0FMQztBQU1MQyxpQkFBVSxFQU5MO0FBT0xDLFlBQUs7QUFQQSxLLFFBVVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFSixHQURGLEVBQ087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQUhPO0FBSVJLLGdCQUpRLHNCQUlHQyxDQUpILEVBSU07QUFDWixhQUFLVixLQUFMLEdBQWFVLEVBQUVDLE1B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QUF6QjtBQUNBWixjQUFRQyxHQUFSLENBQVksS0FBSzVCLFNBQWpCO0FBQ0Q7Ozs7RUFySWdDLGVBQUt3QyxJOztrQkFBbkJqRCxLIiwiZmlsZSI6InNoYXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKoOWFpeaIkeS7rCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgdGV4dDon6I635Y+W6aqM6K+B56CBJyxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICBtZW1iZXJfaWQ6JycsXHJcbiAgICAgIGFqYXg6ZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZGVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpqozor4HnoIFcclxuICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJykpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuc21zKHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHlt7Llj5HpgIEnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnRleHQgPSAnNjBz5ZCO6I635Y+WJ1xyXG4gICAgICAgICAgbGV0IHNlY29uZCA9IDYwXHJcbiAgICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQgLSAxXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGAke3NlY29uZH1z5ZCO6I635Y+WYFxyXG4gICAgICAgICAgICBpZihzZWNvbmQ9PTApe1xyXG4gICAgICAgICAgICAgIHRoaXMudGV4dCA9ICfojrflj5bpqozor4HnoIEnXHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDnu5HlrppcclxuICAgICAgYXN5bmMgYmluZCgpIHtcclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZS5yZXBsYWNlKC8tL2csJycpKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3JyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb2RlKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeefreS/oemqjOivgeeggScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7floavlhpnnnJ/lrp7lp5PlkI0nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVtYmVyX2lkKVxyXG4gICAgICAgIGlmKHRoaXMuYWpheCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hamF4ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnJlZ2lzdGVyKHRoaXMubWVtYmVyX2lkLHtcclxuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJyksXHJcbiAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICByZWFsX25hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgc2V4OnRoaXMuc2V4XHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuc3RhdHVzICE9J3VuZGVmaW5lZCcgJiYgIWRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5hamF4ID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyxkYXRhLnRva2VuKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXInLGRhdGEubWVtYmVyKVxyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOifms6jlhozmiJDlip8nXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyL2FncmVlJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgNjAwKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5tZW1iZXJfaWQgPSBvcHRpb25zLmlkXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVtYmVyX2lkKVxyXG4gICAgfVxyXG4gIH1cclxuIl19