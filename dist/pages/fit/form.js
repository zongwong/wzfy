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

var FitForm = function (_wepy$page) {
  _inherits(FitForm, _wepy$page);

  function FitForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FitForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FitForm.__proto__ || Object.getPrototypeOf(FitForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '装修推荐'
    }, _this.data = {
      name: '',
      phone: '',
      sex: 'men',
      type: 'decorate',
      content: '',
      need: '自住',
      isAjax: false
    }, _this.methods = {
      nameInput: function nameInput(e) {
        this.name = e.detail.value;
      },
      phoneInput: function phoneInput(e) {
        this.phone = e.detail.value;
      },
      sexSelect: function sexSelect(sex) {
        this.sex = sex;
      },
      needSelect: function needSelect(need) {
        this.need = need;
      },
      contentInput: function contentInput(e) {
        this.content = e.detail.value;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data, ret;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.name) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写姓名'
                  });
                  return _context.abrupt('return', false);

                case 3:
                  if (/^1[3456789]\d{9}$/.test(this.phone.replace(/-/g, ''))) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写正确的手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  if (!this.isAjax) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 8:
                  this.isAjax = true;
                  this.$apply();
                  _context.next = 12;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone.replace(/-/g, ''),
                    sex: this.sex,
                    type: this.type,
                    content: this.content
                  });

                case 12:
                  data = _context.sent;

                  if (!(typeof data.status == 'undefined')) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 16;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '推荐成功'
                  });

                case 16:
                  ret = _context.sent;

                  if (ret.confirm) {
                    wx.navigateBack({
                      delta: 1
                    });
                  } else {
                    this.isAjax = false;
                    this.$apply();
                  }
                  _context.next = 23;
                  break;

                case 20:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  this.isAjax = false;
                  this.$apply();

                case 23:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FitForm, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return FitForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FitForm , 'pages/fit/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRml0Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJuZWVkIiwiaXNBamF4IiwibWV0aG9kcyIsIm5hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJzZXhTZWxlY3QiLCJuZWVkU2VsZWN0IiwiY29udGVudElucHV0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJ0ZXN0IiwicmVwbGFjZSIsIiRhcHBseSIsInJlcG9ydHMiLCJzdGF0dXMiLCJyZXQiLCJjb25maXJtIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssVUFKQTtBQUtMQyxlQUFRLEVBTEg7QUFNTEMsWUFBSyxJQU5BO0FBT0xDLGNBQU87QUFQRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0s7QUFDWCxhQUFLVCxJQUFMLEdBQVlTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQUhPO0FBSVJDLGdCQUpRLHNCQUlHSCxDQUpILEVBSU07QUFDWixhQUFLUixLQUFMLEdBQWFRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQU5PO0FBT1JFLGVBUFEscUJBT0VYLEdBUEYsRUFPTztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNELE9BVE87QUFVUlksZ0JBVlEsc0JBVUdULElBVkgsRUFVUztBQUNmLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNELE9BWk87QUFhUlUsa0JBYlEsd0JBYUtOLENBYkwsRUFhUTtBQUNkLGFBQUtMLE9BQUwsR0FBZUssRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNELE9BZk87QUFnQkZLLFlBaEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaUJGLEtBQUtoQixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtpQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JlLElBQXBCLENBQXlCLEtBQUtsQixLQUFMLENBQVdtQixPQUFYLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBQXpCLENBeEJDO0FBQUE7QUFBQTtBQUFBOztBQXlCSixpQ0FBS0gsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVE7QUFGSyxtQkFBZjtBQXpCSSxtREE2QkcsS0E3Qkg7O0FBQUE7QUFBQSx1QkFzQ0gsS0FBS0UsTUF0Q0Y7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbURBdUNHLEtBdkNIOztBQUFBO0FBeUNOLHVCQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNBLHVCQUFLZSxNQUFMO0FBMUNNO0FBQUEseUJBMkNhLGNBQUlDLE9BQUosQ0FBWTtBQUM3QnRCLDBCQUFLLEtBQUtBLElBRG1CO0FBRTdCQywyQkFBTSxLQUFLQSxLQUFMLENBQVdtQixPQUFYLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBRnVCO0FBRzdCbEIseUJBQUksS0FBS0EsR0FIb0I7QUFJN0JDLDBCQUFLLEtBQUtBLElBSm1CO0FBSzdCQyw2QkFBUSxLQUFLQTtBQUxnQixtQkFBWixDQTNDYjs7QUFBQTtBQTJDQUwsc0JBM0NBOztBQUFBLHdCQWtESCxPQUFPQSxLQUFLd0IsTUFBWixJQUFzQixXQWxEbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFtRGMsZUFBS04sU0FBTCxDQUFlO0FBQy9CQywyQkFBTSxJQUR5QjtBQUUvQmQsNkJBQVE7QUFGdUIsbUJBQWYsQ0FuRGQ7O0FBQUE7QUFtREVvQixxQkFuREY7O0FBdURKLHNCQUFHQSxJQUFJQyxPQUFQLEVBQWU7QUFDYkMsdUJBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsNkJBQU87QUFETyxxQkFBaEI7QUFHRCxtQkFKRCxNQUlLO0FBQ0gseUJBQUt0QixNQUFMLEdBQWMsS0FBZDtBQUNBLHlCQUFLZSxNQUFMO0FBQ0Q7QUE5REc7QUFBQTs7QUFBQTtBQWdFSixpQ0FBS0osU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVFMLEtBQUs4QjtBQUZBLG1CQUFmO0FBSUEsdUJBQUt2QixNQUFMLEdBQWMsS0FBZDtBQUNBLHVCQUFLZSxNQUFMOztBQXJFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQURTLENBQUU7Ozs7RUFkYyxlQUFLUyxJOztrQkFBckJsQyxPIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0Rm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoo4Xkv67mjqjojZAnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonZGVjb3JhdGUnLFxyXG4gICAgICBjb250ZW50OicnLFxyXG4gICAgICBuZWVkOifoh6rkvY8nLFxyXG4gICAgICBpc0FqYXg6ZmFsc2UsXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBuZWVkU2VsZWN0KG5lZWQpIHtcclxuICAgICAgICB0aGlzLm5lZWQgPSBuZWVkXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJykpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnmraPnoa7nmoTmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKCF0aGlzLmNvbnRlbnQpe1xyXG4gICAgICAgIC8vICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIC8vICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAvLyAgICAgY29udGVudDon6K+35aGr5YaZ5YW25LuW6ZyA5rGCJ1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLmlzQWpheCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0FqYXggPSB0cnVlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUucmVwbGFjZSgvLS9nLCcnKSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgY29udGVudDp0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5zdGF0dXMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon5o6o6I2Q5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmKHJldC5jb25maXJtKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBamF4ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDpkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmlzQWpheCA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=