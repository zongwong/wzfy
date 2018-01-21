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
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

              case 9:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsImluZm8iLCJzYWxlTGlzdCIsIm5vd0ltZ0luZGV4IiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwiaWR4Iiwic3dpcGVyQ2hhbmdlIiwiY3VycmVudCIsInRvTWFwIiwid3giLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJzdWNjZXNzIiwicmVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJvcGVuTG9jYXRpb24iLCJzY2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwiZXZlbnRzIiwib3B0aW9ucyIsImJ1aWxkSW5mbyIsImlkIiwic2FsZVR5cGUiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLDBDQURJO0FBRWYseUJBQWlCLDBDQUZGO0FBR2YseUJBQWlCO0FBSEY7QUFGVixLLFFBU1RDLEksR0FBTztBQUNMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxNQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLE1BQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sTUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxNQUFSLEVBSkksQ0FERDtBQU9MQyxpQkFBVyxDQVBOO0FBUUxDLFlBQUssSUFSQTtBQVNMQyxnQkFBUyxFQVRKO0FBVUxDLG1CQUFZO0FBVlAsSyxRQWVQQyxPLEdBQVU7QUFDUkMsZUFBUyxpQkFBU0MsQ0FBVCxFQUFZO0FBQ25CQyxnQkFBUUMsR0FBUixrQkFBMkJGLEVBQUVHLE1BQUYsQ0FBU0MsV0FBcEMsc0JBQWdFSixFQUFFRyxNQUFGLENBQVNFLEdBQXpFO0FBQ0EsWUFBTUMsTUFBTU4sRUFBRUcsTUFBRixDQUFTRSxHQUFyQjtBQUNBLGFBQUtYLFNBQUwsR0FBaUJZLEdBQWpCO0FBQ0QsT0FMTztBQU1SQyxrQkFOUSx3QkFNS1AsQ0FOTCxFQU1RO0FBQ2QsYUFBS0gsV0FBTCxHQUFtQkcsRUFBRUcsTUFBRixDQUFTSyxPQUFULEdBQW1CLENBQXRDO0FBQ0QsT0FSTztBQVNSQyxXQVRRLG1CQVNEO0FBQ0xDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxnQkFBTSxPQURPLEVBQ0U7QUFDZkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUMsV0FBV0QsSUFBSUMsUUFBbkI7QUFDQSxnQkFBSUMsWUFBWUYsSUFBSUUsU0FBcEI7QUFDQWYsb0JBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBSixlQUFHTyxZQUFILENBQWdCO0FBQ2RGLHdCQUFVQSxRQURJO0FBRWRDLHlCQUFXQSxTQUZHO0FBR2RFLHFCQUFPLEVBSE87QUFJZEMsb0JBQUssS0FKUztBQUtkQyx1QkFBUTtBQUxNLGFBQWhCO0FBT0Q7QUFiWSxTQUFmO0FBZUQ7QUF6Qk8sSyxRQTRCVkMsTSxHQUFTLEU7Ozs7OzsyRkFJSUMsTzs7Ozs7Ozt1QkFDUSxjQUFJQyxTQUFKLENBQWNELFFBQVFFLEVBQXRCLEM7OztBQUFiakMsb0I7O3VCQUNpQixjQUFJa0MsUUFBSixDQUFhSCxRQUFRRSxFQUFyQixDOzs7QUFBakI1Qix3Qjs7QUFDTixxQkFBS0QsSUFBTCxHQUFZSixJQUFaO0FBQ0EscUJBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUs4QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOURtQyxlQUFLQyxJOztrQkFBdkJ4QyxTIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXRkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5oi/6K+m5oOFJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRhYnM6IFtcclxuICAgICAgICB7dGl0bGU6ICflrqLmiLfop4TliJknfSxcclxuICAgICAgICB7dGl0bGU6ICflnKjllK7miLflnosnfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jljZbngrknfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jkv6Hmga8nfVxyXG4gICAgICBdLFxyXG4gICAgICBhY3RpdmVLZXk6IDEsXHJcbiAgICAgIGluZm86bnVsbCxcclxuICAgICAgc2FsZUxpc3Q6W10sXHJcbiAgICAgIG5vd0ltZ0luZGV4OjFcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKTtcclxuICAgICAgICBjb25zdCBpZHggPSBlLmRldGFpbC5rZXk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZHhcclxuICAgICAgfSxcclxuICAgICAgc3dpcGVyQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLm5vd0ltZ0luZGV4ID0gZS5kZXRhaWwuY3VycmVudCArIDFcclxuICAgICAgfSxcclxuICAgICAgdG9NYXAoKXtcclxuICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiAnZ2NqMDInLCAvL+i/lOWbnuWPr+S7peeUqOS6jnd4Lm9wZW5Mb2NhdGlvbueahOe7j+e6rOW6plxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXRpdHVkZSA9IHJlcy5sYXRpdHVkZVxyXG4gICAgICAgICAgICB2YXIgbG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHd4Lm9wZW5Mb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICAgIHNjYWxlOiAyOCxcclxuICAgICAgICAgICAgICBuYW1lOicxMjMnLFxyXG4gICAgICAgICAgICAgIGFkZHJlc3M6JzEyMydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmJ1aWxkSW5mbyhvcHRpb25zLmlkKVxyXG4gICAgICBjb25zdCBzYWxlTGlzdCA9IGF3YWl0IGFwaS5zYWxlVHlwZShvcHRpb25zLmlkKVxyXG4gICAgICB0aGlzLmluZm8gPSBkYXRhXHJcbiAgICAgIHRoaXMuc2FsZUxpc3QgPSBzYWxlTGlzdFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=