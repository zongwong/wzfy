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
        text: '跟进中',
        selected: true
      }, {
        text: '已成交',
        selected: false
      }, {
        text: '暂缓',
        selected: false
      }],
      list: [],
      type: ['new-house', 'hand-house', 'finance', 'decorate'],
      status: ['pending', 'processing', 'succeed', 'failed'],
      tabIndex: 0,
      page: 1,
      isEnd: false
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "navs" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.methods = {}, _this.events = {
      navTapEvent: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.isEnd = false;
                  this.page = 1;
                  this.list = [];
                  this.$apply();

                  if (!(index == 0)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 7;
                  return this.getisIng();

                case 7:
                  _context.next = 16;
                  break;

                case 9:
                  if (!(index == 1)) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 12;
                  return this.getSuccessed();

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.next = 16;
                  return this.getFail();

                case 16:
                  this.tabIndex = index;
                  this.$apply();

                case 18:
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
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

        var that;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                _context4.next = 3;
                return Promise.all(this.type.map(function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(val) {
                    var arr, processing;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            console.log('xx return:' + val);
                            arr = [];
                            // const pending = await api.getReports({
                            //   type:val,
                            //   status:'pending',
                            //   page:that.page
                            // })

                            _context3.next = 4;
                            return _api2.default.getReports({
                              type: val,
                              status: 'processing',
                              page: that.page
                            });

                          case 4:
                            processing = _context3.sent;
                            return _context3.abrupt('return', arr.concat(processing.data));

                          case 6:
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
                  if (!arr.length) {
                    _this2.isEnd = true;
                  } else {
                    _this2.list = _this2.timeSort(_this2.list.concat(arr));
                    _this2.list.forEach(function (item) {
                      item.time = item.updated_at.slice(0, 10);
                    });
                  }
                  // return arr
                  // this.list = this.timeSort(this.list.concat(arr))
                  _this2.$apply();
                });

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
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
    key: 'getFail',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this3 = this;

        var that;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = this;
                _context6.next = 3;
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
                              status: 'failed',
                              page: that.page
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
                  if (!arr.length) {
                    _this3.isEnd = true;
                  } else {
                    _this3.list = _this3.timeSort(_this3.list.concat(arr));
                    _this3.list.forEach(function (item) {
                      item.time = item.updated_at.slice(0, 10);
                    });
                  }
                  _this3.$apply();
                });

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getFail() {
        return _ref6.apply(this, arguments);
      }

      return getFail;
    }()
  }, {
    key: 'getSuccessed',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this4 = this;

        var that;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                that = this;
                _context8.next = 3;
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
                              status: 'succeed',
                              page: that.page
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
                  if (!arr.length) {
                    _this4.isEnd = true;
                  } else {
                    _this4.list = _this4.timeSort(_this4.list.concat(arr));
                    _this4.list.forEach(function (item) {
                      console.log(item);
                      item.time = item.updated_at.slice(0, 10);
                    });
                  }
                  _this4.$apply();
                });

              case 3:
                return _context8.abrupt('return', _context8.sent);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getSuccessed() {
        return _ref8.apply(this, arguments);
      }

      return getSuccessed;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.isEnd) {
        return false;
      }
      this.page += 1;
      if (this.tabIndex == 0) {
        this.getisIng();
      } else if (this.tabIndex == 1) {
        this.getSuccessed();
      } else {
        this.getFail();
      }
    }
  }, {
    key: 'timeSort',
    value: function timeSort(arr) {
      return arr.sort(function (a, b) {
        return new Date(b.updated_at.replace(/-/g, '/')).getTime() - new Date(a.updated_at.replace(/-/g, '/')).getTime();
      });
    }
  }]);

  return Recommend;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Recommend , 'pages/user/recommend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJsaXN0IiwidHlwZSIsInN0YXR1cyIsInRhYkluZGV4IiwicGFnZSIsImlzRW5kIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwibWV0aG9kcyIsImV2ZW50cyIsIm5hdlRhcEV2ZW50IiwiaW5kZXgiLCIkYXBwbHkiLCJnZXRpc0luZyIsImdldFN1Y2Nlc3NlZCIsImdldEZhaWwiLCJ0aGF0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJhcnIiLCJnZXRSZXBvcnRzIiwicHJvY2Vzc2luZyIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiaXRlbSIsImxlbmd0aCIsInRpbWVTb3J0IiwidGltZSIsInVwZGF0ZWRfYXQiLCJzbGljZSIsImZhaWxlZCIsInN1Y2NlZWQiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwicmVwbGFjZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNIQyxZQUFLLENBQUM7QUFDRkMsY0FBSyxLQURIO0FBRUZDLGtCQUFTO0FBRlAsT0FBRCxFQUdIO0FBQ0VELGNBQUssS0FEUDtBQUVFQyxrQkFBUztBQUZYLE9BSEcsRUFNSDtBQUNFRCxjQUFLLElBRFA7QUFFRUMsa0JBQVM7QUFGWCxPQU5HLENBREY7QUFXSEMsWUFBSyxFQVhGO0FBWUhDLFlBQUssQ0FBQyxXQUFELEVBQWEsWUFBYixFQUEwQixTQUExQixFQUFvQyxVQUFwQyxDQVpGO0FBYUhDLGNBQU8s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QUtiLFFBQUwsSUFBZSxDQUFsQixFQUFvQjtBQUN4QixhQUFLYyxZQUFMO0FBQ0QsT0FGSyxNQUVEO0FBQ0gsYUFBS0MsT0FBTDtBQUNEO0FBQ0Y7Ozs2QkFDUVEsRyxFQUFLO0FBQ1osYUFBT0EsSUFBSWUsSUFBSixDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVUsSUFBSUMsSUFBSixDQUFTRCxFQUFFTixVQUFGLENBQWFRLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkIsR0FBM0IsQ0FBVCxFQUEwQ0MsT0FBMUMsS0FBc0QsSUFBSUYsSUFBSixDQUFTRixFQUFFTCxVQUFGLENBQWFRLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkIsR0FBM0IsQ0FBVCxFQUEwQ0MsT0FBMUMsRUFBaEU7QUFBQSxPQUFULENBQVA7QUFDRDs7OztFQXRLb0MsZUFBSzFDLEk7O2tCQUF2QlgsUyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWInXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvbW1lbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5o6o6I2QJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbmF2czpbe1xyXG4gICAgICAgICAgICB0ZXh0Oifot5/ov5vkuK0nLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDp0cnVlLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICB0ZXh0Oiflt7LmiJDkuqQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgdGV4dDon5pqC57yTJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgbGlzdDpbXSxcclxuICAgICAgICB0eXBlOlsnbmV3LWhvdXNlJywnaGFuZC1ob3VzZScsJ2ZpbmFuY2UnLCdkZWNvcmF0ZSddLFxyXG4gICAgICAgIHN0YXR1czpbJ3BlbmRpbmcnLCdwcm9jZXNzaW5nJywnc3VjY2VlZCcsJ2ZhaWxlZCddLFxyXG4gICAgICAgIHRhYkluZGV4OjAsXHJcbiAgICAgICAgcGFnZToxLFxyXG4gICAgICAgIGlzRW5kOmZhbHNlXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZzLm9uY2VcIjpcIm5hdnNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB0YWI6dGFiXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBhc3luYyBuYXZUYXBFdmVudChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaXNFbmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGFnZSA9IDFcclxuICAgICAgICB0aGlzLmxpc3QgPSBbXVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICBpZihpbmRleD09MCl7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldGlzSW5nKClcclxuICAgICAgICB9ZWxzZSBpZihpbmRleD09MSl7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldFN1Y2Nlc3NlZCgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLmdldEZhaWwoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXhcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZ2V0aXNJbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldGlzSW5nKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHRoaXMudHlwZS5tYXAoYXN5bmMgZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneHggcmV0dXJuOicrdmFsKVxyXG4gICAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgICAvLyBjb25zdCBwZW5kaW5nID0gYXdhaXQgYXBpLmdldFJlcG9ydHMoe1xyXG4gICAgICAgICAgLy8gICB0eXBlOnZhbCxcclxuICAgICAgICAgIC8vICAgc3RhdHVzOidwZW5kaW5nJyxcclxuICAgICAgICAgIC8vICAgcGFnZTp0aGF0LnBhZ2VcclxuICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0gYXdhaXQgYXBpLmdldFJlcG9ydHMoe1xyXG4gICAgICAgICAgICB0eXBlOnZhbCxcclxuICAgICAgICAgICAgc3RhdHVzOidwcm9jZXNzaW5nJyxcclxuICAgICAgICAgICAgcGFnZTp0aGF0LnBhZ2UsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGFyci5jb25jYXQocHJvY2Vzc2luZy5kYXRhKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICApLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGFyciA9IGFyci5jb25jYXQoaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKCFhcnIubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLnRpbWVTb3J0KHRoaXMubGlzdC5jb25jYXQoYXJyKSlcclxuICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBpdGVtLnVwZGF0ZWRfYXQuc2xpY2UoMCwxMClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gYXJyXHJcbiAgICAgICAgLy8gdGhpcy5saXN0ID0gdGhpcy50aW1lU29ydCh0aGlzLmxpc3QuY29uY2F0KGFycikpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIGdldEZhaWwoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgdGhpcy50eXBlLm1hcChhc3luYyBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgIGNvbnN0IGZhaWxlZCA9IGF3YWl0IGFwaS5nZXRSZXBvcnRzKHtcclxuICAgICAgICAgICAgdHlwZTp2YWwsXHJcbiAgICAgICAgICAgIHN0YXR1czonZmFpbGVkJyxcclxuICAgICAgICAgICAgcGFnZTp0aGF0LnBhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFpbGVkLmRhdGFcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgcmVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBhcnIgPSBhcnIuY29uY2F0KGl0ZW0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighYXJyLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy50aW1lU29ydCh0aGlzLmxpc3QuY29uY2F0KGFycikpXHJcbiAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS50aW1lID0gaXRlbS51cGRhdGVkX2F0LnNsaWNlKDAsMTApXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0U3VjY2Vzc2VkKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHRoaXMudHlwZS5tYXAoYXN5bmMgZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICBjb25zdCBzdWNjZWVkID0gYXdhaXQgYXBpLmdldFJlcG9ydHMoe1xyXG4gICAgICAgICAgICB0eXBlOnZhbCxcclxuICAgICAgICAgICAgc3RhdHVzOidzdWNjZWVkJyxcclxuICAgICAgICAgICAgcGFnZTp0aGF0LnBhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gc3VjY2VlZC5kYXRhXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICkudGhlbigocmVzKT0+e1xyXG4gICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgIHJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgYXJyID0gYXJyLmNvbmNhdChpdGVtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIWFyci5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy5pc0VuZCA9IHRydWVcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMudGltZVNvcnQodGhpcy5saXN0LmNvbmNhdChhcnIpKVxyXG4gICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgIGl0ZW0udGltZSA9IGl0ZW0udXBkYXRlZF9hdC5zbGljZSgwLDEwKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIGlmKHRoaXMuaXNFbmQpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGFnZSArPSAxXHJcbiAgICAgIGlmKHRoaXMudGFiSW5kZXg9PTApe1xyXG4gICAgICAgIHRoaXMuZ2V0aXNJbmcoKVxyXG4gICAgICB9ZWxzZSBpZih0aGlzLnRhYkluZGV4PT0xKXtcclxuICAgICAgICB0aGlzLmdldFN1Y2Nlc3NlZCgpXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuZ2V0RmFpbCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRpbWVTb3J0KGFycikge1xyXG4gICAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIudXBkYXRlZF9hdC5yZXBsYWNlKC8tL2csICcvJykpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEudXBkYXRlZF9hdC5yZXBsYWNlKC8tL2csICcvJykpLmdldFRpbWUoKSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==