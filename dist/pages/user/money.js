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
                  return _wepy2.default.setStorageSync('user', this.user);

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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var user, banks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getMemberInfo();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmV5LmpzIl0sIm5hbWVzIjpbIk1vbmV5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VyIiwibW9uZXkiLCJuYW1lIiwiYmFuayIsImNhcmQiLCJiYW5rbmFtZSIsImJhbmtzIiwibWV0aG9kcyIsImFsbEdldCIsImJhbGFuY2UiLCJtb25leUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwiYmFua0lucHV0IiwiY2FyZElucHV0IiwiYmFua25hbWVJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIndhbGxldCIsImNhcl9ubyIsImNhcmRob2xkZXIiLCJvcGVuX2JhbmsiLCJzdGF0dXMiLCJjb2RlIiwibWVzc2FnZSIsIiRhcHBseSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0TWVtYmVySW5mbyIsInNwbGl0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLLEVBREE7QUFFTEMsYUFBTSxFQUZEO0FBR0xDLFlBQUssRUFIQTtBQUlMQyxZQUFLLE9BSkE7QUFLTEMsWUFBSyxFQUxBO0FBTUxDLGdCQUFTLEVBTko7QUFPTEMsYUFBTTtBQVBELEssUUFVUEMsTyxHQUFVO0FBQ1RDLFlBRFMsb0JBQ0E7QUFDUCxhQUFLUCxLQUFMLEdBQWEsS0FBS0QsSUFBTCxDQUFVUyxPQUF2QjtBQUNELE9BSFE7QUFJVEMsZ0JBSlMsc0JBSUVDLENBSkYsRUFJSztBQUNaLGFBQUtWLEtBQUwsR0FBYVUsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNELE9BTlE7QUFPVEMsZUFQUyxxQkFPQ0gsQ0FQRCxFQU9JO0FBQ1gsYUFBS1QsSUFBTCxHQUFZUyxFQUFFQyxNQUFGLENBQVNDLEtB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QUFDTixxQkFBS04sSUFBTCxHQUFZQSxJQUFaO0FBQ0EscUJBQUtNLEtBQUwsR0FBYUEsTUFBTSxDQUFOLEVBQVMwQixLQUFULENBQWUsTUFBZixDQUFiO0FBQ0EscUJBQUtILE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0RytCLGVBQUtJLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5L2j6YeRJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVzZXI6JycsXHJcbiAgICAgIG1vbmV5OicnLFxyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBiYW5rOifor7fpgInmi6npk7booYwnLFxyXG4gICAgICBjYXJkOicnLFxyXG4gICAgICBiYW5rbmFtZTonJyxcclxuICAgICAgYmFua3M6W11cclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBhbGxHZXQoKSB7XHJcbiAgICAgICB0aGlzLm1vbmV5ID0gdGhpcy51c2VyLmJhbGFuY2VcclxuICAgICB9LFxyXG4gICAgIG1vbmV5SW5wdXQoZSkge1xyXG4gICAgICAgdGhpcy5tb25leSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgfSxcclxuICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICB9LFxyXG4gICAgIGJhbmtJbnB1dChlKSB7XHJcbiAgICAgICB0aGlzLmJhbmsgPSB0aGlzLmJhbmtzW2UuZGV0YWlsLnZhbHVlXVxyXG4gICAgIH0sXHJcbiAgICAgY2FyZElucHV0KGUpIHtcclxuICAgICAgIHRoaXMuY2FyZCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgfSxcclxuICAgICBiYW5rbmFtZUlucHV0KGUpIHtcclxuICAgICAgIHRoaXMuYmFua25hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgIH0sXHJcbiAgICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgaWYoIXRoaXMubW9uZXkgfHwgdGhpcy5tb25leTw9MCApe1xyXG4gICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgY29udGVudDon6K+36L6T5YWl5o+Q546w6YeR6aKdJ1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgIH1cclxuICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgY29udGVudDon6K+36L6T5YWl5o+Q546w5Lq65aeT5ZCNJ1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgIH1cclxuICAgICAgIGlmKHRoaXMuYmFuaz09J+ivt+mAieaLqemTtuihjCcpe1xyXG4gICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgY29udGVudDon6K+36YCJ5oup6ZO26KGMJ1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgIH1cclxuICAgICAgIGlmKCF0aGlzLmNhcmQpe1xyXG4gICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgY29udGVudDon6K+36L6T5YWl6ZO26KGM5Y2h5Y+3J1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgIH1cclxuICAgICAgIGlmKCF0aGlzLmJhbmtuYW1lKXtcclxuICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgIGNvbnRlbnQ6J+ivt+i+k+WFpeW8gOaIt+ihjOWQjeensCdcclxuICAgICAgICAgfSlcclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICB9XHJcbiAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLndhbGxldCh7XHJcbiAgICAgICAgICAvLyBwaG9uZTp0aGlzLnBob25lLFxyXG4gICAgICAgICAgYmFsYW5jZTp0aGlzLm1vbmV5LFxyXG4gICAgICAgICAgYmFuazp0aGlzLmJhbmssXHJcbiAgICAgICAgICBjYXJfbm86dGhpcy5jYXJkLFxyXG4gICAgICAgICAgY2FyZGhvbGRlcjp0aGlzLm5hbWUsXHJcbiAgICAgICAgICBvcGVuX2Jhbms6dGhpcy5iYW5rbmFtZSxcclxuICAgICAgIH0pXHJcbiAgICAgICBpZighZGF0YS5zdGF0dXMgJiYgIWRhdGEuY29kZSApe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDpkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgIH1cclxuICAgICAgICB0aGlzLnVzZXIuYmFsYW5jZSA9IHRoaXMudXNlci5iYWxhbmNlIC0gdGhpcy5tb25leVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1c2VyJywgdGhpcy51c2VyKVxyXG4gICAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDon5o+Q546w5oiQ5YqfJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmdldE1lbWJlckluZm8oKVxyXG4gICAgICBjb25zdCBiYW5rcyA9IGF3YWl0IGFwaS5iYW5rcygpXHJcbiAgICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgICAgdGhpcy5iYW5rcyA9IGJhbmtzWzBdLnNwbGl0KCdcXHJcXG4nKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=