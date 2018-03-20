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
      money: ''
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
                  if (/^1[3456789]\d{9}$/.test(this.phone)) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写正确的手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  _context.next = 8;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: this.type,
                    quota: this.money,
                    content: this.content
                  });

                case 8:
                  data = _context.sent;

                  if (!(typeof data.status == 'undefined')) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 12;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '推荐成功'
                  });

                case 12:
                  ret = _context.sent;

                  if (ret.confirm) {
                    wx.navigateBack({
                      delta: 1
                    });
                  }
                  _context.next = 17;
                  break;

                case 16:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });

                case 17:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRmluYW5jaWFsRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJtb25leSIsIm1ldGhvZHMiLCJuYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwaG9uZUlucHV0Iiwic2V4U2VsZWN0IiwibW9uZXlJbnB1dCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwidGVzdCIsInJlcG9ydHMiLCJxdW90YSIsInN0YXR1cyIsInJldCIsImNvbmZpcm0iLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxTQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxhQUFNO0FBTkQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1IsSUFBTCxHQUFZUSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJXLGdCQVZRLHNCQVVHTCxDQVZILEVBVU07QUFDWixhQUFLSCxLQUFMLEdBQWFHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVpPO0FBYVJJLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JGSyxZQWhCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWlCRixLQUFLZixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViYiw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JjLElBQXBCLENBQXlCLEtBQUtqQixLQUE5QixDQXhCQztBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtlLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJiLDZCQUFRO0FBRkssbUJBQWY7QUF6QkksbURBNkJHLEtBN0JIOztBQUFBO0FBQUE7QUFBQSx5QkE2Q2EsY0FBSWUsT0FBSixDQUFZO0FBQzdCbkIsMEJBQUssS0FBS0EsSUFEbUI7QUFFN0JDLDJCQUFNLEtBQUtBLEtBRmtCO0FBRzdCQyx5QkFBSSxLQUFLQSxHQUhvQjtBQUk3QkMsMEJBQUssS0FBS0EsSUFKbUI7QUFLN0JpQiwyQkFBTSxLQUFLZixLQUxrQjtBQU03QkQsNkJBQVEsS0FBS0E7QUFOZ0IsbUJBQVosQ0E3Q2I7O0FBQUE7QUE2Q0FMLHNCQTdDQTs7QUFBQSx3QkFxREgsT0FBT0EsS0FBS3NCLE1BQVosSUFBc0IsV0FyRG5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBc0RjLGVBQUtMLFNBQUwsQ0FBZTtBQUMvQkMsMkJBQU0sSUFEeUI7QUFFL0JiLDZCQUFRO0FBRnVCLG1CQUFmLENBdERkOztBQUFBO0FBc0RFa0IscUJBdERGOztBQTBESixzQkFBR0EsSUFBSUMsT0FBUCxFQUFlO0FBQ2JDLHVCQUFHQyxZQUFILENBQWdCO0FBQ2RDLDZCQUFPO0FBRE8scUJBQWhCO0FBR0Q7QUE5REc7QUFBQTs7QUFBQTtBQWdFSixpQ0FBS1YsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmIsNkJBQVFMLEtBQUs0QjtBQUZBLG1CQUFmOztBQWhFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQXdFUyxDQUFFOzs7O0VBdEZvQixlQUFLQyxJOztrQkFBM0JoQyxhIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluYW5jaWFsRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfph5Hono3mnI3liqEnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonZmluYW5jZScsXHJcbiAgICAgIGNvbnRlbnQ6JycsXHJcbiAgICAgIG1vbmV5OicnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbmV5SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubW9uZXkgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5aeT5ZCNJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoIXRoaXMubW9uZXkpe1xyXG4gICAgICAgIC8vICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIC8vICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAvLyAgICAgY29udGVudDon6K+35aGr5YCf5qy+6aKd5bqmJ1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZighdGhpcy5jb250ZW50KXtcclxuICAgICAgICAvLyAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAvLyAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWFtuS7lumcgOaxgidcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gICByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgcXVvdGE6dGhpcy5tb25leSxcclxuICAgICAgICAgIGNvbnRlbnQ6dGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuc3RhdHVzID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+aOqOiNkOaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZihyZXQuY29uZmlybSl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gIH1cclxuIl19