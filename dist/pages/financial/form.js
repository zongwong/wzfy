'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      type: 'borrow-money',
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
          var data;
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
                  if (this.phone) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  if (this.money) {
                    _context.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填借款额度'
                  });
                  return _context.abrupt('return', false);

                case 9:
                  if (this.content) {
                    _context.next = 12;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写其他需求'
                  });
                  return _context.abrupt('return', false);

                case 12:
                  _context.next = 14;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: this.type,
                    quota: this.money,
                    content: this.content
                  });

                case 14:
                  data = _context.sent;

                  if (data) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '推荐成功'
                    });
                  }

                case 16:
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

  return FinancialForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FinancialForm , 'pages/financial/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRmluYW5jaWFsRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJtb25leSIsIm1ldGhvZHMiLCJuYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwaG9uZUlucHV0Iiwic2V4U2VsZWN0IiwibW9uZXlJbnB1dCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwicmVwb3J0cyIsInF1b3RhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxjQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxhQUFNO0FBTkQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1IsSUFBTCxHQUFZUSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJXLGdCQVZRLHNCQVVHTCxDQVZILEVBVU07QUFDWixhQUFLSCxLQUFMLEdBQWFHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVpPO0FBYVJJLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JGSyxZQWhCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWlCRixLQUFLZixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViYiw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRixLQUFLSCxLQXhCSDtBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtlLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJiLDZCQUFRO0FBRkssbUJBQWY7QUF6QkksbURBNkJHLEtBN0JIOztBQUFBO0FBQUEsc0JBK0JGLEtBQUtDLEtBL0JIO0FBQUE7QUFBQTtBQUFBOztBQWdDSixpQ0FBS1csU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmIsNkJBQVE7QUFGSyxtQkFBZjtBQWhDSSxtREFvQ0csS0FwQ0g7O0FBQUE7QUFBQSxzQkFzQ0YsS0FBS0EsT0F0Q0g7QUFBQTtBQUFBO0FBQUE7O0FBdUNKLGlDQUFLWSxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViYiw2QkFBUTtBQUZLLG1CQUFmO0FBdkNJLG1EQTJDRyxLQTNDSDs7QUFBQTtBQUFBO0FBQUEseUJBNkNhLGNBQUljLE9BQUosQ0FBWTtBQUM3QmxCLDBCQUFLLEtBQUtBLElBRG1CO0FBRTdCQywyQkFBTSxLQUFLQSxLQUZrQjtBQUc3QkMseUJBQUksS0FBS0EsR0FIb0I7QUFJN0JDLDBCQUFLLEtBQUtBLElBSm1CO0FBSzdCZ0IsMkJBQU0sS0FBS2QsS0FMa0I7QUFNN0JELDZCQUFRLEtBQUtBO0FBTmdCLG1CQUFaLENBN0NiOztBQUFBO0FBNkNBTCxzQkE3Q0E7O0FBcUROLHNCQUFHQSxJQUFILEVBQVE7QUFDTixtQ0FBS2lCLFNBQUwsQ0FBZTtBQUNiQyw2QkFBTSxJQURPO0FBRWJiLCtCQUFRO0FBRksscUJBQWY7QUFJRDs7QUExREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBZCtCLGVBQUtnQixJOztrQkFBM0J4QixhIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluYW5jaWFsRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfph5Hono3mnI3liqEnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonYm9ycm93LW1vbmV5JyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgbW9uZXk6JydcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgbW9uZXlJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5tb25leSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnBob25lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMubW9uZXkpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YCf5qy+6aKd5bqmJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb250ZW50KXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWFtuS7lumcgOaxgidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgcXVvdGE6dGhpcy5tb25leSxcclxuICAgICAgICAgIGNvbnRlbnQ6dGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OifmjqjojZDmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19