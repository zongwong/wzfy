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

var FinancialForm = function (_wepy$page) {
  _inherits(FinancialForm, _wepy$page);

  function FinancialForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FinancialForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FinancialForm.__proto__ || Object.getPrototypeOf(FinancialForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '金融服务'
    }, _this.data = {
      name: '',
      phone: '',
      sex: 'men',
      type: 'finance',
      content: '',
      money: '',
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
      moneyInput: function moneyInput(e) {
        this.money = e.detail.value;
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
                    quota: this.money,
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

  _createClass(FinancialForm, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return FinancialForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FinancialForm , 'pages/financial/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRmluYW5jaWFsRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJtb25leSIsImlzQWpheCIsIm1ldGhvZHMiLCJuYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwaG9uZUlucHV0Iiwic2V4U2VsZWN0IiwibW9uZXlJbnB1dCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwidGVzdCIsInJlcGxhY2UiLCIkYXBwbHkiLCJyZXBvcnRzIiwicXVvdGEiLCJzdGF0dXMiLCJyZXQiLCJjb25maXJtIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssU0FKQTtBQUtMQyxlQUFRLEVBTEg7QUFNTEMsYUFBTSxFQU5EO0FBT0xDLGNBQU87QUFQRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0s7QUFDWCxhQUFLVCxJQUFMLEdBQVlTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQUhPO0FBSVJDLGdCQUpRLHNCQUlHSCxDQUpILEVBSU07QUFDWixhQUFLUixLQUFMLEdBQWFRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQU5PO0FBT1JFLGVBUFEscUJBT0VYLEdBUEYsRUFPTztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNELE9BVE87QUFVUlksZ0JBVlEsc0JBVUdMLENBVkgsRUFVTTtBQUNaLGFBQUtKLEtBQUwsR0FBYUksRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BWk87QUFhUkksa0JBYlEsd0JBYUtOLENBYkwsRUFhUTtBQUNkLGFBQUtMLE9BQUwsR0FBZUssRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNELE9BZk87QUFnQkZLLFlBaEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaUJGLEtBQUtoQixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtpQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JlLElBQXBCLENBQXlCLEtBQUtsQixLQUFMLENBQVdtQixPQUFYLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBQXpCLENBeEJDO0FBQUE7QUFBQTtBQUFBOztBQXlCSixpQ0FBS0gsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVE7QUFGSyxtQkFBZjtBQXpCSSxtREE2QkcsS0E3Qkg7O0FBQUE7QUFBQSx1QkE4Q0gsS0FBS0UsTUE5Q0Y7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbURBK0NHLEtBL0NIOztBQUFBO0FBaUROLHVCQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNBLHVCQUFLZSxNQUFMO0FBbERNO0FBQUEseUJBbURhLGNBQUlDLE9BQUosQ0FBWTtBQUM3QnRCLDBCQUFLLEtBQUtBLElBRG1CO0FBRTdCQywyQkFBTSxLQUFLQSxLQUFMLENBQVdtQixPQUFYLENBQW1CLElBQW5CLEVBQXdCLEVBQXhCLENBRnVCO0FBRzdCbEIseUJBQUksS0FBS0EsR0FIb0I7QUFJN0JDLDBCQUFLLEtBQUtBLElBSm1CO0FBSzdCb0IsMkJBQU0sS0FBS2xCLEtBTGtCO0FBTTdCRCw2QkFBUSxLQUFLQTtBQU5nQixtQkFBWixDQW5EYjs7QUFBQTtBQW1EQUwsc0JBbkRBOztBQUFBLHdCQTJESCxPQUFPQSxLQUFLeUIsTUFBWixJQUFzQixXQTNEbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkE0RGMsZUFBS1AsU0FBTCxDQUFlO0FBQy9CQywyQkFBTSxJQUR5QjtBQUUvQmQsNkJBQVE7QUFGdUIsbUJBQWYsQ0E1RGQ7O0FBQUE7QUE0REVxQixxQkE1REY7O0FBZ0VKLHNCQUFHQSxJQUFJQyxPQUFQLEVBQWU7QUFDYkMsdUJBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsNkJBQU87QUFETyxxQkFBaEI7QUFHRCxtQkFKRCxNQUlLO0FBQ0gseUJBQUt2QixNQUFMLEdBQWMsS0FBZDtBQUNBLHlCQUFLZSxNQUFMO0FBQ0Q7QUF2RUc7QUFBQTs7QUFBQTtBQXlFSixpQ0FBS0osU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVFMLEtBQUsrQjtBQUZBLG1CQUFmO0FBSUEsdUJBQUt4QixNQUFMLEdBQWMsS0FBZDtBQUNBLHVCQUFLZSxNQUFMOztBQTlFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQW1GUyxDQUFFOzs7O0VBbEdvQixlQUFLVSxJOztrQkFBM0JuQyxhIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluYW5jaWFsRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfph5Hono3mnI3liqEnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonZmluYW5jZScsXHJcbiAgICAgIGNvbnRlbnQ6JycsXHJcbiAgICAgIG1vbmV5OicnLFxyXG4gICAgICBpc0FqYXg6ZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbmV5SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubW9uZXkgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5aeT5ZCNJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZS5yZXBsYWNlKC8tL2csJycpKSkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+3J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZighdGhpcy5tb25leSl7XHJcbiAgICAgICAgLy8gICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgIC8vICAgICBjb250ZW50Oifor7floavlgJ/mrL7pop3luqYnXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKCF0aGlzLmNvbnRlbnQpe1xyXG4gICAgICAgIC8vICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIC8vICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAvLyAgICAgY29udGVudDon6K+35aGr5YaZ5YW25LuW6ZyA5rGCJ1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmlzQWpheCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0FqYXggPSB0cnVlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUucmVwbGFjZSgvLS9nLCcnKSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgcXVvdGE6dGhpcy5tb25leSxcclxuICAgICAgICAgIGNvbnRlbnQ6dGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuc3RhdHVzID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+aOqOiNkOaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZihyZXQuY29uZmlybSl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlzQWpheCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5pc0FqYXggPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gIH1cclxuIl19