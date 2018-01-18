'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fitdetail = function (_wepy$page) {
  _inherits(Fitdetail, _wepy$page);

  function Fitdetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fitdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fitdetail.__proto__ || Object.getPrototypeOf(Fitdetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '新房详情',
      usingComponents: {
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label'
      }
    }, _this.data = {
      tabs: [{ title: '客户规则' }, { title: '在售户型' }, { title: '楼盘卖点' }, { title: '楼盘信息' }],
      activeKey: 1,
      info: null
    }, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
        var idx = e.detail.key;
        this.activeKey = idx;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fitdetail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.buildInfo(options.id);

              case 2:
                data = _context.sent;

                this.info = data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Fitdetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Fitdetail , 'pages/new/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsImluZm8iLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJpZHgiLCJldmVudHMiLCJvcHRpb25zIiwiYnVpbGRJbmZvIiwiaWQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLDBDQURJO0FBRWYseUJBQWlCLDBDQUZGO0FBR2YseUJBQWlCO0FBSEY7QUFGVixLLFFBU1RDLEksR0FBTztBQUNMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxNQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLE1BQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sTUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxNQUFSLEVBSkksQ0FERDtBQU9MQyxpQkFBVyxDQVBOO0FBUUxDLFlBQUs7QUFSQSxLLFFBYVBDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDbkJDLGdCQUFRQyxHQUFSLGtCQUEyQkYsRUFBRUcsTUFBRixDQUFTQyxXQUFwQyxzQkFBZ0VKLEVBQUVHLE1BQUYsQ0FBU0UsR0FBekU7QUFDQSxZQUFNQyxNQUFNTixFQUFFRyxNQUFGLENBQVNFLEdBQXJCO0FBQ0EsYUFBS1QsU0FBTCxHQUFpQlUsR0FBakI7QUFDRDtBQUxPLEssUUFRVkMsTSxHQUFTLEU7Ozs7OzsyRkFJSUMsTzs7Ozs7Ozt1QkFDUSxjQUFJQyxTQUFKLENBQWNELFFBQVFFLEVBQXRCLEM7OztBQUFiakIsb0I7O0FBQ04scUJBQUtJLElBQUwsR0FBWUosSUFBWjtBQUNBLHFCQUFLa0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRDbUMsZUFBS0MsSTs7a0JBQXZCdkIsUyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0ZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+ivpuaDhScsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB0YWJzOiBbXHJcbiAgICAgICAge3RpdGxlOiAn5a6i5oi36KeE5YiZJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5Zyo5ZSu5oi35Z6LJ30sXHJcbiAgICAgICAge3RpdGxlOiAn5qW855uY5Y2W54K5J30sXHJcbiAgICAgICAge3RpdGxlOiAn5qW855uY5L+h5oGvJ31cclxuICAgICAgXSxcclxuICAgICAgYWN0aXZlS2V5OiAxLFxyXG4gICAgICBpbmZvOm51bGxcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKTtcclxuICAgICAgICBjb25zdCBpZHggPSBlLmRldGFpbC5rZXk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZHhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5idWlsZEluZm8ob3B0aW9ucy5pZClcclxuICAgICAgdGhpcy5pbmZvID0gZGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=