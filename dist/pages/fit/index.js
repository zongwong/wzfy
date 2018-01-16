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
    }, _this.methods = {}, _this.events = {
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
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getDecoratesList();

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
    key: 'getDecoratesList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.decorates();

              case 2:
                data = _context2.sent;

                this.list = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDecoratesList() {
        return _ref3.apply(this, arguments);
      }

      return getDecoratesList;
    }()
  }, {
    key: 'getCaseList',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.cases();

              case 2:
                data = _context3.sent;

                this.list = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCaseList() {
        return _ref4.apply(this, arguments);
      }

      return getCaseList;
    }()
  }]);

  return Fitindex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Fitindex , 'pages/fit/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZpdGluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsImRhdGEiLCJuYXZzIiwidGV4dCIsInNlbGVjdGVkIiwibGlzdCIsInRhYkluZGV4IiwibWV0aG9kcyIsImV2ZW50cyIsIm5hdlRhcEV2ZW50IiwiaW5kZXgiLCJnZXREZWNvcmF0ZXNMaXN0IiwiZ2V0Q2FzZUxpc3QiLCJkZWNvcmF0ZXMiLCIkYXBwbHkiLCJjYXNlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsTUFBdEMsRUFBUCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsSSxHQUFPO0FBQ0xDLFlBQUssQ0FBQztBQUNKQyxjQUFLLE1BREQ7QUFFSkMsa0JBQVM7QUFGTCxPQUFELEVBR0g7QUFDQUQsY0FBSyxNQURMO0FBRUFDLGtCQUFTO0FBRlQsT0FIRyxDQURBO0FBUUxDLFlBQUssSUFSQTtBQVNMQyxnQkFBUztBQVRKLEssUUFjUEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTO0FBQ1BDLGlCQURPLHVCQUNLQyxLQURMLEVBQ1k7QUFDakIsYUFBS0osUUFBTCxHQUFnQkksS0FBaEI7QUFDQSxZQUFHQSxTQUFPLENBQVYsRUFBWTtBQUNWLGVBQUtDLGdCQUFMO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZUFBS0MsV0FBTDtBQUNEO0FBQ0Y7QUFSTSxLOzs7Ozs7Ozs7Ozs7dUJBWUQsS0FBS0QsZ0JBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR2EsY0FBSUUsU0FBSixFOzs7QUFBYlosb0I7O0FBQ04scUJBQUtJLElBQUwsR0FBWUosS0FBS0EsSUFBakI7QUFDQSxxQkFBS2EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR21CLGNBQUlDLEtBQUosRTs7O0FBQWJkLG9COztBQUNOLHFCQUFLSSxJQUFMLEdBQVlKLEtBQUtBLElBQWpCO0FBQ0EscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRGtDLGVBQUtFLEk7O2tCQUF0QnZCLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWInXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXRpbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoo4Xkv67mnI3liqEnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZzLm9uY2VcIjpcIm5hdnNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB0YWI6dGFiXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYXZzOlt7XHJcbiAgICAgICAgdGV4dDon5aWX6aSQ5LuL57uNJyxcclxuICAgICAgICBzZWxlY3RlZDp0cnVlLFxyXG4gICAgICB9LHtcclxuICAgICAgICB0ZXh0Oifoo4Xkv67moYjkvosnLFxyXG4gICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICB9XSxcclxuICAgICAgbGlzdDpudWxsLFxyXG4gICAgICB0YWJJbmRleDowXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIG5hdlRhcEV2ZW50KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4XHJcbiAgICAgICAgaWYoaW5kZXg9PTApe1xyXG4gICAgICAgICAgdGhpcy5nZXREZWNvcmF0ZXNMaXN0KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuZ2V0Q2FzZUxpc3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5nZXREZWNvcmF0ZXNMaXN0KClcclxuICAgIH1cclxuICAgIGFzeW5jIGdldERlY29yYXRlc0xpc3QoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZGVjb3JhdGVzKClcclxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENhc2VMaXN0KCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmNhc2VzKClcclxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5kYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==