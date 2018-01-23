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
      list: [],
      type: ['new-house', 'hand-house', 'finance', 'decorate'],
      status: ['pending', 'processing', 'succeed', 'failed'],
      tabIndex: 0
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "navs" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.methods = {}, _this.events = {
      navTapEvent: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(index == 0)) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return this.getisIng();

                case 3:
                  _context.next = 12;
                  break;

                case 5:
                  if (!(index == 1)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 8;
                  return this.getSuccessed();

                case 8:
                  _context.next = 12;
                  break;

                case 10:
                  _context.next = 12;
                  return this.getFail();

                case 12:
                  this.tabIndex = index;
                  this.$apply();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function navTapEvent(_x) {
          return _ref2.apply(this, arguments);
        }

        return navTapEvent;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Recommend, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getisIng();

              case 2:
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
    key: 'getisIng',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Promise.all(this.type.map(function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(val) {
                    var arr, pending, processing;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            console.log('xx return:' + val);
                            arr = [];
                            _context3.next = 4;
                            return _api2.default.getReports({
                              type: val,
                              status: 'pending'
                            });

                          case 4:
                            pending = _context3.sent;
                            _context3.next = 7;
                            return _api2.default.getReports({
                              type: val,
                              status: 'processing'
                            });

                          case 7:
                            processing = _context3.sent;
                            return _context3.abrupt('return', arr.concat(pending.data, processing.data));

                          case 9:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x2) {
                    return _ref5.apply(this, arguments);
                  };
                }())).then(function (res) {
                  var arr = [];
                  res.forEach(function (item) {
                    arr = arr.concat(item);
                  });
                  // return arr
                  _this2.list = arr;
                  _this2.$apply();
                });

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getisIng() {
        return _ref4.apply(this, arguments);
      }

      return getisIng;
    }()
  }, {
    key: 'getSuccessed',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Promise.all(this.type.map(function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(val) {
                    var failed;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _api2.default.getReports({
                              type: val,
                              status: 'failed'
                            });

                          case 2:
                            failed = _context5.sent;
                            return _context5.abrupt('return', failed.data);

                          case 4:
                          case 'end':
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function (_x3) {
                    return _ref7.apply(this, arguments);
                  };
                }())).then(function (res) {
                  var arr = [];
                  res.forEach(function (item) {
                    arr = arr.concat(item);
                  });
                  // return arr
                  _this3.list = arr;
                  _this3.$apply();
                });

              case 2:
                return _context6.abrupt('return', _context6.sent);

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getSuccessed() {
        return _ref6.apply(this, arguments);
      }

      return getSuccessed;
    }()
  }, {
    key: 'getFail',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return Promise.all(this.type.map(function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(val) {
                    var succeed;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _api2.default.getReports({
                              type: val,
                              status: 'succeed'
                            });

                          case 2:
                            succeed = _context7.sent;
                            return _context7.abrupt('return', succeed.data);

                          case 4:
                          case 'end':
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));

                  return function (_x4) {
                    return _ref9.apply(this, arguments);
                  };
                }())).then(function (res) {
                  var arr = [];
                  res.forEach(function (item) {
                    arr = arr.concat(item);
                  });
                  // return arr
                  _this4.list = arr;
                  _this4.$apply();
                });

              case 2:
                return _context8.abrupt('return', _context8.sent);

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getFail() {
        return _ref8.apply(this, arguments);
      }

      return getFail;
    }()
  }]);

  return Recommend;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Recommend , 'pages/user/recommend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJsaXN0IiwidHlwZSIsInN0YXR1cyIsInRhYkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwibWV0aG9kcyIsImV2ZW50cyIsIm5hdlRhcEV2ZW50IiwiaW5kZXgiLCJnZXRpc0luZyIsImdldFN1Y2Nlc3NlZCIsImdldEZhaWwiLCIkYXBwbHkiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidmFsIiwiY29uc29sZSIsImxvZyIsImFyciIsImdldFJlcG9ydHMiLCJwZW5kaW5nIiwicHJvY2Vzc2luZyIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImZhaWxlZCIsInN1Y2NlZWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxDQUFDO0FBQ0FDLGNBQUssS0FETDtBQUVBQyxrQkFBUztBQUZULE9BQUQsRUFHRDtBQUNFRCxjQUFLLEtBRFA7QUFFRUMsa0JBQVM7QUFGWCxPQUhDLEVBTUQ7QUFDRUQsY0FBSyxLQURQO0FBRUVDLGtCQUFTO0FBRlgsT0FOQyxDQURBO0FBV0hDLFlBQUssRUFYRjtBQVlIQyxZQUFLLENBQUMsV0FBRCxFQUFhLFlBQWIsRUFBMEIsU0FBMUIsRUFBb0MsVUFBcEMsQ0FaRjtBQWFIQyxjQUFPLENBQUMsU0FBRCxFQUFXLFlBQVgsRUFBd0IsU0FBeEIsRUFBa0MsUUFBbEMsQ0FiSjtBQWNIQyxnQkFBUztBQWROLEssUUFnQlJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBb0JBQyxRQUFRQyxHQUFSLENBQ1gsS0FBS2pCLElBQUwsQ0FBVWtCLEdBQVY7QUFBQSxzRkFBYyxrQkFBZUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUNVLGNBQUlJLFVBQUosQ0FBZTtBQUNuQ3ZCLG9DQUFLbUIsR0FEOEI7QUFFbkNsQixzQ0FBTztBQUY0Qiw2QkFBZixDQURWOztBQUFBO0FBQ04rQixtQ0FETTtBQUFBLDhEQUtMQSxRQUFRckMsSUFMSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEVyxFQVNYZ0MsSUFUVyxDQVNOLFVBQUNDLEdBQUQsRUFBTztBQUNaLHNCQUFJTixNQUFNLEVBQVY7QUFDQU0sc0JBQUlDLE9BQUosQ0FBWSxnQkFBUTtBQUNsQlAsMEJBQU1BLElBQUlJLE1BQUosQ0FBV0ksSUFBWCxDQUFOO0FBQ0QsbUJBRkQ7QUFHQTtBQUNBLHlCQUFLL0IsSUFBTCxHQUFZdUIsR0FBWjtBQUNBLHlCQUFLUCxNQUFMO0FBQ0QsaUJBakJZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2R3NCLGVBQUtrQixJOztrQkFBdkJ6QyxTIiwiZmlsZSI6InJlY29tbWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRhYiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYidcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29tbWVuZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmjqjojZAnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmF2czpbe1xyXG4gICAgICAgICAgICB0ZXh0OifmnKrlrozmiJAnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDp0cnVlLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICB0ZXh0Oiflt7LmiJDkuqQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdGV4dDon5pyq5oiQ5LqkJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgbGlzdDpbXSxcclxuICAgICAgICB0eXBlOlsnbmV3LWhvdXNlJywnaGFuZC1ob3VzZScsJ2ZpbmFuY2UnLCdkZWNvcmF0ZSddLFxyXG4gICAgICAgIHN0YXR1czpbJ3BlbmRpbmcnLCdwcm9jZXNzaW5nJywnc3VjY2VlZCcsJ2ZhaWxlZCddLFxyXG4gICAgICAgIHRhYkluZGV4OjBcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdnMub25jZVwiOlwibmF2c1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRhYjp0YWJcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgYXN5bmMgbmF2VGFwRXZlbnQoaW5kZXgpIHtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZihpbmRleD09MCl7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldGlzSW5nKClcclxuICAgICAgICB9ZWxzZSBpZihpbmRleD09MSl7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldFN1Y2Nlc3NlZCgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldEZhaWwoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXhcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0aXNJbmcoKVxyXG4gICAgICAvLyB0aGlzLmxpc3QgPSBsaXN0XHJcbiAgICAgIC8vIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRpc0luZygpIHtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICB0aGlzLnR5cGUubWFwKGFzeW5jIGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3h4IHJldHVybjonK3ZhbClcclxuICAgICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgICAgY29uc3QgcGVuZGluZyA9IGF3YWl0IGFwaS5nZXRSZXBvcnRzKHtcclxuICAgICAgICAgICAgdHlwZTp2YWwsXHJcbiAgICAgICAgICAgIHN0YXR1czoncGVuZGluZydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgYXBpLmdldFJlcG9ydHMoe1xyXG4gICAgICAgICAgICB0eXBlOnZhbCxcclxuICAgICAgICAgICAgc3RhdHVzOidwcm9jZXNzaW5nJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gYXJyLmNvbmNhdChwZW5kaW5nLmRhdGEscHJvY2Vzc2luZy5kYXRhKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICApLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJldHVybiBhcnJcclxuICAgICAgICB0aGlzLmxpc3QgPSBhcnJcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0U3VjY2Vzc2VkKCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgdGhpcy50eXBlLm1hcChhc3luYyBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgIGNvbnN0IGZhaWxlZCA9IGF3YWl0IGFwaS5nZXRSZXBvcnRzKHtcclxuICAgICAgICAgICAgdHlwZTp2YWwsXHJcbiAgICAgICAgICAgIHN0YXR1czonZmFpbGVkJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWlsZWQuZGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICApLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJldHVybiBhcnJcclxuICAgICAgICB0aGlzLmxpc3QgPSBhcnJcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRGYWlsKCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgdGhpcy50eXBlLm1hcChhc3luYyBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgIGNvbnN0IHN1Y2NlZWQgPSBhd2FpdCBhcGkuZ2V0UmVwb3J0cyh7XHJcbiAgICAgICAgICAgIHR5cGU6dmFsLFxyXG4gICAgICAgICAgICBzdGF0dXM6J3N1Y2NlZWQnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIHN1Y2NlZWQuZGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICApLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJldHVybiBhcnJcclxuICAgICAgICB0aGlzLmxpc3QgPSBhcnJcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=