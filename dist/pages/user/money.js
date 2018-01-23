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

var Money = function (_wepy$page) {
  _inherits(Money, _wepy$page);

  function Money() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Money);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Money.__proto__ || Object.getPrototypeOf(Money)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的佣金'
    }, _this.data = {
      user: '',
      money: '',
      name: '',
      bank: '请选择银行',
      card: '',
      bankname: '',
      banks: []
    }, _this.methods = {
      allGet: function allGet() {
        this.money = this.user.balance;
      },
      moneyInput: function moneyInput(e) {
        this.money = e.detail.value;
      },
      nameInput: function nameInput(e) {
        this.name = e.detail.value;
      },
      bankInput: function bankInput(e) {
        this.bank = this.banks[e.detail.value];
      },
      cardInput: function cardInput(e) {
        this.card = e.detail.value;
      },
      banknameInput: function banknameInput(e) {
        this.bankname = e.detail.value;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.money || this.money <= 0)) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请输入提现金额'
                  });
                  return _context.abrupt('return', false);

                case 3:
                  if (this.name) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请输入提现人姓名'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  if (!(this.bank == '请选择银行')) {
                    _context.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请选择银行'
                  });
                  return _context.abrupt('return', false);

                case 9:
                  if (this.card) {
                    _context.next = 12;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请输入银行卡号'
                  });
                  return _context.abrupt('return', false);

                case 12:
                  if (this.bankname) {
                    _context.next = 15;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请输入开户行名称'
                  });
                  return _context.abrupt('return', false);

                case 15:
                  _context.next = 17;
                  return _api2.default.wallet({
                    // phone:this.phone,
                    balance: this.money,
                    bank: this.bank,
                    car_no: this.card,
                    cardholder: this.name,
                    open_bank: this.bankname
                  });

                case 17:
                  data = _context.sent;

                  if (!(!data.status && !data.code)) {
                    _context.next = 21;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  return _context.abrupt('return', false);

                case 21:
                  this.user.balance = this.user.balance - this.money;
                  this.$apply();
                  _context.next = 25;
                  return wx.setStorageSync('user', Object / String);

                case 25:
                  _context.next = 27;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '提现成功'
                  });

                case 27:
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

  _createClass(Money, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var user, banks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.getStorageSync('user');

              case 2:
                user = _context2.sent;
                _context2.next = 5;
                return _api2.default.banks();

              case 5:
                banks = _context2.sent;

                this.user = user;
                this.banks = banks[0].split('\r\n');
                this.$apply();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Money;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Money , 'pages/user/money'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmV5LmpzIl0sIm5hbWVzIjpbIk1vbmV5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VyIiwibW9uZXkiLCJuYW1lIiwiYmFuayIsImNhcmQiLCJiYW5rbmFtZSIsImJhbmtzIiwibWV0aG9kcyIsImFsbEdldCIsImJhbGFuY2UiLCJtb25leUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwiYmFua0lucHV0IiwiY2FyZElucHV0IiwiYmFua25hbWVJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIndhbGxldCIsImNhcl9ubyIsImNhcmRob2xkZXIiLCJvcGVuX2JhbmsiLCJzdGF0dXMiLCJjb2RlIiwibWVzc2FnZSIsIiRhcHBseSIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJPYmplY3QiLCJTdHJpbmciLCJnZXRTdG9yYWdlU3luYyIsInNwbGl0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLLEVBREE7QUFFTEMsYUFBTSxFQUZEO0FBR0xDLFlBQUssRUFIQTtBQUlMQyxZQUFLLE9BSkE7QUFLTEMsWUFBSyxFQUxBO0FBTUxDLGdCQUFTLEVBTko7QUFPTEMsYUFBTTtBQVBELEssUUFVUEMsTyxHQUFVO0FBQ1RDLFlBRFMsb0JBQ0E7QUFDUCxhQUFLUCxLQUFMLEdBQWEsS0FBS0QsSUFBTCxDQUFVUyxPQUF2QjtBQUNELE9BSFE7QUFJVEMsZ0JBSlMsc0JBSUVDLENBSkYsRUFJSztBQUNaLGFBQUtWLEtBQUwsR0FBYVUsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BTlE7QUFPVEMsZUFQUyxxQkFPQ0gsQ0FQRCxFQU9JO0FBQ1gsYUFBS1QsSUFBTCxHQUFZUyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FUUTtBQVVURSxlQVZTLHFCQVVDSixDQVZELEVBVUk7QUFDWCxhQUFLUixJQUFMLEdBQVksS0FBS0csS0FBTCxDQUFXSyxFQUFFQyxNQUFGLENBQVNDLEtBQXBCLENBQVo7QUFDRCxPQVpRO0FBYVRHLGVBYlMscUJBYUNMLENBYkQsRUFhSTtBQUNYLGFBQUtQLElBQUwsR0FBWU8sRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BZlE7QUFnQlRJLG1CQWhCUyx5QkFnQktOLENBaEJMLEVBZ0JRO0FBQ2YsYUFBS04sUUFBTCxHQUFnQk0sRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNELE9BbEJRO0FBbUJISyxZQW5CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW9CSixDQUFDLEtBQUtqQixLQUFOLElBQWUsS0FBS0EsS0FBTCxJQUFZLENBcEJ2QjtBQUFBO0FBQUE7QUFBQTs7QUFxQkwsaUNBQUtrQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViQyw2QkFBUTtBQUZLLG1CQUFmO0FBckJLLG1EQXlCRSxLQXpCRjs7QUFBQTtBQUFBLHNCQTJCSCxLQUFLbkIsSUEzQkY7QUFBQTtBQUFBO0FBQUE7O0FBNEJMLGlDQUFLaUIsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYkMsNkJBQVE7QUFGSyxtQkFBZjtBQTVCSyxtREFnQ0UsS0FoQ0Y7O0FBQUE7QUFBQSx3QkFrQ0osS0FBS2xCLElBQUwsSUFBVyxPQWxDUDtBQUFBO0FBQUE7QUFBQTs7QUFtQ0wsaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViQyw2QkFBUTtBQUZLLG1CQUFmO0FBbkNLLG1EQXVDRSxLQXZDRjs7QUFBQTtBQUFBLHNCQXlDSCxLQUFLakIsSUF6Q0Y7QUFBQTtBQUFBO0FBQUE7O0FBMENMLGlDQUFLZSxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViQyw2QkFBUTtBQUZLLG1CQUFmO0FBMUNLLG1EQThDRSxLQTlDRjs7QUFBQTtBQUFBLHNCQWdESCxLQUFLaEIsUUFoREY7QUFBQTtBQUFBO0FBQUE7O0FBaURMLGlDQUFLYyxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViQyw2QkFBUTtBQUZLLG1CQUFmO0FBakRLLG1EQXFERSxLQXJERjs7QUFBQTtBQUFBO0FBQUEseUJBdURZLGNBQUlDLE1BQUosQ0FBVztBQUMzQjtBQUNBYiw2QkFBUSxLQUFLUixLQUZjO0FBRzNCRSwwQkFBSyxLQUFLQSxJQUhpQjtBQUkzQm9CLDRCQUFPLEtBQUtuQixJQUplO0FBSzNCb0IsZ0NBQVcsS0FBS3RCLElBTFc7QUFNM0J1QiwrQkFBVSxLQUFLcEI7QUFOWSxtQkFBWCxDQXZEWjs7QUFBQTtBQXVERE4sc0JBdkRDOztBQUFBLHdCQStESixDQUFDQSxLQUFLMkIsTUFBTixJQUFnQixDQUFDM0IsS0FBSzRCLElBL0RsQjtBQUFBO0FBQUE7QUFBQTs7QUFnRUosaUNBQUtSLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJDLDZCQUFRdEIsS0FBSzZCO0FBRkEsbUJBQWY7QUFoRUksbURBb0VHLEtBcEVIOztBQUFBO0FBc0VOLHVCQUFLNUIsSUFBTCxDQUFVUyxPQUFWLEdBQW9CLEtBQUtULElBQUwsQ0FBVVMsT0FBVixHQUFvQixLQUFLUixLQUE3QztBQUNBLHVCQUFLNEIsTUFBTDtBQXZFTTtBQUFBLHlCQXdFQUMsR0FBR0MsY0FBSCxDQUFrQixNQUFsQixFQUEwQkMsU0FBT0MsTUFBakMsQ0F4RUE7O0FBQUE7QUFBQTtBQUFBLHlCQXlFQSxlQUFLZCxTQUFMLENBQWU7QUFDbkJDLDJCQUFNLElBRGE7QUFFbkJDLDZCQUFRO0FBRlcsbUJBQWYsQ0F6RUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7Ozs7Ozs7O3VCQW1GVyxlQUFLYSxjQUFMLENBQW9CLE1BQXBCLEM7OztBQUFibEMsb0I7O3VCQUNjLGNBQUlNLEtBQUosRTs7O0FBQWRBLHFCOztBQUNOLHFCQUFLTixJQUFMLEdBQVlBLElBQVo7QUFDQSxxQkFBS00sS0FBTCxHQUFhQSxNQUFNLENBQU4sRUFBUzZCLEtBQVQsQ0FBZSxNQUFmLENBQWI7QUFDQSxxQkFBS04sTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRHK0IsZUFBS08sSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJtb25leS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb25leSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkvaPph5EnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXNlcjonJyxcclxuICAgICAgbW9uZXk6JycsXHJcbiAgICAgIG5hbWU6JycsXHJcbiAgICAgIGJhbms6J+ivt+mAieaLqemTtuihjCcsXHJcbiAgICAgIGNhcmQ6JycsXHJcbiAgICAgIGJhbmtuYW1lOicnLFxyXG4gICAgICBiYW5rczpbXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgYWxsR2V0KCkge1xyXG4gICAgICAgdGhpcy5tb25leSA9IHRoaXMudXNlci5iYWxhbmNlXHJcbiAgICAgfSxcclxuICAgICBtb25leUlucHV0KGUpIHtcclxuICAgICAgIHRoaXMubW9uZXkgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgIH0sXHJcbiAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgfSxcclxuICAgICBiYW5rSW5wdXQoZSkge1xyXG4gICAgICAgdGhpcy5iYW5rID0gdGhpcy5iYW5rc1tlLmRldGFpbC52YWx1ZV1cclxuICAgICB9LFxyXG4gICAgIGNhcmRJbnB1dChlKSB7XHJcbiAgICAgICB0aGlzLmNhcmQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgIH0sXHJcbiAgICAgYmFua25hbWVJbnB1dChlKSB7XHJcbiAgICAgICB0aGlzLmJhbmtuYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICB9LFxyXG4gICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgIGlmKCF0aGlzLm1vbmV5IHx8IHRoaXMubW9uZXk8PTAgKXtcclxuICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+ivt+i+k+WFpeaPkOeOsOmHkeminSdcclxuICAgICAgICAgfSlcclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICBpZighdGhpcy5uYW1lKXtcclxuICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+ivt+i+k+WFpeaPkOeOsOS6uuWnk+WQjSdcclxuICAgICAgICAgfSlcclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICBpZih0aGlzLmJhbms9PSfor7fpgInmi6npk7booYwnKXtcclxuICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+ivt+mAieaLqemTtuihjCdcclxuICAgICAgICAgfSlcclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICBpZighdGhpcy5jYXJkKXtcclxuICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+ivt+i+k+WFpemTtuihjOWNoeWPtydcclxuICAgICAgICAgfSlcclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICBpZighdGhpcy5iYW5rbmFtZSl7XHJcbiAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICBjb250ZW50Oifor7fovpPlhaXlvIDmiLfooYzlkI3np7AnXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgfVxyXG4gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS53YWxsZXQoe1xyXG4gICAgICAgICAgLy8gcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIGJhbGFuY2U6dGhpcy5tb25leSxcclxuICAgICAgICAgIGJhbms6dGhpcy5iYW5rLFxyXG4gICAgICAgICAgY2FyX25vOnRoaXMuY2FyZCxcclxuICAgICAgICAgIGNhcmRob2xkZXI6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgb3Blbl9iYW5rOnRoaXMuYmFua25hbWUsXHJcbiAgICAgICB9KVxyXG4gICAgICAgaWYoIWRhdGEuc3RhdHVzICYmICFkYXRhLmNvZGUgKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VyLmJhbGFuY2UgPSB0aGlzLnVzZXIuYmFsYW5jZSAtIHRoaXMubW9uZXlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgYXdhaXQgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXInLCBPYmplY3QvU3RyaW5nKVxyXG4gICAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDon5o+Q546w5oiQ5YqfJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpXHJcbiAgICAgIGNvbnN0IGJhbmtzID0gYXdhaXQgYXBpLmJhbmtzKClcclxuICAgICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgICB0aGlzLmJhbmtzID0gYmFua3NbMF0uc3BsaXQoJ1xcclxcbicpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=