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
      },
      toDetail: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  item = this.banner.filter(function (item) {
                    return item.id == id;
                  });

                  console.log(item[0]);
                  _context.next = 4;
                  return _wepy2.default.setStorageSync('detail', item[0].data);

                case 4:
                  _context.t0 = item[0].type;
                  _context.next = _context.t0 === 'decorate' ? 7 : _context.t0 === 'finance' ? 9 : _context.t0 === 'hand-house' ? 11 : _context.t0 === 'new-house' ? 13 : 15;
                  break;

                case 7:
                  _wepy2.default.navigateTo({ url: '/pages/fit/detail' });
                  return _context.abrupt('break', 15);

                case 9:
                  _wepy2.default.navigateTo({ url: '/pages/financial/detail' });
                  return _context.abrupt('break', 15);

                case 11:
                  _wepy2.default.navigateTo({ url: '/pages/house/detail' });
                  return _context.abrupt('break', 15);

                case 13:
                  _wepy2.default.navigateTo({ url: '/pages/new/detail?id=' + item[0].data.id });
                  return _context.abrupt('break', 15);

                case 15:
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

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.banner();

              case 2:
                data = _context2.sent;

                this.banner = data;
                this.$apply();

              case 5:
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var city;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxapi2.default.getCity();

              case 2:
                city = _context3.sent;

                this.mycity = city;
                this.$apply();
                // const city = await wepy.getStorageSync('city')
                // console.log(city)
                // if(city){
                //   this.mycity = city
                //   this.$apply()
                // }else{
                //   wxApi.BaiduMap().then((res)=>{
                //     this.mycity = res.originalData.result.addressComponent.city
                //     this.$apply()
                //   })
                // }

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXIiLCJteWNpdHkiLCJtZXRob2RzIiwidG9DaXR5IiwibmF2aWdhdGVUbyIsInVybCIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwidHlwZSIsImV2ZW50cyIsIiRhcHBseSIsImdldENpdHkiLCJjaXR5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQU8sRUFERjtBQUVMQyxjQUFPO0FBRkYsSyxRQU9QQyxPLEdBQVU7QUFDVEMsWUFEUyxvQkFDQTtBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUk7QUFEVSxTQUFoQjtBQUdELE9BTFE7QUFNSEMsY0FORztBQUFBLDZGQU1NQyxFQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BQyxzQkFQQSxHQU9PLEtBQUtSLE1BQUwsQ0FBWVMsTUFBWixDQUFtQixVQUFDRCxJQUFELEVBQVE7QUFDdEMsMkJBQU9BLEtBQUtELEVBQUwsSUFBV0EsRUFBbEI7QUFDRCxtQkFGWSxDQVBQOztBQVVORywwQkFBUUMsR0FBUixDQUFZSCxLQUFLLENBQUwsQ0FBWjtBQVZNO0FBQUEseUJBV0EsZUFBS0ksY0FBTCxDQUFvQixRQUFwQixFQUE4QkosS0FBSyxDQUFMLEVBQVFULElBQXRDLENBWEE7O0FBQUE7QUFBQSxnQ0FZRVMsS0FBSyxDQUFMLEVBQVFLLElBWlY7QUFBQSxrREFhQyxVQWJELHVCQWdCQyxTQWhCRCx1QkFtQkMsWUFuQkQsd0JBc0JDLFdBdEJEO0FBQUE7O0FBQUE7QUFjRixpQ0FBS1QsVUFBTCxDQUFnQixFQUFDQyxLQUFJLG1CQUFMLEVBQWhCO0FBZEU7O0FBQUE7QUFpQkYsaUNBQUtELFVBQUwsQ0FBZ0IsRUFBQ0MsS0FBSSx5QkFBTCxFQUFoQjtBQWpCRTs7QUFBQTtBQW9CRixpQ0FBS0QsVUFBTCxDQUFnQixFQUFDQyxLQUFJLHFCQUFMLEVBQWhCO0FBcEJFOztBQUFBO0FBdUJGLGlDQUFLRCxVQUFMLENBQWdCLEVBQUNDLEtBQUksMEJBQXdCRyxLQUFLLENBQUwsRUFBUVQsSUFBUixDQUFhUSxFQUExQyxFQUFoQjtBQXZCRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUE4QlZPLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7O3VCQUtZLGNBQUlkLE1BQUosRTs7O0FBQWJELG9COztBQUNOLHFCQUFLQyxNQUFMLEdBQWNELElBQWQ7QUFDQSxxQkFBS2dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdtQixnQkFBTUMsT0FBTixFOzs7QUFBYkMsb0I7O0FBQ04scUJBQUtoQixNQUFMLEdBQWNnQixJQUFkO0FBQ0EscUJBQUtGLE1BQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakUrQixlQUFLRyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGltcG9ydCB3eEFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3d4YXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4h+S8l+WIhuS9oydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBiYW5uZXI6W10sXHJcbiAgICAgIG15Y2l0eTonJ1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgdG9DaXR5KCkge1xyXG4gICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgdXJsOicvcGFnZXMvaW5kZXgvY2l0eSdcclxuICAgICAgIH0pXHJcbiAgICAgfSxcclxuICAgICBhc3luYyB0b0RldGFpbChpZCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmJhbm5lci5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSlcclxuICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdkZXRhaWwnLCBpdGVtWzBdLmRhdGEpXHJcbiAgICAgICAgc3dpdGNoIChpdGVtWzBdLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2RlY29yYXRlJzpcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHt1cmw6Jy9wYWdlcy9maXQvZGV0YWlsJ30pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZmluYW5jZSc6XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOicvcGFnZXMvZmluYW5jaWFsL2RldGFpbCd9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2hhbmQtaG91c2UnOlxyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDonL3BhZ2VzL2hvdXNlL2RldGFpbCd9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ25ldy1ob3VzZSc6XHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOicvcGFnZXMvbmV3L2RldGFpbD9pZD0nK2l0ZW1bMF0uZGF0YS5pZH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYmFubmVyKClcclxuICAgICAgdGhpcy5iYW5uZXIgPSBkYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgY29uc3QgY2l0eSA9IGF3YWl0IHd4QXBpLmdldENpdHkoKVxyXG4gICAgICB0aGlzLm15Y2l0eSA9IGNpdHlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyBjb25zdCBjaXR5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlU3luYygnY2l0eScpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNpdHkpXHJcbiAgICAgIC8vIGlmKGNpdHkpe1xyXG4gICAgICAvLyAgIHRoaXMubXljaXR5ID0gY2l0eVxyXG4gICAgICAvLyAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vICAgd3hBcGkuQmFpZHVNYXAoKS50aGVuKChyZXMpPT57XHJcbiAgICAgIC8vICAgICB0aGlzLm15Y2l0eSA9IHJlcy5vcmlnaW5hbERhdGEucmVzdWx0LmFkZHJlc3NDb21wb25lbnQuY2l0eVxyXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==