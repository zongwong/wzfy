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
    // 逆解析
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
                return _context3.abrupt('return', city);

              case 6:
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

              case 8:
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
    // 拨打电话

  }, {
    key: 'phoneCall',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(phone) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wepy2.default.makePhoneCall({
                  phoneNumber: phone
                });

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function phoneCall(_x2) {
        return _ref7.apply(this, arguments);
      }

      return phoneCall;
    }()
    // 图片浏览

  }, {
    key: 'imgView',
    value: function imgView() {
      var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _wepy2.default.previewImage({
        current: src,
        urls: urls
      });
    }
  }]);

  return wxApi;
}(_base3.default);

exports.default = wxApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4YXBpLmpzIl0sIm5hbWVzIjpbImJtYXAiLCJyZXF1aXJlIiwiQmFpZHVBayIsInd4QXBpIiwidHlwZSIsImdldExvY2F0aW9uIiwiZGF0YSIsIkJNYXAiLCJCTWFwV1giLCJhayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVnZW9jb2RpbmciLCJmYWlsIiwicmVzIiwic3VjY2VzcyIsImdldFN0b3JhZ2VTeW5jIiwiY2l0eSIsImNpdGllcyIsImNvbnNvbGUiLCJsb2ciLCJCYWlkdU1hcCIsInRoZW4iLCJteWNpdHkiLCJvcmlnaW5hbERhdGEiLCJyZXN1bHQiLCJhZGRyZXNzQ29tcG9uZW50Iiwic2xpY2UiLCJsZW5ndGgiLCJpbmRleE9mIiwic2V0U3RvcmFnZVN5bmMiLCJJbmZvIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBob25lIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwic3JjIiwidXJscyIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFEQSxJQUFJQSxPQUFPQyxRQUFRLDhCQUFSLENBQVg7O0FBRUEsSUFBTUMsVUFBVSxrQ0FBaEI7O0lBQ3FCQyxLOzs7Ozs7Ozs7Ozs7QUFDbkI7OzBGQUN5QkMsSTs7Ozs7Ozt1QkFDSixlQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDOzs7QUFBYkUsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUjs7Ozs7Ozs7Ozs7QUFFTUMsb0IsR0FBTyxJQUFJUCxLQUFLUSxNQUFULENBQWdCO0FBQ3pCQyxzQkFBSVA7QUFEcUIsaUJBQWhCLEM7a0RBR0osSUFBSVEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0wsdUJBQUtNLFdBQUwsQ0FBaUI7QUFDZkMsMEJBQUssY0FBU0MsR0FBVCxFQUFhO0FBQ2hCSCw2QkFBT0csR0FBUDtBQUNELHFCQUhjO0FBSWZDLDZCQUFRLGlCQUFTRCxHQUFULEVBQWE7QUFDbkJKLDhCQUFRSSxHQUFSO0FBQ0Q7QUFOYyxtQkFBakI7QUFRRCxpQkFUTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBV1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7dUJBRW1CLGVBQUtFLGNBQUwsQ0FBb0IsTUFBcEIsQzs7O0FBQWJDLG9CO2tEQUNHQSxJOzs7QUFDSEMsc0I7a0RBRUssSUFBSVQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBR00sSUFBSCxFQUFRO0FBQ05FLDRCQUFRQyxHQUFSLENBQVksVUFBUUgsSUFBcEI7QUFDQVAsNEJBQVFPLElBQVI7QUFDRCxtQkFIRCxNQUdLO0FBQ0gsMkJBQUtJLFFBQUwsR0FBZ0JDLElBQWhCLENBQXFCLFVBQUNSLEdBQUQsRUFBTztBQUMxQiwwQkFBSVMsU0FBVVQsSUFBSVUsWUFBSixDQUFpQkMsTUFBakIsQ0FBd0JDLGdCQUF4QixDQUF5Q1QsSUFBdkQ7QUFDQU0sK0JBQVNBLE9BQU9JLEtBQVAsQ0FBYSxDQUFiLEVBQWVKLE9BQU9LLE1BQVAsR0FBYyxDQUE3QixDQUFUO0FBQ0FULDhCQUFRQyxHQUFSLENBQVlHLE1BQVo7QUFDQSwwQkFBR0wsT0FBT1csT0FBUCxDQUFlTixNQUFmLEtBQXdCLENBQUMsQ0FBNUIsRUFBOEI7QUFDNUIsdUNBQUtPLGNBQUwsQ0FBb0IsTUFBcEIsRUFBMkJaLE9BQU8sQ0FBUCxDQUEzQjtBQUNBQyxnQ0FBUUMsR0FBUixDQUFZLFVBQVFGLE9BQU8sQ0FBUCxDQUFwQjtBQUNBUixnQ0FBUVEsT0FBTyxDQUFQLENBQVI7QUFDRCx1QkFKRCxNQUlLO0FBQ0hDLGdDQUFRQyxHQUFSLENBQVksVUFBUUcsTUFBcEI7QUFDQSx1Q0FBS08sY0FBTCxDQUFvQixNQUFwQixFQUEyQlAsTUFBM0I7QUFDQWIsZ0NBQVFhLE1BQVI7QUFDRDtBQUNGLHFCQWJEO0FBY0Q7QUFHRixpQkF0Qk0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQTZCWDs7Ozs7Ozs7Ozs7O0FBRU1RLG9COzs7QUFFRkEsdUJBQU8sZUFBS2YsY0FBTCxDQUFvQixVQUFwQixDQUFQOztxQkFDSWUsSTs7Ozs7a0RBQ09BLEk7Ozs7dUJBRW1CLGVBQUtDLFdBQUwsRTs7OztBQUFuQkMsd0IsU0FBQUEsUTtrREFDREEsUTs7Ozs7Ozs7Ozt1QkFHaUIsZUFBS0QsV0FBTCxFOzs7O0FBQW5CQyx5QixTQUFBQSxRO2tEQUNENUIsSTs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs0RkFDd0I2QixLOzs7Ozs7dUJBQ2hCLGVBQUtDLGFBQUwsQ0FBbUI7QUFDdkJDLCtCQUFZRjtBQURXLGlCQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7OEJBQ29DO0FBQUEsVUFBckJHLEdBQXFCLHVFQUFmLEVBQWU7QUFBQSxVQUFYQyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2xDLHFCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxpQkFBU0gsR0FETztBQUVoQkMsY0FBTUE7QUFGVSxPQUFsQjtBQUlEOzs7Ozs7a0JBdEZrQnBDLEsiLCJmaWxlIjoid3hhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgYmFzZSBmcm9tICcuLi9pbnRlcmZhY2VzL2Jhc2UnXHJcbnZhciBibWFwID0gcmVxdWlyZSgnLi4vaW50ZXJmYWNlcy9ibWFwLXd4Lm1pbi5qcycpXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGknIFxyXG5jb25zdCBCYWlkdUFrID0gJ0g2Q3V4RlFmSEZoaUs2bm9WcUlTSGZzOVlPaXVBMFNuJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3eEFwaSBleHRlbmRzIGJhc2Uge1xyXG4gIC8vIOiOt+WPluWumuS9jeWfjuW4glxyXG4gIHN0YXRpYyBhc3luYyBnZXRMb2NhdGlvbih0eXBlKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VweS5nZXRMb2NhdGlvbih0eXBlKVxyXG4gICAgLy8gcmV0dXJuIHRoaXMuQmFpZHVNYXAoZGF0YS5sb25naXR1ZGUsIGRhdGEubGF0aXR1ZGUpXHJcbiAgfVxyXG4gIC8vIOeZvuW6puaOpeWPo1xyXG4gIHN0YXRpYyBhc3luYyBCYWlkdU1hcCgpIHtcclxuICAgIGxldCBCTWFwID0gbmV3IGJtYXAuQk1hcFdYKHsgIFxyXG4gICAgICBhazogQmFpZHVBa1xyXG4gICAgfSlcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEJNYXAucmVnZW9jb2RpbmcoeyAgXHJcbiAgICAgICAgZmFpbDpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICB9LCAgXHJcbiAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyDpgIbop6PmnpBcclxuICAvLyDmnI3liqHln47luIJcclxuICBzdGF0aWMgYXN5bmMgZ2V0Q2l0eSgpIHtcclxuICAgIGxldCBjaXR5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlU3luYygnY2l0eScpXHJcbiAgICByZXR1cm4gY2l0eVxyXG4gICAgbGV0IGNpdGllcyA9IGF3YWl0IGFwaS5jaXRpZXMoKVxyXG4gICAgLy8gaWYoY2l0eSl7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYoY2l0eSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn57yT5a2Y5Z+O5biCOicrY2l0eSlcclxuICAgICAgICAgIHJlc29sdmUoY2l0eSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuQmFpZHVNYXAoKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGxldCBteWNpdHkgPSAgcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5XHJcbiAgICAgICAgICAgIG15Y2l0eSA9IG15Y2l0eS5zbGljZSgwLG15Y2l0eS5sZW5ndGgtMSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXljaXR5KVxyXG4gICAgICAgICAgICBpZihjaXRpZXMuaW5kZXhPZihteWNpdHkpPT0tMSl7XHJcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsY2l0aWVzWzBdKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpu5jorqTln47luII6JytjaXRpZXNbMF0pXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShjaXRpZXNbMF0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrprkvY3ln47luII6JytteWNpdHkpXHJcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsbXljaXR5KVxyXG4gICAgICAgICAgICAgIHJlc29sdmUobXljaXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAvLyB9ZWxzZXtcclxuXHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gIHN0YXRpYyBhc3luYyBnZXRVc2VyICgpIHtcclxuICAgIGxldCBJbmZvXHJcbiAgICB0cnkge1xyXG4gICAgICBJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKVxyXG4gICAgICBpZiAoSW5mbykge1xyXG4gICAgICAgICAgcmV0dXJuIEluZm9cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICAgICByZXR1cm4gdXNlckluZm9cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuICB9XHJcbiAgLy8g5ouo5omT55S16K+dXHJcbiAgc3RhdGljIGFzeW5jIHBob25lQ2FsbCAocGhvbmUpIHtcclxuICAgIGF3YWl0IHdlcHkubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgIHBob25lTnVtYmVyOnBob25lXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyDlm77niYfmtY/op4hcclxuICBzdGF0aWMgaW1nVmlldyhzcmMgPSAnJywgdXJscyA9IFtdKSB7XHJcbiAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgIGN1cnJlbnQ6IHNyYyxcclxuICAgICAgdXJsczogdXJsc1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=