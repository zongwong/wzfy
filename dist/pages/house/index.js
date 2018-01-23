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

var Houseindex = function (_wepy$page) {
  _inherits(Houseindex, _wepy$page);

  function Houseindex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Houseindex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Houseindex.__proto__ || Object.getPrototypeOf(Houseindex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '二手房'
    }, _this.data = {
      list: null
    }, _this.methods = {
      toDetail: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  item = this.list.filter(function (item) {
                    return item.id == id;
                  });

                  console.log(item[0]);
                  _context.next = 4;
                  return _wepy2.default.setStorageSync('detail', item[0]);

                case 4:
                  _wepy2.default.navigateTo({
                    url: '/pages/house/detail'
                  });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function toDetail(_x) {
          return _ref2.apply(this, arguments);
        }

        return toDetail;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Houseindex, [{
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.removeStorageSync('detail');

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.removeStorageSync('detail');

              case 2:
                _context3.next = 4;
                return _api2.default.house();

              case 4:
                data = _context3.sent;

                this.list = data.data;
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad() {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Houseindex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Houseindex , 'pages/house/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvdXNlaW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJpZCIsIml0ZW0iLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJob3VzZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSztBQURBLEssUUFNUEMsTyxHQUFVO0FBQ0hDLGNBREc7QUFBQSw2RkFDTUMsRUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsc0JBRkEsR0FFTyxLQUFLSixJQUFMLENBQVVLLE1BQVYsQ0FBaUIsVUFBQ0QsSUFBRCxFQUFRO0FBQ3BDLDJCQUFPQSxLQUFLRCxFQUFMLElBQVdBLEVBQWxCO0FBQ0QsbUJBRlksQ0FGUDs7QUFLTkcsMEJBQVFDLEdBQVIsQ0FBWUgsS0FBSyxDQUFMLENBQVo7QUFMTTtBQUFBLHlCQU1BLGVBQUtJLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEJKLEtBQUssQ0FBTCxDQUE5QixDQU5BOztBQUFBO0FBT04saUNBQUtLLFVBQUwsQ0FBZ0I7QUFDZEMseUJBQUk7QUFEVSxtQkFBaEI7O0FBUE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLLFFBYVZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7dUJBSUQsZUFBS0MsaUJBQUwsQ0FBdUIsUUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0EsZUFBS0EsaUJBQUwsQ0FBdUIsUUFBdkIsQzs7Ozt1QkFDYSxjQUFJQyxLQUFKLEU7OztBQUFiZCxvQjs7QUFDTixxQkFBS0MsSUFBTCxHQUFZRCxLQUFLQSxJQUFqQjtBQUNBLHFCQUFLZSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbENvQyxlQUFLQyxJOztrQkFBeEJuQixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXNlaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqM5omL5oi/J1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxpc3Q6bnVsbFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgYXN5bmMgdG9EZXRhaWwoaWQpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3QuZmlsdGVyKChpdGVtKT0+e1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gaWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1bMF0pXHJcbiAgICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlU3luYygnZGV0YWlsJywgaXRlbVswXSlcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOicvcGFnZXMvaG91c2UvZGV0YWlsJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBhc3luYyBvblNob3coKSB7XHJcbiAgICAgIGF3YWl0IHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ2RldGFpbCcpXHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ2RldGFpbCcpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuaG91c2UoKVxyXG4gICAgICB0aGlzLmxpc3QgPSBkYXRhLmRhdGFcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19