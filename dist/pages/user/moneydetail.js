'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

var _pagination = require('./../../mixin/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Moneydetail = function (_wepy$page) {
  _inherits(Moneydetail, _wepy$page);

  function Moneydetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Moneydetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Moneydetail.__proto__ || Object.getPrototypeOf(Moneydetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '佣金明细'
    }, _this.mixins = [_pagination2.default], _this.data = {
      list: null,
      page: {
        list: []
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Moneydetail, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.accounts();

              case 2:
                this.page = _context.sent;
                _context.next = 5;
                return this.next();

              case 5:
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Moneydetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Moneydetail , 'pages/user/moneydetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmV5ZGV0YWlsLmpzIl0sIm5hbWVzIjpbIk1vbmV5ZGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1peGlucyIsImRhdGEiLCJsaXN0IiwicGFnZSIsImFjY291bnRzIiwibmV4dCIsIiRhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsTSxHQUFTLHNCLFFBQ1RDLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsWUFBTTtBQUNKRCxjQUFNO0FBREY7QUFGRCxLOzs7Ozt3Q0FRWSxDQUFFOzs7Ozs7Ozs7O3VCQUVELGNBQUlFLFFBQUosRTs7O0FBQWxCLHFCQUFLRCxJOzt1QkFDQyxLQUFLRSxJQUFMLEU7OztBQUNOLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakJxQyxlQUFLSCxJOztrQkFBekJOLFciLCJmaWxlIjoibW9uZXlkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi4vLi4vbWl4aW4vcGFnaW5hdGlvbidcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb25leWRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvaPph5HmmI7nu4YnXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbIHBhZ2luYXRpb24gXVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbGlzdDpudWxsLFxyXG4gICAgICBwYWdlOiB7XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IGF3YWl0IGFwaS5hY2NvdW50cygpXHJcbiAgICAgIGF3YWl0IHRoaXMubmV4dCgpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==