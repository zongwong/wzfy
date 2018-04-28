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

var _tab = require('./../../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

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
      navigationBarTitleText: '新房详情'
      // usingComponents: {
      //   'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
      //   'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
      //   'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label'
      // }
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "nav" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.data = {
      tabs: [{ title: '客户规则' }, { title: '在售户型' }, { title: '楼盘卖点' }, { title: '楼盘信息' }],
      nav: [{
        text: '客户规则',
        selected: true
      }, {
        text: '在售户型',
        selected: false
      }, {
        text: '楼盘卖点',
        selected: false
      }, {
        text: '楼盘信息',
        selected: false
      }],
      activeKey: 1,
      info: null,
      saleList: [],
      nowImgIndex: 1,
      index: 0
    }, _this.events = {
      navTapEvent: function navTapEvent(index) {
        this.index = index;
      }
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
        var that = this;
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function success(res) {
            var latitude = res.latitude;
            var longitude = res.longitude;
            console.log(res);
            wx.openLocation({
              latitude: latitude,
              longitude: longitude,
              scale: 28
              //name:that.info.title,
              //address:that.info.address
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fitdetail, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsIm5hdiIsInRleHQiLCJzZWxlY3RlZCIsImFjdGl2ZUtleSIsImluZm8iLCJzYWxlTGlzdCIsIm5vd0ltZ0luZGV4IiwiaW5kZXgiLCJldmVudHMiLCJuYXZUYXBFdmVudCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjb21wb25lbnRJZCIsImtleSIsImlkeCIsInN3aXBlckNoYW5nZSIsImN1cnJlbnQiLCJ0b01hcCIsInRoYXQiLCJ3eCIsImdldExvY2F0aW9uIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9wZW5Mb2NhdGlvbiIsInNjYWxlIiwib3B0aW9ucyIsImJ1aWxkSW5mbyIsImlkIiwic2FsZVR5cGUiLCIkYXBwbHkiLCJ3eFBhcnNlIiwicnVsZXMiLCJzZWxsaW5nX3BvaW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5PLEssUUFTVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixLQUF0QyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU8sTUFBUixFQURJLEVBRUosRUFBQ0EsT0FBTyxNQUFSLEVBRkksRUFHSixFQUFDQSxPQUFPLE1BQVIsRUFISSxFQUlKLEVBQUNBLE9BQU8sTUFBUixFQUpJLENBREQ7QUFPTEMsV0FBSSxDQUFDO0FBQ0hDLGNBQUssTUFERjtBQUVIQyxrQkFBUztBQUZOLE9BQUQsRUFHRjtBQUNBRCxjQUFLLE1BREw7QUFFQUMsa0JBQVM7QUFGVCxPQUhFLEVBTUY7QUFDQUQsY0FBSyxNQURMO0FBRUFDLGtCQUFTO0FBRlQsT0FORSxFQVNGO0FBQ0FELGNBQUssTUFETDtBQUVBQyxrQkFBUztBQUZULE9BVEUsQ0FQQztBQW9CTEMsaUJBQVcsQ0FwQk47QUFxQkxDLFlBQUssSUFyQkE7QUFzQkxDLGdCQUFTLEVBdEJKO0FBdUJMQyxtQkFBWSxDQXZCUDtBQXdCTEMsYUFBTTtBQXhCRCxLLFFBNEJQQyxNLEdBQU87QUFDTEMsaUJBREssdUJBQ09GLEtBRFAsRUFDYTtBQUNoQixhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDtBQUhJLEssUUFNUEcsTyxHQUFVO0FBQ1JDLGVBQVMsaUJBQVNDLENBQVQsRUFBWTtBQUNuQkMsZ0JBQVFDLEdBQVIsa0JBQTJCRixFQUFFRyxNQUFGLENBQVNDLFdBQXBDLHNCQUFnRUosRUFBRUcsTUFBRixDQUFTRSxHQUF6RTtBQUNBLFlBQU1DLE1BQU1OLEVBQUVHLE1BQUYsQ0FBU0UsR0FBckI7QUFDQSxhQUFLZCxTQUFMLEdBQWlCZSxHQUFqQjtBQUNELE9BTE87QUFNUkMsa0JBTlEsd0JBTUtQLENBTkwsRUFNUTtBQUNkLGFBQUtOLFdBQUwsR0FBbUJNLEVBQUVHLE1BQUYsQ0FBU0ssT0FBVCxHQUFtQixDQUF0QztBQUNELE9BUk87QUFTUkMsV0FUUSxtQkFTRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHQyxXQUFILENBQWU7QUFDYkMsZ0JBQU0sT0FETyxFQUNFO0FBQ2ZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlDLFdBQVdELElBQUlDLFFBQW5CO0FBQ0EsZ0JBQUlDLFlBQVlGLElBQUlFLFNBQXBCO0FBQ0FoQixvQkFBUUMsR0FBUixDQUFZYSxHQUFaO0FBQ0FKLGVBQUdPLFlBQUgsQ0FBZ0I7QUFDZEYsd0JBQVVBLFFBREk7QUFFZEMseUJBQVdBLFNBRkc7QUFHZEUscUJBQU87QUFDUDtBQUNBO0FBTGMsYUFBaEI7QUFPRDtBQWJZLFNBQWY7QUFlRDtBQTFCTyxLOzs7Ozt3Q0FEUyxDQUFFOzs7OzJGQThCUkMsTzs7Ozs7Ozt1QkFDUSxjQUFJQyxTQUFKLENBQWNELFFBQVFFLEVBQXRCLEM7OztBQUFickMsb0I7O3VCQUNpQixjQUFJc0MsUUFBSixDQUFhSCxRQUFRRSxFQUFyQixDOzs7QUFBakI3Qix3Qjs7QUFDTixxQkFBS0QsSUFBTCxHQUFZUCxJQUFaO0FBQ0EscUJBQUtRLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUsrQixNQUFMO0FBQ0Esa0NBQVFDLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBekIsRUFBaUN4QyxLQUFLeUMsS0FBdEMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBbkQ7QUFDQSxrQ0FBUUQsT0FBUixDQUFnQixlQUFoQixFQUFpQyxNQUFqQyxFQUF5Q3hDLEtBQUswQyxhQUE5QyxFQUE2RCxJQUE3RCxFQUFtRSxDQUFuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRGbUMsZUFBS0MsSTs7a0JBQXZCbkQsUyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vd3hQYXJzZS93eFBhcnNlLmpzJ1xyXG4gIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWInXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0ZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+ivpuaDhScsXHJcbiAgICAgIC8vIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAvLyAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAvLyAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxyXG4gICAgICAvLyAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnXHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZzLm9uY2VcIjpcIm5hdlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRhYjp0YWJcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRhYnM6IFtcclxuICAgICAgICB7dGl0bGU6ICflrqLmiLfop4TliJknfSxcclxuICAgICAgICB7dGl0bGU6ICflnKjllK7miLflnosnfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jljZbngrknfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jkv6Hmga8nfVxyXG4gICAgICBdLFxyXG4gICAgICBuYXY6W3tcclxuICAgICAgICB0ZXh0OiflrqLmiLfop4TliJknLFxyXG4gICAgICAgIHNlbGVjdGVkOnRydWVcclxuICAgICAgfSx7XHJcbiAgICAgICAgdGV4dDon5Zyo5ZSu5oi35Z6LJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICB0ZXh0Oifmpbznm5jljZbngrknLFxyXG4gICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHRleHQ6J+alvOebmOS/oeaBrycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgfV0sXHJcbiAgICAgIGFjdGl2ZUtleTogMSxcclxuICAgICAgaW5mbzpudWxsLFxyXG4gICAgICBzYWxlTGlzdDpbXSxcclxuICAgICAgbm93SW1nSW5kZXg6MSxcclxuICAgICAgaW5kZXg6MFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZXZlbnRzPXtcclxuICAgICAgbmF2VGFwRXZlbnQoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IGUuZGV0YWlsLmtleTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IGlkeFxyXG4gICAgICB9LFxyXG4gICAgICBzd2lwZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMubm93SW1nSW5kZXggPSBlLmRldGFpbC5jdXJyZW50ICsgMVxyXG4gICAgICB9LFxyXG4gICAgICB0b01hcCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgdmFyIGxhdGl0dWRlID0gcmVzLmxhdGl0dWRlXHJcbiAgICAgICAgICAgIHZhciBsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgd3gub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgc2NhbGU6IDI4LFxyXG4gICAgICAgICAgICAgIC8vbmFtZTp0aGF0LmluZm8udGl0bGUsXHJcbiAgICAgICAgICAgICAgLy9hZGRyZXNzOnRoYXQuaW5mby5hZGRyZXNzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYnVpbGRJbmZvKG9wdGlvbnMuaWQpXHJcbiAgICAgIGNvbnN0IHNhbGVMaXN0ID0gYXdhaXQgYXBpLnNhbGVUeXBlKG9wdGlvbnMuaWQpXHJcbiAgICAgIHRoaXMuaW5mbyA9IGRhdGFcclxuICAgICAgdGhpcy5zYWxlTGlzdCA9IHNhbGVMaXN0XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgV3hQYXJzZS53eFBhcnNlKCdydWxlcycsICdodG1sJywgZGF0YS5ydWxlcywgdGhpcywgNClcclxuICAgICAgV3hQYXJzZS53eFBhcnNlKCdzZWxsaW5nX3BvaW50JywgJ2h0bWwnLCBkYXRhLnNlbGxpbmdfcG9pbnQsIHRoaXMsIDQpXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ==