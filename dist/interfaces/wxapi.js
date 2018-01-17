'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bmap = require('./bmap-wx.min.js');
var BaiduAk = 'H6CuxFQfHFhiK6noVqISHfs9YOiuA0Sn';

var wxApi = function (_base) {
  _inherits(wxApi, _base);

  function wxApi() {
    _classCallCheck(this, wxApi);

    return _possibleConstructorReturn(this, (wxApi.__proto__ || Object.getPrototypeOf(wxApi)).apply(this, arguments));
  }

  _createClass(wxApi, null, [{
    key: 'getLocation',

    // 获取定位城市
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getLocation(type);

              case 2:
                data = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLocation(_x) {
        return _ref.apply(this, arguments);
      }

      return getLocation;
    }()
    // 百度接口

  }, {
    key: 'BaiduMap',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var BMap;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                BMap = new bmap.BMapWX({
                  ak: BaiduAk
                });
                return _context2.abrupt('return', new Promise(function (resolve, reject) {
                  BMap.regeocoding({
                    fail: function fail(res) {
                      reject(res);
                    },
                    success: function success(res) {
                      resolve(res);
                    }
                  });
                }));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function BaiduMap() {
        return _ref2.apply(this, arguments);
      }

      return BaiduMap;
    }()
    // 获取用户信息

  }, {
    key: 'getUser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var Info, _ref4, userInfo, _ref5, _userInfo;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Info = void 0;
                _context3.prev = 1;

                Info = _wepy2.default.getStorageSync('userInfo');

                if (!Info) {
                  _context3.next = 8;
                  break;
                }

                console.log(1);
                return _context3.abrupt('return', Info);

              case 8:
                console.log(2);
                _context3.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                _ref4 = _context3.sent;
                userInfo = _ref4.userInfo;
                return _context3.abrupt('return', userInfo);

              case 14:
                _context3.next = 24;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3['catch'](1);

                console.log(3);
                _context3.next = 21;
                return _wepy2.default.getUserInfo();

              case 21:
                _ref5 = _context3.sent;
                _userInfo = _ref5.userInfo;
                return _context3.abrupt('return', data);

              case 24:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 16]]);
      }));

      function getUser() {
        return _ref3.apply(this, arguments);
      }

      return getUser;
    }()
  }]);

  return wxApi;
}(_base3.default);

exports.default = wxApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4YXBpLmpzIl0sIm5hbWVzIjpbImJtYXAiLCJyZXF1aXJlIiwiQmFpZHVBayIsInd4QXBpIiwidHlwZSIsImdldExvY2F0aW9uIiwiZGF0YSIsIkJNYXAiLCJCTWFwV1giLCJhayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVnZW9jb2RpbmciLCJmYWlsIiwicmVzIiwic3VjY2VzcyIsIkluZm8iLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsOEJBQVIsQ0FBWDtBQUNBLElBQU1DLFVBQVUsa0NBQWhCOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7O0FBQ25COzswRkFDeUJDLEk7Ozs7Ozs7dUJBQ0osZUFBS0MsV0FBTCxDQUFpQkQsSUFBakIsQzs7O0FBQWJFLG9COzs7Ozs7Ozs7Ozs7Ozs7O0FBR1I7Ozs7Ozs7Ozs7O0FBRU1DLG9CLEdBQU8sSUFBSVAsS0FBS1EsTUFBVCxDQUFnQjtBQUN6QkMsc0JBQUlQO0FBRHFCLGlCQUFoQixDO2tEQUdKLElBQUlRLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENMLHVCQUFLTSxXQUFMLENBQWlCO0FBQ2ZDLDBCQUFLLGNBQVNDLEdBQVQsRUFBYTtBQUNoQkgsNkJBQU9HLEdBQVA7QUFDRCxxQkFIYztBQUlmQyw2QkFBUSxpQkFBU0QsR0FBVCxFQUFhO0FBQ25CSiw4QkFBUUksR0FBUjtBQUNEO0FBTmMsbUJBQWpCO0FBUUQsaUJBVE0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQVlUOzs7Ozs7Ozs7Ozs7QUFFTUUsb0I7OztBQUVGQSx1QkFBTyxlQUFLQyxjQUFMLENBQW9CLFVBQXBCLENBQVA7O3FCQUNJRCxJOzs7OztBQUNBRSx3QkFBUUMsR0FBUixDQUFZLENBQVo7a0RBQ09ILEk7OztBQUVSRSx3QkFBUUMsR0FBUixDQUFZLENBQVo7O3VCQUMyQixlQUFLQyxXQUFMLEU7Ozs7QUFBbkJDLHdCLFNBQUFBLFE7a0RBQ0RBLFE7Ozs7Ozs7Ozs7QUFHVkgsd0JBQVFDLEdBQVIsQ0FBWSxDQUFaOzt1QkFDMkIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx5QixTQUFBQSxRO2tEQUNEaEIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXZDUUgsSyIsImZpbGUiOiJ3eGFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBiYXNlIGZyb20gJy4uL2ludGVyZmFjZXMvYmFzZSdcclxudmFyIGJtYXAgPSByZXF1aXJlKCcuLi9pbnRlcmZhY2VzL2JtYXAtd3gubWluLmpzJykgXHJcbmNvbnN0IEJhaWR1QWsgPSAnSDZDdXhGUWZIRmhpSzZub1ZxSVNIZnM5WU9pdUEwU24nXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHd4QXBpIGV4dGVuZHMgYmFzZSB7XHJcbiAgLy8g6I635Y+W5a6a5L2N5Z+O5biCXHJcbiAgc3RhdGljIGFzeW5jIGdldExvY2F0aW9uKHR5cGUpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmdldExvY2F0aW9uKHR5cGUpXHJcbiAgICAvLyByZXR1cm4gdGhpcy5CYWlkdU1hcChkYXRhLmxvbmdpdHVkZSwgZGF0YS5sYXRpdHVkZSlcclxuICB9XHJcbiAgLy8g55m+5bqm5o6l5Y+jXHJcbiAgc3RhdGljIGFzeW5jIEJhaWR1TWFwKCkge1xyXG4gICAgbGV0IEJNYXAgPSBuZXcgYm1hcC5CTWFwV1goeyAgXHJcbiAgICAgIGFrOiBCYWlkdUFrXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgQk1hcC5yZWdlb2NvZGluZyh7ICBcclxuICAgICAgICBmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgIH0sICBcclxuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9ICBcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gIH1cclxuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICBzdGF0aWMgYXN5bmMgZ2V0VXNlciAoKSB7XHJcbiAgICBsZXQgSW5mb1xyXG4gICAgdHJ5IHtcclxuICAgICAgSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJylcclxuICAgICAgaWYgKEluZm8pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKDEpXHJcbiAgICAgICAgICByZXR1cm4gSW5mb1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgY29uc29sZS5sb2coMilcclxuICAgICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICAgICAgIHJldHVybiB1c2VySW5mb1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKDMpXHJcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==