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
      cityInfo: null
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

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

                _wxapi2.default.BaiduMap().then(function (res) {
                  _this2.cityInfo = res.originalData.result;
                  _this2.$apply();
                }).catch(function (res) {
                  console.log(res);
                });

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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXIiLCJjaXR5SW5mbyIsIm1ldGhvZHMiLCJldmVudHMiLCJCYWlkdU1hcCIsInRoZW4iLCJyZXMiLCJvcmlnaW5hbERhdGEiLCJyZXN1bHQiLCIkYXBwbHkiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBTyxFQURGO0FBRUxDLGdCQUFTO0FBRkosSyxRQU9QQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozs7O3VCQUtZLGNBQUlILE1BQUosRTs7O0FBQWJELG9COztBQUNOLHFCQUFLQyxNQUFMLEdBQWNELElBQWQ7O0FBRUEsZ0NBQU1LLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCLFVBQUNDLEdBQUQsRUFBTztBQUMzQix5QkFBS0wsUUFBTCxHQUFnQkssSUFBSUMsWUFBSixDQUFpQkMsTUFBakM7QUFDQSx5QkFBS0MsTUFBTDtBQUNELGlCQUhELEVBR0dDLEtBSEgsQ0FHUyxVQUFDSixHQUFELEVBQU87QUFDZEssMEJBQVFDLEdBQVIsQ0FBWU4sR0FBWjtBQUNELGlCQUxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEIrQixlQUFLTyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXG4gIGltcG9ydCB3eEFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3d4YXBpJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4h+S8l+WIhuS9oydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYmFubmVyOltdLFxuICAgICAgY2l0eUluZm86bnVsbFxuICAgIH1cblxuICAgIFxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iYW5uZXIoKVxuICAgICAgdGhpcy5iYW5uZXIgPSBkYXRhXG5cbiAgICAgIHd4QXBpLkJhaWR1TWFwKCkudGhlbigocmVzKT0+e1xuICAgICAgICB0aGlzLmNpdHlJbmZvID0gcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHRcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSkuY2F0Y2goKHJlcyk9PntcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgXG4gICAgfVxuICB9XG4iXX0=