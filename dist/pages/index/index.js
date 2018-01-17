'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

var _wxapi = require('./../../interfaces/wxapi.js');

var _wxapi2 = _interopRequireDefault(_wxapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '万众分佣'
    }, _this.data = {
      banner: [],
      mycity: ''
    }, _this.methods = {
      toCity: function toCity() {
        _wepy2.default.navigateTo({
          url: '/pages/index/city'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.banner();

              case 2:
                data = _context.sent;

                this.banner = data;
                this.$apply();

              case 5:
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var city;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.getStorageInfo('city');

              case 2:
                city = _context2.sent;

                console.log(city);
                if (city) {
                  this.mycity = city;
                  this.$apply();
                } else {
                  _wxapi2.default.BaiduMap().then(function (res) {
                    _this2.mycity = res.originalData.result.addressComponent.city;
                    _this2.$apply();
                  });
                }

              case 5:
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXIiLCJteWNpdHkiLCJtZXRob2RzIiwidG9DaXR5IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIiRhcHBseSIsImdldFN0b3JhZ2VJbmZvIiwiY2l0eSIsImNvbnNvbGUiLCJsb2ciLCJCYWlkdU1hcCIsInRoZW4iLCJyZXMiLCJvcmlnaW5hbERhdGEiLCJyZXN1bHQiLCJhZGRyZXNzQ29tcG9uZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQU8sRUFERjtBQUVMQyxjQUFPO0FBRkYsSyxRQU9QQyxPLEdBQVU7QUFDVEMsWUFEUyxvQkFDQTtBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUk7QUFEVSxTQUFoQjtBQUdEO0FBTFEsSyxRQVFWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkFLWSxjQUFJTixNQUFKLEU7OztBQUFiRCxvQjs7QUFDTixxQkFBS0MsTUFBTCxHQUFjRCxJQUFkO0FBQ0EscUJBQUtRLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR21CLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0Esb0JBQUdBLElBQUgsRUFBUTtBQUNOLHVCQUFLUixNQUFMLEdBQWNRLElBQWQ7QUFDQSx1QkFBS0YsTUFBTDtBQUNELGlCQUhELE1BR0s7QUFDSCxrQ0FBTUssUUFBTixHQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsR0FBRCxFQUFPO0FBQzNCLDJCQUFLYixNQUFMLEdBQWNhLElBQUlDLFlBQUosQ0FBaUJDLE1BQWpCLENBQXdCQyxnQkFBeEIsQ0FBeUNSLElBQXZEO0FBQ0EsMkJBQUtGLE1BQUw7QUFDRCxtQkFIRDtBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEM4QixlQUFLVyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGltcG9ydCB3eEFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3d4YXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4h+S8l+WIhuS9oydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBiYW5uZXI6W10sXHJcbiAgICAgIG15Y2l0eTonJ1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgdG9DaXR5KCkge1xyXG4gICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgdXJsOicvcGFnZXMvaW5kZXgvY2l0eSdcclxuICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmJhbm5lcigpXHJcbiAgICAgIHRoaXMuYmFubmVyID0gZGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBhc3luYyBvblNob3coKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2VJbmZvKCdjaXR5JylcclxuICAgICAgY29uc29sZS5sb2coY2l0eSlcclxuICAgICAgaWYoY2l0eSl7XHJcbiAgICAgICAgdGhpcy5teWNpdHkgPSBjaXR5XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB3eEFwaS5CYWlkdU1hcCgpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgIHRoaXMubXljaXR5ID0gcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19