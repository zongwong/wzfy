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

var Fitindex = function (_wepy$page) {
  _inherits(Fitindex, _wepy$page);

  function Fitindex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fitindex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fitindex.__proto__ || Object.getPrototypeOf(Fitindex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '装修服务'
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "navs" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.data = {
      navs: [{
        text: '套餐介绍',
        selected: true
      }, {
        text: '装修案例',
        selected: false
      }],
      list: null,
      tabIndex: 0
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
                    url: '/pages/fit/detail'
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
    }, _this.events = {
      navTapEvent: function navTapEvent(index) {
        this.tabIndex = index;
        if (index == 0) {
          this.getDecoratesList();
        } else {
          this.getCaseList();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fitindex, [{
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
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.removeStorageSync('detail');

              case 2:
                _context3.next = 4;
                return this.getDecoratesList();

              case 4:
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
  }, {
    key: 'getDecoratesList',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api2.default.decorates();

              case 2:
                data = _context4.sent;

                this.list = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDecoratesList() {
        return _ref5.apply(this, arguments);
      }

      return getDecoratesList;
    }()
  }, {
    key: 'getCaseList',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api2.default.cases();

              case 2:
                data = _context5.sent;

                this.list = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCaseList() {
        return _ref6.apply(this, arguments);
      }

      return getCaseList;
    }()
  }]);

  return Fitindex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Fitindex , 'pages/fit/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpdGluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsImRhdGEiLCJuYXZzIiwidGV4dCIsInNlbGVjdGVkIiwibGlzdCIsInRhYkluZGV4IiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIm5hdlRhcEV2ZW50IiwiaW5kZXgiLCJnZXREZWNvcmF0ZXNMaXN0IiwiZ2V0Q2FzZUxpc3QiLCJyZW1vdmVTdG9yYWdlU3luYyIsImRlY29yYXRlcyIsIiRhcHBseSIsImNhc2VzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsWUFBSyxDQUFDO0FBQ0pDLGNBQUssTUFERDtBQUVKQyxrQkFBUztBQUZMLE9BQUQsRUFHSDtBQUNBRCxjQUFLLE1BREw7QUFFQUMsa0JBQVM7QUFGVCxPQUhHLENBREE7QUFRTEMsWUFBSyxJQVJBO0FBU0xDLGdCQUFTO0FBVEosSyxRQWNQQyxPLEdBQVU7QUFDRkMsY0FERTtBQUFBLDZGQUNPQyxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQyxzQkFGQSxHQUVPLEtBQUtMLElBQUwsQ0FBVU0sTUFBVixDQUFpQixVQUFDRCxJQUFELEVBQVE7QUFDcEMsMkJBQU9BLEtBQUtELEVBQUwsSUFBV0EsRUFBbEI7QUFDRCxtQkFGWSxDQUZQOztBQUtORywwQkFBUUMsR0FBUixDQUFZSCxLQUFLLENBQUwsQ0FBWjtBQUxNO0FBQUEseUJBTUEsZUFBS0ksY0FBTCxDQUFvQixRQUFwQixFQUE4QkosS0FBSyxDQUFMLENBQTlCLENBTkE7O0FBQUE7QUFPTixpQ0FBS0ssVUFBTCxDQUFnQjtBQUNkQyx5QkFBSTtBQURVLG1CQUFoQjs7QUFQTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUFhVkMsTSxHQUFTO0FBQ1BDLGlCQURPLHVCQUNLQyxLQURMLEVBQ1k7QUFDakIsYUFBS2IsUUFBTCxHQUFnQmEsS0FBaEI7QUFDQSxZQUFHQSxTQUFPLENBQVYsRUFBWTtBQUNWLGVBQUtDLGdCQUFMO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZUFBS0MsV0FBTDtBQUNEO0FBQ0Y7QUFSTSxLOzs7Ozs7Ozs7Ozs7dUJBV0QsZUFBS0MsaUJBQUwsQ0FBdUIsUUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHQSxlQUFLQSxpQkFBTCxDQUF1QixRQUF2QixDOzs7O3VCQUNBLEtBQUtGLGdCQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdhLGNBQUlHLFNBQUosRTs7O0FBQWJ0QixvQjs7QUFDTixxQkFBS0ksSUFBTCxHQUFZSixLQUFLQSxJQUFqQjtBQUNBLHFCQUFLdUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR21CLGNBQUlDLEtBQUosRTs7O0FBQWJ4QixvQjs7QUFDTixxQkFBS0ksSUFBTCxHQUFZSixLQUFLQSxJQUFqQjtBQUNBLHFCQUFLdUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlEa0MsZUFBS0UsSTs7a0JBQXRCakMsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRhYiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYidcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpdGluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ijheS/ruacjeWKoSdcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm5hdnMub25jZVwiOlwibmF2c1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRhYjp0YWJcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdnM6W3tcclxuICAgICAgICB0ZXh0OiflpZfppJDku4vnu40nLFxyXG4gICAgICAgIHNlbGVjdGVkOnRydWUsXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHRleHQ6J+ijheS/ruahiOS+iycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgIH1dLFxyXG4gICAgICBsaXN0Om51bGwsXHJcbiAgICAgIHRhYkluZGV4OjBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyB0b0RldGFpbChpZCl7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdC5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbVswXSlcclxuICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdkZXRhaWwnLCBpdGVtWzBdKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6Jy9wYWdlcy9maXQvZGV0YWlsJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIG5hdlRhcEV2ZW50KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4XHJcbiAgICAgICAgaWYoaW5kZXg9PTApe1xyXG4gICAgICAgICAgdGhpcy5nZXREZWNvcmF0ZXNMaXN0KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuZ2V0Q2FzZUxpc3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgICBhd2FpdCB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdkZXRhaWwnKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBhd2FpdCB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdkZXRhaWwnKVxyXG4gICAgICBhd2FpdCB0aGlzLmdldERlY29yYXRlc0xpc3QoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0RGVjb3JhdGVzTGlzdCgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5kZWNvcmF0ZXMoKVxyXG4gICAgICB0aGlzLmxpc3QgPSBkYXRhLmRhdGFcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Q2FzZUxpc3QoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuY2FzZXMoKVxyXG4gICAgICB0aGlzLmxpc3QgPSBkYXRhLmRhdGFcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19