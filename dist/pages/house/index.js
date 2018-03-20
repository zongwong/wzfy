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
    }, _this.mixins = [_pagination2.default], _this.data = {
      list: null,
      page: {
        list: []
      }
    }, _this.methods = {
      toDetail: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  item = this.page.list.filter(function (item) {
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
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
                this.page = _context3.sent;

                // this.list = data.data
                this.$apply();
                _context3.next = 8;
                return this.next();

              case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhvdXNlaW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWl4aW5zIiwiZGF0YSIsImxpc3QiLCJwYWdlIiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiaG91c2UiLCIkYXBwbHkiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxNLEdBQVMsc0IsUUFDVEMsSSxHQUFPO0FBQ0xDLFlBQUssSUFEQTtBQUVMQyxZQUFNO0FBQ0pELGNBQU07QUFERjtBQUZELEssUUFVUEUsTyxHQUFVO0FBQ0hDLGNBREc7QUFBQSw2RkFDTUMsRUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsc0JBRkEsR0FFTyxLQUFLSixJQUFMLENBQVVELElBQVYsQ0FBZU0sTUFBZixDQUFzQixVQUFDRCxJQUFELEVBQVE7QUFDekMsMkJBQU9BLEtBQUtELEVBQUwsSUFBV0EsRUFBbEI7QUFDRCxtQkFGWSxDQUZQOztBQUtORywwQkFBUUMsR0FBUixDQUFZSCxLQUFLLENBQUwsQ0FBWjtBQUxNO0FBQUEseUJBTUEsZUFBS0ksY0FBTCxDQUFvQixRQUFwQixFQUE4QkosS0FBSyxDQUFMLENBQTlCLENBTkE7O0FBQUE7QUFPTixpQ0FBS0ssVUFBTCxDQUFnQjtBQUNkQyx5QkFBSTtBQURVLG1CQUFoQjs7QUFQTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUFhVkMsTSxHQUFTLEU7Ozs7O3dDQWZVLENBQUU7Ozs7Ozs7Ozs7dUJBbUJiLGVBQUtDLGlCQUFMLENBQXVCLFFBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0EsZUFBS0EsaUJBQUwsQ0FBdUIsUUFBdkIsQzs7Ozt1QkFDWSxjQUFJQyxLQUFKLEU7OztBQUFsQixxQkFBS2IsSTs7QUFDTDtBQUNBLHFCQUFLYyxNQUFMOzt1QkFDTSxLQUFLQyxJQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2QzhCLGVBQUtmLEk7O2tCQUF4Qk4sVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgcGFnaW5hdGlvbiBmcm9tICcuLi8uLi9taXhpbi9wYWdpbmF0aW9uJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXNlaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqM5omL5oi/J1xyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gWyBwYWdpbmF0aW9uIF1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxpc3Q6bnVsbCxcclxuICAgICAgcGFnZToge1xyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgYXN5bmMgdG9EZXRhaWwoaWQpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnBhZ2UubGlzdC5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSlcclxuICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdkZXRhaWwnLCBpdGVtWzBdKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9ob3VzZS9kZXRhaWwnXHJcbiAgICAgICAgfSlcclxuICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgICAgdGhpcy5wYWdlID0gYXdhaXQgYXBpLmhvdXNlKClcclxuICAgICAgLy8gdGhpcy5saXN0ID0gZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==