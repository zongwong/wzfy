'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

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
      info: null,
      saleList: [],
      nowImgIndex: 1
    }, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
        var idx = e.detail.key;
        this.activeKey = idx;
      },
      swiperChange: function swiperChange(e) {
        this.nowImgIndex = e.detail.current + 1;
      },
      toMap: function toMap() {
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function success(res) {
            var latitude = res.latitude;
            var longitude = res.longitude;
            console.log(res);
            wx.openLocation({
              latitude: latitude,
              longitude: longitude,
              scale: 28,
              name: '123',
              address: '123'
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fitdetail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var data, saleList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.buildInfo(options.id);

              case 2:
                data = _context.sent;
                _context.next = 5;
                return _api2.default.saleType(options.id);

              case 5:
                saleList = _context.sent;

                this.info = data;
                this.saleList = saleList;
                this.$apply();
                _wxParse2.default.wxParse('rules', 'html', data.rules, this, 4);
                _wxParse2.default.wxParse('selling_point', 'html', data.selling_point, this, 4);

              case 11:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsImluZm8iLCJzYWxlTGlzdCIsIm5vd0ltZ0luZGV4IiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwiaWR4Iiwic3dpcGVyQ2hhbmdlIiwiY3VycmVudCIsInRvTWFwIiwid3giLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJzdWNjZXNzIiwicmVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJvcGVuTG9jYXRpb24iLCJzY2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwib3B0aW9ucyIsImJ1aWxkSW5mbyIsImlkIiwic2FsZVR5cGUiLCIkYXBwbHkiLCJ3eFBhcnNlIiwicnVsZXMiLCJzZWxsaW5nX3BvaW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLDBDQURJO0FBRWYseUJBQWlCLDBDQUZGO0FBR2YseUJBQWlCO0FBSEY7QUFGVixLLFFBU1RDLEksR0FBTztBQUNMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxNQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLE1BQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sTUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxNQUFSLEVBSkksQ0FERDtBQU9MQyxpQkFBVyxDQVBOO0FBUUxDLFlBQUssSUFSQTtBQVNMQyxnQkFBUyxFQVRKO0FBVUxDLG1CQUFZO0FBVlAsSyxRQWVQQyxPLEdBQVU7QUFDUkMsZUFBUyxpQkFBU0MsQ0FBVCxFQUFZO0FBQ25CQyxnQkFBUUMsR0FBUixrQkFBMkJGLEVBQUVHLE1BQUYsQ0FBU0MsV0FBcEMsc0JBQWdFSixFQUFFRyxNQUFGLENBQVNFLEdBQXpFO0FBQ0EsWUFBTUMsTUFBTU4sRUFBRUcsTUFBRixDQUFTRSxHQUFyQjtBQUNBLGFBQUtYLFNBQUwsR0FBaUJZLEdBQWpCO0FBQ0QsT0FMTztBQU1SQyxrQkFOUSx3QkFNS1AsQ0FOTCxFQU1RO0FBQ2QsYUFBS0gsV0FBTCxHQUFtQkcsRUFBRUcsTUFBRixDQUFTSyxPQUFULEdBQW1CLENBQXRDO0FBQ0QsT0FSTztBQVNSQyxXQVRRLG1CQVNEO0FBQ0xDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxnQkFBTSxPQURPLEVBQ0U7QUFDZkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUMsV0FBV0QsSUFBSUMsUUFBbkI7QUFDQSxnQkFBSUMsWUFBWUYsSUFBSUUsU0FBcEI7QUFDQWYsb0JBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBSixlQUFHTyxZQUFILENBQWdCO0FBQ2RGLHdCQUFVQSxRQURJO0FBRWRDLHlCQUFXQSxTQUZHO0FBR2RFLHFCQUFPLEVBSE87QUFJZEMsb0JBQUssS0FKUztBQUtkQyx1QkFBUTtBQUxNLGFBQWhCO0FBT0Q7QUFiWSxTQUFmO0FBZUQ7QUF6Qk8sSzs7Ozs7OzJGQTRCR0MsTzs7Ozs7Ozt1QkFDUSxjQUFJQyxTQUFKLENBQWNELFFBQVFFLEVBQXRCLEM7OztBQUFiaEMsb0I7O3VCQUNpQixjQUFJaUMsUUFBSixDQUFhSCxRQUFRRSxFQUFyQixDOzs7QUFBakIzQix3Qjs7QUFDTixxQkFBS0QsSUFBTCxHQUFZSixJQUFaO0FBQ0EscUJBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUs2QixNQUFMO0FBQ0Esa0NBQVFDLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBekIsRUFBaUNuQyxLQUFLb0MsS0FBdEMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBbkQ7QUFDQSxrQ0FBUUQsT0FBUixDQUFnQixlQUFoQixFQUFpQyxNQUFqQyxFQUF5Q25DLEtBQUtxQyxhQUE5QyxFQUE2RCxJQUE3RCxFQUFtRSxDQUFuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVEbUMsZUFBS0MsSTs7a0JBQXZCMUMsUyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vd3hQYXJzZS93eFBhcnNlLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpdGRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDmiL/or6bmg4UnLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcclxuICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdGFiczogW1xyXG4gICAgICAgIHt0aXRsZTogJ+WuouaIt+inhOWImSd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+WcqOWUruaIt+Weiyd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+alvOebmOWNlueCuSd9LFxyXG4gICAgICAgIHt0aXRsZTogJ+alvOebmOS/oeaBryd9XHJcbiAgICAgIF0sXHJcbiAgICAgIGFjdGl2ZUtleTogMSxcclxuICAgICAgaW5mbzpudWxsLFxyXG4gICAgICBzYWxlTGlzdDpbXSxcclxuICAgICAgbm93SW1nSW5kZXg6MVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IGUuZGV0YWlsLmtleTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IGlkeFxyXG4gICAgICB9LFxyXG4gICAgICBzd2lwZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMubm93SW1nSW5kZXggPSBlLmRldGFpbC5jdXJyZW50ICsgMVxyXG4gICAgICB9LFxyXG4gICAgICB0b01hcCgpe1xyXG4gICAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgdmFyIGxhdGl0dWRlID0gcmVzLmxhdGl0dWRlXHJcbiAgICAgICAgICAgIHZhciBsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgd3gub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgc2NhbGU6IDI4LFxyXG4gICAgICAgICAgICAgIG5hbWU6JzEyMycsXHJcbiAgICAgICAgICAgICAgYWRkcmVzczonMTIzJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmJ1aWxkSW5mbyhvcHRpb25zLmlkKVxyXG4gICAgICBjb25zdCBzYWxlTGlzdCA9IGF3YWl0IGFwaS5zYWxlVHlwZShvcHRpb25zLmlkKVxyXG4gICAgICB0aGlzLmluZm8gPSBkYXRhXHJcbiAgICAgIHRoaXMuc2FsZUxpc3QgPSBzYWxlTGlzdFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIFd4UGFyc2Uud3hQYXJzZSgncnVsZXMnLCAnaHRtbCcsIGRhdGEucnVsZXMsIHRoaXMsIDQpXHJcbiAgICAgIFd4UGFyc2Uud3hQYXJzZSgnc2VsbGluZ19wb2ludCcsICdodG1sJywgZGF0YS5zZWxsaW5nX3BvaW50LCB0aGlzLCA0KVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=