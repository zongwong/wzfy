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

var Financialindex = function (_wepy$page) {
  _inherits(Financialindex, _wepy$page);

  function Financialindex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Financialindex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Financialindex.__proto__ || Object.getPrototypeOf(Financialindex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '金融服务'
    }, _this.data = {
      list: ''
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
                    url: '/pages/financial/detail'
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Financialindex, [{
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
                return _api2.default.finances();

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

  return Financialindex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Financialindex , 'pages/financial/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpbmFuY2lhbGluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsInVybCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZmluYW5jZXMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUs7QUFEQSxLLFFBTVBDLE8sR0FBVTtBQUNGQyxjQURFO0FBQUEsNkZBQ09DLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLHNCQUZBLEdBRU8sS0FBS0osSUFBTCxDQUFVSyxNQUFWLENBQWlCLFVBQUNELElBQUQsRUFBUTtBQUNwQywyQkFBT0EsS0FBS0QsRUFBTCxJQUFXQSxFQUFsQjtBQUNELG1CQUZZLENBRlA7O0FBS05HLDBCQUFRQyxHQUFSLENBQVlILEtBQUssQ0FBTCxDQUFaO0FBTE07QUFBQSx5QkFNQSxlQUFLSSxjQUFMLENBQW9CLFFBQXBCLEVBQThCSixLQUFLLENBQUwsQ0FBOUIsQ0FOQTs7QUFBQTtBQU9OLGlDQUFLSyxVQUFMLENBQWdCO0FBQ2RDLHlCQUFJO0FBRFUsbUJBQWhCOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs7Ozs7O3VCQWdCRixlQUFLQyxpQkFBTCxDQUF1QixRQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHQSxlQUFLQSxpQkFBTCxDQUF1QixRQUF2QixDOzs7O3VCQUNhLGNBQUlDLFFBQUosRTs7O0FBQWJiLG9COztBQUNOLHFCQUFLQyxJQUFMLEdBQVlELEtBQUtBLElBQWpCO0FBQ0EscUJBQUtjLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQ3dDLGVBQUtDLEk7O2tCQUE1QmxCLGMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluYW5jaWFsaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YeR6J6N5pyN5YqhJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxpc3Q6JydcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyB0b0RldGFpbChpZCl7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdC5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSlcclxuICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdkZXRhaWwnLCBpdGVtWzBdKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9maW5hbmNpYWwvZGV0YWlsJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5maW5hbmNlcygpXHJcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuZGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=