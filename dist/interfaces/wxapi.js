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

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

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
    // 服务城市

  }, {
    key: 'getCity',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var city, cities;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.getStorageSync('city');

              case 2:
                city = _context3.sent;
                _context3.next = 5;
                return _api2.default.cities();

              case 5:
                cities = _context3.sent;
                return _context3.abrupt('return', new Promise(function (resolve, reject) {
                  if (city) {
                    console.log('缓存城市:' + city);
                    resolve(city);
                  } else {
                    _this2.BaiduMap().then(function (res) {
                      var mycity = res.originalData.result.addressComponent.city;
                      mycity = mycity.slice(0, mycity.length - 1);
                      console.log(mycity);
                      if (cities.indexOf(mycity) == -1) {
                        _wepy2.default.setStorageSync('city', cities[0]);
                        console.log('默认城市:' + cities[0]);
                        resolve(cities[0]);
                      } else {
                        console.log('定位城市:' + mycity);
                        _wepy2.default.setStorageSync('city', mycity);
                        resolve(mycity);
                      }
                    });
                  }
                }));

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCity() {
        return _ref3.apply(this, arguments);
      }

      return getCity;
    }()
    // 获取用户信息

  }, {
    key: 'getUser',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var Info, _ref5, userInfo, _ref6, _userInfo;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                Info = void 0;
                _context4.prev = 1;

                Info = _wepy2.default.getStorageSync('userInfo');

                if (!Info) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt('return', Info);

              case 7:
                _context4.next = 9;
                return _wepy2.default.getUserInfo();

              case 9:
                _ref5 = _context4.sent;
                userInfo = _ref5.userInfo;
                return _context4.abrupt('return', userInfo);

              case 12:
                _context4.next = 21;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](1);
                _context4.next = 18;
                return _wepy2.default.getUserInfo();

              case 18:
                _ref6 = _context4.sent;
                _userInfo = _ref6.userInfo;
                return _context4.abrupt('return', data);

              case 21:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 14]]);
      }));

      function getUser() {
        return _ref4.apply(this, arguments);
      }

      return getUser;
    }()
  }]);

  return wxApi;
}(_base3.default);

exports.default = wxApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4YXBpLmpzIl0sIm5hbWVzIjpbImJtYXAiLCJyZXF1aXJlIiwiQmFpZHVBayIsInd4QXBpIiwidHlwZSIsImdldExvY2F0aW9uIiwiZGF0YSIsIkJNYXAiLCJCTWFwV1giLCJhayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVnZW9jb2RpbmciLCJmYWlsIiwicmVzIiwic3VjY2VzcyIsImdldFN0b3JhZ2VTeW5jIiwiY2l0eSIsImNpdGllcyIsImNvbnNvbGUiLCJsb2ciLCJCYWlkdU1hcCIsInRoZW4iLCJteWNpdHkiLCJvcmlnaW5hbERhdGEiLCJyZXN1bHQiLCJhZGRyZXNzQ29tcG9uZW50Iiwic2xpY2UiLCJsZW5ndGgiLCJpbmRleE9mIiwic2V0U3RvcmFnZVN5bmMiLCJJbmZvIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQURBLElBQUlBLE9BQU9DLFFBQVEsOEJBQVIsQ0FBWDs7QUFFQSxJQUFNQyxVQUFVLGtDQUFoQjs7SUFDcUJDLEs7Ozs7Ozs7Ozs7OztBQUNuQjs7MEZBQ3lCQyxJOzs7Ozs7O3VCQUNKLGVBQUtDLFdBQUwsQ0FBaUJELElBQWpCLEM7OztBQUFiRSxvQjs7Ozs7Ozs7Ozs7Ozs7OztBQUdSOzs7Ozs7Ozs7OztBQUVNQyxvQixHQUFPLElBQUlQLEtBQUtRLE1BQVQsQ0FBZ0I7QUFDekJDLHNCQUFJUDtBQURxQixpQkFBaEIsQztrREFHSixJQUFJUSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDTCx1QkFBS00sV0FBTCxDQUFpQjtBQUNmQywwQkFBSyxjQUFTQyxHQUFULEVBQWE7QUFDaEJILDZCQUFPRyxHQUFQO0FBQ0QscUJBSGM7QUFJZkMsNkJBQVEsaUJBQVNELEdBQVQsRUFBYTtBQUNuQkosOEJBQVFJLEdBQVI7QUFDRDtBQU5jLG1CQUFqQjtBQVFELGlCQVRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXVDs7Ozs7Ozs7Ozs7Ozs7dUJBRW1CLGVBQUtFLGNBQUwsQ0FBb0IsTUFBcEIsQzs7O0FBQWJDLG9COzt1QkFDZSxjQUFJQyxNQUFKLEU7OztBQUFmQSxzQjtrREFFSyxJQUFJVCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFHTSxJQUFILEVBQVE7QUFDTkUsNEJBQVFDLEdBQVIsQ0FBWSxVQUFRSCxJQUFwQjtBQUNBUCw0QkFBUU8sSUFBUjtBQUNELG1CQUhELE1BR0s7QUFDSCwyQkFBS0ksUUFBTCxHQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQ1IsR0FBRCxFQUFPO0FBQzFCLDBCQUFJUyxTQUFVVCxJQUFJVSxZQUFKLENBQWlCQyxNQUFqQixDQUF3QkMsZ0JBQXhCLENBQXlDVCxJQUF2RDtBQUNBTSwrQkFBU0EsT0FBT0ksS0FBUCxDQUFhLENBQWIsRUFBZUosT0FBT0ssTUFBUCxHQUFjLENBQTdCLENBQVQ7QUFDQVQsOEJBQVFDLEdBQVIsQ0FBWUcsTUFBWjtBQUNBLDBCQUFHTCxPQUFPVyxPQUFQLENBQWVOLE1BQWYsS0FBd0IsQ0FBQyxDQUE1QixFQUE4QjtBQUM1Qix1Q0FBS08sY0FBTCxDQUFvQixNQUFwQixFQUEyQlosT0FBTyxDQUFQLENBQTNCO0FBQ0FDLGdDQUFRQyxHQUFSLENBQVksVUFBUUYsT0FBTyxDQUFQLENBQXBCO0FBQ0FSLGdDQUFRUSxPQUFPLENBQVAsQ0FBUjtBQUNELHVCQUpELE1BSUs7QUFDSEMsZ0NBQVFDLEdBQVIsQ0FBWSxVQUFRRyxNQUFwQjtBQUNBLHVDQUFLTyxjQUFMLENBQW9CLE1BQXBCLEVBQTJCUCxNQUEzQjtBQUNBYixnQ0FBUWEsTUFBUjtBQUNEO0FBQ0YscUJBYkQ7QUFjRDtBQUdGLGlCQXRCTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBNkJYOzs7Ozs7Ozs7Ozs7QUFFTVEsb0I7OztBQUVGQSx1QkFBTyxlQUFLZixjQUFMLENBQW9CLFVBQXBCLENBQVA7O3FCQUNJZSxJOzs7OztrREFDT0EsSTs7Ozt1QkFFbUIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxRO2tEQUNEQSxROzs7Ozs7Ozs7O3VCQUdpQixlQUFLRCxXQUFMLEU7Ozs7QUFBbkJDLHlCLFNBQUFBLFE7a0RBQ0Q1QixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBckVRSCxLIiwiZmlsZSI6Ind4YXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGJhc2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9iYXNlJ1xyXG52YXIgYm1hcCA9IHJlcXVpcmUoJy4uL2ludGVyZmFjZXMvYm1hcC13eC5taW4uanMnKVxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2ludGVyZmFjZXMvYXBpJyBcclxuY29uc3QgQmFpZHVBayA9ICdINkN1eEZRZkhGaGlLNm5vVnFJU0hmczlZT2l1QTBTbidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3hBcGkgZXh0ZW5kcyBiYXNlIHtcclxuICAvLyDojrflj5blrprkvY3ln47luIJcclxuICBzdGF0aWMgYXN5bmMgZ2V0TG9jYXRpb24odHlwZSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlcHkuZ2V0TG9jYXRpb24odHlwZSlcclxuICAgIC8vIHJldHVybiB0aGlzLkJhaWR1TWFwKGRhdGEubG9uZ2l0dWRlLCBkYXRhLmxhdGl0dWRlKVxyXG4gIH1cclxuICAvLyDnmb7luqbmjqXlj6NcclxuICBzdGF0aWMgYXN5bmMgQmFpZHVNYXAoKSB7XHJcbiAgICBsZXQgQk1hcCA9IG5ldyBibWFwLkJNYXBXWCh7ICBcclxuICAgICAgYWs6IEJhaWR1QWtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBCTWFwLnJlZ2VvY29kaW5nKHsgIFxyXG4gICAgICAgIGZhaWw6ZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgfSwgIFxyXG4gICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0gIFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy8g5pyN5Yqh5Z+O5biCXHJcbiAgc3RhdGljIGFzeW5jIGdldENpdHkoKSB7XHJcbiAgICBsZXQgY2l0eSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2NpdHknKVxyXG4gICAgbGV0IGNpdGllcyA9IGF3YWl0IGFwaS5jaXRpZXMoKVxyXG4gICAgLy8gaWYoY2l0eSl7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYoY2l0eSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn57yT5a2Y5Z+O5biCOicrY2l0eSlcclxuICAgICAgICAgIHJlc29sdmUoY2l0eSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuQmFpZHVNYXAoKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGxldCBteWNpdHkgPSAgcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5XHJcbiAgICAgICAgICAgIG15Y2l0eSA9IG15Y2l0eS5zbGljZSgwLG15Y2l0eS5sZW5ndGgtMSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXljaXR5KVxyXG4gICAgICAgICAgICBpZihjaXRpZXMuaW5kZXhPZihteWNpdHkpPT0tMSl7XHJcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsY2l0aWVzWzBdKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpu5jorqTln47luII6JytjaXRpZXNbMF0pXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaXRpZXNbMF0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrprkvY3ln47luII6JytteWNpdHkpXHJcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsbXljaXR5KVxyXG4gICAgICAgICAgICAgIHJlc29sdmUobXljaXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAvLyB9ZWxzZXtcclxuXHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gIHN0YXRpYyBhc3luYyBnZXRVc2VyICgpIHtcclxuICAgIGxldCBJbmZvXHJcbiAgICB0cnkge1xyXG4gICAgICBJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgICBpZiAoSW5mbykge1xyXG4gICAgICAgICAgcmV0dXJuIEluZm9cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICByZXR1cm4gdXNlckluZm9cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuICB9XHJcbn0iXX0=