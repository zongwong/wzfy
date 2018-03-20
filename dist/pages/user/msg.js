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

var Msg = function (_wepy$page) {
  _inherits(Msg, _wepy$page);

  function Msg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Msg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Msg.__proto__ || Object.getPrototypeOf(Msg)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的消息'
    }, _this.mixins = [_pagination2.default], _this.data = {
      list: [],
      page: {
        list: []
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Msg, [{
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
                return _api2.default.msg();

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

  return Msg;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Msg , 'pages/user/msg'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZy5qcyJdLCJuYW1lcyI6WyJNc2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWl4aW5zIiwiZGF0YSIsImxpc3QiLCJwYWdlIiwibWV0aG9kcyIsIm1zZyIsIm5leHQiLCIkYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLE0sR0FBUyxzQixRQUNUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLFlBQU07QUFDSkQsY0FBTTtBQURGO0FBRkQsSyxRQVVQRSxPLEdBQVUsRTs7Ozs7d0NBSVMsQ0FBRTs7Ozs7Ozs7Ozt1QkFFRCxjQUFJQyxHQUFKLEU7OztBQUFsQixxQkFBS0YsSTs7dUJBQ0MsS0FBS0csSUFBTCxFOzs7QUFDTixxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZCNkIsZUFBS0osSTs7a0JBQWpCTixHIiwiZmlsZSI6Im1zZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgcGFnaW5hdGlvbiBmcm9tICcuLi8uLi9taXhpbi9wYWdpbmF0aW9uJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmtojmga8nXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbIHBhZ2luYXRpb24gXVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbGlzdDpbXSxcclxuICAgICAgcGFnZToge1xyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IGF3YWl0IGFwaS5tc2coKVxyXG4gICAgICBhd2FpdCB0aGlzLm5leHQoKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=