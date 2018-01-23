'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recommend = function (_wepy$page) {
  _inherits(Recommend, _wepy$page);

  function Recommend() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Recommend);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Recommend.__proto__ || Object.getPrototypeOf(Recommend)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的推荐'
    }, _this.data = {
      navs: [{
        text: '未完成',
        selected: true
      }, {
        text: '已成交',
        selected: false
      }, {
        text: '未成交',
        selected: false
      }],
      list: '',
      type: ['new-house', 'hand-house', 'finance', 'decorate'],
      status: ['pending', 'processing', 'succeed', 'failed']
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "navs" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.methods = {}, _this.events = {
      navTapEvent: function navTapEvent(index) {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Recommend, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getisIng();

              case 2:
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
    key: 'getisIng',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all(this.type.map(function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(val) {
                    var pending, processing;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            console.log('xx return:' + val);
                            _context2.next = 3;
                            return _api2.default.getReports({
                              type: val,
                              status: 'pending'
                            });

                          case 3:
                            pending = _context2.sent;
                            _context2.next = 6;
                            return _api2.default.getReports({
                              type: val,
                              status: 'processing'
                            });

                          case 6:
                            processing = _context2.sent;

                            console.log(pending, processing);

                          case 8:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getisIng() {
        return _ref3.apply(this, arguments);
      }

      return getisIng;
    }()
  }, {
    key: 'getSuccessed',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getSuccessed() {
        return _ref5.apply(this, arguments);
      }

      return getSuccessed;
    }()
  }, {
    key: 'getFail',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getFail() {
        return _ref6.apply(this, arguments);
      }

      return getFail;
    }()
  }]);

  return Recommend;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Recommend , 'pages/user/recommend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJsaXN0IiwidHlwZSIsInN0YXR1cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIm1ldGhvZHMiLCJldmVudHMiLCJuYXZUYXBFdmVudCIsImluZGV4IiwiZ2V0aXNJbmciLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidmFsIiwiY29uc29sZSIsImxvZyIsImdldFJlcG9ydHMiLCJwZW5kaW5nIiwicHJvY2Vzc2luZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLLENBQUM7QUFDQUMsY0FBSyxLQURMO0FBRUFDLGtCQUFTO0FBRlQsT0FBRCxFQUdEO0FBQ0VELGNBQUssS0FEUDtBQUVFQyxrQkFBUztBQUZYLE9BSEMsRUFNRDtBQUNFRCxjQUFLLEtBRFA7QUFFRUMsa0JBQVM7QUFGWCxPQU5DLENBREE7QUFXSEMsWUFBSyxFQVhGO0FBWUhDLFlBQUssQ0FBQyxXQUFELEVBQWEsWUFBYixFQUEwQixTQUExQixFQUFvQyxVQUFwQyxDQVpGO0FBYUhDLGNBQU8sQ0FBQyxTQUFELEVBQVcsWUFBWCxFQUF3QixTQUF4QixFQUFrQyxRQUFsQztBQWJKLEssUUFlUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVM7QUFDUEMsaUJBRE8sdUJBQ0tDLEtBREwsRUFDWSxDQUVsQjtBQUhNLEs7Ozs7Ozs7Ozs7Ozt1QkFXRCxLQUFLQyxRQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSUFDLFFBQVFDLEdBQVIsQ0FDSixLQUFLYixJQUFMLENBQVVjLEdBQVY7QUFBQSxzRkFBYyxrQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMsb0NBQVFDLEdBQVIsQ0FBWSxlQUFhRixHQUF6QjtBQURZO0FBQUEsbUNBRVUsY0FBSUcsVUFBSixDQUFlO0FBQ25DbEIsb0NBQUtlLEdBRDhCO0FBRW5DZCxzQ0FBTztBQUY0Qiw2QkFBZixDQUZWOztBQUFBO0FBRU5rQixtQ0FGTTtBQUFBO0FBQUEsbUNBTWEsY0FBSUQsVUFBSixDQUFlO0FBQ3RDbEIsb0NBQUtlLEdBRGlDO0FBRXRDZCxzQ0FBTztBQUYrQiw2QkFBZixDQU5iOztBQUFBO0FBTU5tQixzQ0FOTTs7QUFVWkosb0NBQVFDLEdBQVIsQ0FBWUUsT0FBWixFQUFvQkMsVUFBcEI7O0FBVlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlDNkIsZUFBS0MsSTs7a0JBQXZCN0IsUyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWInXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvbW1lbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5o6o6I2QJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdnM6W3tcclxuICAgICAgICAgICAgdGV4dDon5pyq5a6M5oiQJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdGV4dDon5bey5oiQ5LqkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHRleHQ6J+acquaIkOS6pCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGxpc3Q6JycsXHJcbiAgICAgICAgdHlwZTpbJ25ldy1ob3VzZScsJ2hhbmQtaG91c2UnLCdmaW5hbmNlJywnZGVjb3JhdGUnXSxcclxuICAgICAgICBzdGF0dXM6WydwZW5kaW5nJywncHJvY2Vzc2luZycsJ3N1Y2NlZWQnLCdmYWlsZWQnXVxyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bmF2cy5vbmNlXCI6XCJuYXZzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgdGFiOnRhYlxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBuYXZUYXBFdmVudChpbmRleCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgLy8gY29uc3QgbGlzdCA9IGF3YWl0IGFwaS5nZXRSZXBvcnRzKHtcclxuICAgICAgLy8gICB0eXBlOidmaW5hbmNlJ1xyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyBjb25vc2xlLmxvZyhsaXN0KVxyXG4gICAgICBhd2FpdCB0aGlzLmdldGlzSW5nKClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRpc0luZygpIHtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgdGhpcy50eXBlLm1hcChhc3luYyBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd4eCByZXR1cm46Jyt2YWwpXHJcbiAgICAgICAgICBjb25zdCBwZW5kaW5nID0gYXdhaXQgYXBpLmdldFJlcG9ydHMoe1xyXG4gICAgICAgICAgICB0eXBlOnZhbCxcclxuICAgICAgICAgICAgc3RhdHVzOidwZW5kaW5nJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmcgPSBhd2FpdCBhcGkuZ2V0UmVwb3J0cyh7XHJcbiAgICAgICAgICAgIHR5cGU6dmFsLFxyXG4gICAgICAgICAgICBzdGF0dXM6J3Byb2Nlc3NpbmcnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBlbmRpbmcscHJvY2Vzc2luZylcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRTdWNjZXNzZWQoKSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0RmFpbCgpIHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=