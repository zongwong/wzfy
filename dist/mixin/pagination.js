'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./../utils/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 分页通用方法
*/
var pagination = function (_wepy$mixin) {
  _inherits(pagination, _wepy$mixin);

  function pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pagination.__proto__ || Object.getPrototypeOf(pagination)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _this.data = {
      isPageLoading: false,
      isPageEmpty: false,
      isPageReachBottom: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pagination, [{
    key: 'next',

    /**
     * 下一页
     */
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var param;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!this.page.reachBottom) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return');

              case 3:
                if (this.page.start != 0) {
                  _Tips2.default.setLoading();
                }
                this.isPageLoading = true;
                param = this.params ? this.params : {};
                _context.next = 8;
                return this.page.next(param);

              case 8:
                this.isPageReachBottom = this.page.reachBottom;
                this.isPageEmpty = this.page.list.length == 0;
                if (this.onPageLoad) {
                  this.onPageLoad();
                }

              case 11:
                _context.prev = 11;

                this.isPageLoading = false;
                this.init = true;
                this.$apply();
                _Tips2.default.loaded();
                return _context.finish(11);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0,, 11, 17]]);
      }));

      function next() {
        return _ref2.apply(this, arguments);
      }

      return next;
    }()

    /**
     * 到达底部
     */

  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.next();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onReachBottom() {
        return _ref3.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }, {
    key: 'reload',


    /**
     * 重新加载
     */
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _Tips2.default.setLoading();
                this.page.reset();
                _context3.next = 4;
                return this.next();

              case 4:
                _wepy2.default.stopPullDownRefresh();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function reload() {
        return _ref4.apply(this, arguments);
      }

      return reload;
    }()

    /**
     * 下拉刷新
     */

  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.reload();

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onPullDownRefresh() {
        return _ref5.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()

    /**
     * 更新列表（外部事件）
     */

  }, {
    key: 'update',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.reload();

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function update() {
        return _ref6.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return pagination;
}(_wepy2.default.mixin);

exports.default = pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsicGFnaW5hdGlvbiIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwiZGF0YSIsImlzUGFnZUxvYWRpbmciLCJpc1BhZ2VFbXB0eSIsImlzUGFnZVJlYWNoQm90dG9tIiwicGFnZSIsInJlYWNoQm90dG9tIiwic3RhcnQiLCJzZXRMb2FkaW5nIiwicGFyYW0iLCJwYXJhbXMiLCJuZXh0IiwibGlzdCIsImxlbmd0aCIsIm9uUGFnZUxvYWQiLCJpbml0IiwiJGFwcGx5IiwibG9hZGVkIiwicmVzZXQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicmVsb2FkIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRSxRQUNUQyxJLEdBQU87QUFDTEMscUJBQWUsS0FEVjtBQUVMQyxtQkFBYSxLQUZSO0FBR0xDLHlCQUFtQjtBQUhkLEs7Ozs7OztBQUtQOzs7Ozs7Ozs7Ozs7cUJBS1EsS0FBS0MsSUFBTCxDQUFVQyxXOzs7Ozs7OztBQUdkLG9CQUFJLEtBQUtELElBQUwsQ0FBVUUsS0FBVixJQUFtQixDQUF2QixFQUEwQjtBQUN4QixpQ0FBS0MsVUFBTDtBQUNEO0FBQ0QscUJBQUtOLGFBQUwsR0FBcUIsSUFBckI7QUFDTU8scUIsR0FBUSxLQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBbkIsR0FBMkIsRTs7dUJBQ25DLEtBQUtMLElBQUwsQ0FBVU0sSUFBVixDQUFlRixLQUFmLEM7OztBQUNOLHFCQUFLTCxpQkFBTCxHQUF5QixLQUFLQyxJQUFMLENBQVVDLFdBQW5DO0FBQ0EscUJBQUtILFdBQUwsR0FBbUIsS0FBS0UsSUFBTCxDQUFVTyxJQUFWLENBQWVDLE1BQWYsSUFBeUIsQ0FBNUM7QUFDQSxvQkFBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ25CLHVCQUFLQSxVQUFMO0FBQ0Q7Ozs7O0FBRUQscUJBQUtaLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxxQkFBS2EsSUFBTCxHQUFZLElBQVo7QUFDQSxxQkFBS0MsTUFBTDtBQUNBLCtCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSjs7Ozs7Ozs7Ozs7Ozt1QkFJUSxLQUFLTixJQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1I7Ozs7Ozs7OztBQUlFLCtCQUFLSCxVQUFMO0FBQ0EscUJBQUtILElBQUwsQ0FBVWEsS0FBVjs7dUJBQ00sS0FBS1AsSUFBTCxFOzs7QUFDTiwrQkFBS1EsbUJBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Y7Ozs7Ozs7Ozs7Ozs7dUJBSVEsS0FBS0MsTUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdSOzs7Ozs7Ozs7Ozs7O3VCQUlRLEtBQUtBLE1BQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFOEIsZUFBS0MsSzs7a0JBQXhCekIsVSIsImZpbGUiOiJwYWdpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IFRpcHMgZnJvbSAnLi4vdXRpbHMvVGlwcy5qcyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIhumhtemAmueUqOaWueazlVxyXG4gICovXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnaW5hdGlvbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gICAgY29uZmlnID0ge307XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcbiAgICBtZXRob2RzID0ge307XHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlzUGFnZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBpc1BhZ2VFbXB0eTogZmFsc2UsXHJcbiAgICAgIGlzUGFnZVJlYWNoQm90dG9tOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog5LiL5LiA6aG1XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG5leHQgKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UucmVhY2hCb3R0b20pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZS5zdGFydCAhPSAwKSB7XHJcbiAgICAgICAgICBUaXBzLnNldExvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHRoaXMucGFyYW1zID8gdGhpcy5wYXJhbXM6IHt9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFnZS5uZXh0KHBhcmFtKTtcclxuICAgICAgICB0aGlzLmlzUGFnZVJlYWNoQm90dG9tID0gdGhpcy5wYWdlLnJlYWNoQm90dG9tO1xyXG4gICAgICAgIHRoaXMuaXNQYWdlRW1wdHkgPSB0aGlzLnBhZ2UubGlzdC5sZW5ndGggPT0gMDtcclxuICAgICAgICBpZiAodGhpcy5vblBhZ2VMb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uUGFnZUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgdGhpcy5pc1BhZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIFRpcHMubG9hZGVkKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIsOi+vuW6lemDqFxyXG4gICAgICovXHJcbiAgICBhc3luYyBvblJlYWNoQm90dG9tICgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN5paw5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbG9hZCAoKSB7XHJcbiAgICAgIFRpcHMuc2V0TG9hZGluZygpO1xyXG4gICAgICB0aGlzLnBhZ2UucmVzZXQoKTtcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KCk7XHJcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiL5ouJ5Yi35pawXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoICgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWIl+ihqO+8iOWklumDqOS6i+S7tu+8iVxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVsb2FkKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuIl19