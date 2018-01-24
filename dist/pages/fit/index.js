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

var _pagination = require('./../../mixin/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

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
    }, _this.mixins = [_pagination2.default], _this.data = {
      navs: [{
        text: '套餐介绍',
        selected: true
      }, {
        text: '装修案例',
        selected: false
      }],
      list: null,
      tabIndex: 0,
      page: {
        list: []
      }
    }, _this.methods = {
      toDetail: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  item = this.page.list.filter(function (item) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpdGluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIm1peGlucyIsImRhdGEiLCJuYXZzIiwidGV4dCIsInNlbGVjdGVkIiwibGlzdCIsInRhYkluZGV4IiwicGFnZSIsIm1ldGhvZHMiLCJ0b0RldGFpbCIsImlkIiwiaXRlbSIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJuYXZUYXBFdmVudCIsImluZGV4IiwiZ2V0RGVjb3JhdGVzTGlzdCIsImdldENhc2VMaXN0IiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJkZWNvcmF0ZXMiLCIkYXBwbHkiLCJjYXNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLE1BQXRDLEVBQVAsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLE0sR0FBUyxzQixRQUNUQyxJLEdBQU87QUFDTEMsWUFBSyxDQUFDO0FBQ0pDLGNBQUssTUFERDtBQUVKQyxrQkFBUztBQUZMLE9BQUQsRUFHSDtBQUNBRCxjQUFLLE1BREw7QUFFQUMsa0JBQVM7QUFGVCxPQUhHLENBREE7QUFRTEMsWUFBSyxJQVJBO0FBU0xDLGdCQUFTLENBVEo7QUFVTEMsWUFBTTtBQUNKRixjQUFNO0FBREY7QUFWRCxLLFFBa0JQRyxPLEdBQVU7QUFDRkMsY0FERTtBQUFBLDZGQUNPQyxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBQyxzQkFGQSxHQUVPLEtBQUtKLElBQUwsQ0FBVUYsSUFBVixDQUFlTyxNQUFmLENBQXNCLFVBQUNELElBQUQsRUFBUTtBQUN6QywyQkFBT0EsS0FBS0QsRUFBTCxJQUFXQSxFQUFsQjtBQUNELG1CQUZZLENBRlA7O0FBS05HLDBCQUFRQyxHQUFSLENBQVlILEtBQUssQ0FBTCxDQUFaO0FBTE07QUFBQSx5QkFNQSxlQUFLSSxjQUFMLENBQW9CLFFBQXBCLEVBQThCSixLQUFLLENBQUwsQ0FBOUIsQ0FOQTs7QUFBQTtBQU9OLGlDQUFLSyxVQUFMLENBQWdCO0FBQ2RDLHlCQUFJO0FBRFUsbUJBQWhCOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQWFWQyxNLEdBQVM7QUFDUEMsaUJBRE8sdUJBQ0tDLEtBREwsRUFDWTtBQUNqQixhQUFLZCxRQUFMLEdBQWdCYyxLQUFoQjtBQUNBLFlBQUdBLFNBQU8sQ0FBVixFQUFZO0FBQ1YsZUFBS0MsZ0JBQUw7QUFDRCxTQUZELE1BRUs7QUFDSCxlQUFLQyxXQUFMO0FBQ0Q7QUFDRjtBQVJNLEs7Ozs7Ozs7Ozs7Ozt1QkFXRCxlQUFLQyxpQkFBTCxDQUF1QixRQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdBLGVBQUtBLGlCQUFMLENBQXVCLFFBQXZCLEM7Ozs7dUJBQ0EsS0FBS0YsZ0JBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR2EsY0FBSUcsU0FBSixFOzs7QUFBYnZCLG9COztBQUNOLHFCQUFLSSxJQUFMLEdBQVlKLEtBQUtBLElBQWpCO0FBQ0EscUJBQUt3QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHbUIsY0FBSUMsS0FBSixFOzs7QUFBYnpCLG9COztBQUNOLHFCQUFLSSxJQUFMLEdBQVlKLEtBQUtBLElBQWpCO0FBQ0EscUJBQUt3QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkVrQyxlQUFLbEIsSTs7a0JBQXRCZixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgdGFiIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFiJ1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi4vLi4vbWl4aW4vcGFnaW5hdGlvbidcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXRpbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoo4Xkv67mnI3liqEnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZzLm9uY2VcIjpcIm5hdnNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB0YWI6dGFiXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbIHBhZ2luYXRpb24gXVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmF2czpbe1xyXG4gICAgICAgIHRleHQ6J+Wll+mkkOS7i+e7jScsXHJcbiAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcclxuICAgICAgfSx7XHJcbiAgICAgICAgdGV4dDon6KOF5L+u5qGI5L6LJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgfV0sXHJcbiAgICAgIGxpc3Q6bnVsbCxcclxuICAgICAgdGFiSW5kZXg6MCxcclxuICAgICAgcGFnZToge1xyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIHRvRGV0YWlsKGlkKXtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wYWdlLmxpc3QuZmlsdGVyKChpdGVtKT0+e1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gaWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1bMF0pXHJcbiAgICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlU3luYygnZGV0YWlsJywgaXRlbVswXSlcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOicvcGFnZXMvZml0L2RldGFpbCdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBuYXZUYXBFdmVudChpbmRleCkge1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleFxyXG4gICAgICAgIGlmKGluZGV4PT0wKXtcclxuICAgICAgICAgIHRoaXMuZ2V0RGVjb3JhdGVzTGlzdCgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmdldENhc2VMaXN0KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uU2hvdygpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgICAgYXdhaXQgdGhpcy5nZXREZWNvcmF0ZXNMaXN0KClcclxuICAgIH1cclxuICAgIGFzeW5jIGdldERlY29yYXRlc0xpc3QoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZGVjb3JhdGVzKClcclxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENhc2VMaXN0KCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmNhc2VzKClcclxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==