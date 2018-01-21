'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 'pages/index/bind',

      'pages/index/index', 'pages/new/map', 'pages/index/city', 'pages/user/user', 'pages/fit/index', 'pages/new/index', 'pages/financial/index', 'pages/house/index', 'pages/house/detail', 'pages/house/form', 'pages/new/detail', 'pages/fit/detail', 'pages/fit/form', 'pages/financial/detail', 'pages/financial/form', 'pages/user/share', 'pages/user/moneydetail', 'pages/user/money', 'pages/user/redetail', 'pages/user/recommend', 'pages/user/msg', 'pages/user/invite'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#000',
        navigationBarTitleText: '万众分佣',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        backgroundColor: '#fff',
        selectedColor: '#ff6340',
        list: [{
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "icon/icon_index.png",
          selectedIconPath: "icon/icon_index_on.png"
        }, {
          pagePath: "pages/user/user",
          text: "我的",
          iconPath: "icon/icon_my.png",
          selectedIconPath: "icon/icon_my_on.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      _wepy2.default.setStorageSync('token', 'GF3HIMALCZEpL7zdexeqavILoQNUmdKh');
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInNldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBNkRFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUExRGZBLE1BMERlLEdBMUROO0FBQ1BDLGFBQU87QUFDQzs7QUFFTix5QkFISyxFQUlMLGVBSkssRUFLTCxrQkFMSyxFQU1MLGlCQU5LLEVBT0wsaUJBUEssRUFRTCxpQkFSSyxFQVNMLHVCQVRLLEVBVUwsbUJBVkssRUFXTCxvQkFYSyxFQVlMLGtCQVpLLEVBYUwsa0JBYkssRUFjTCxrQkFkSyxFQWVMLGdCQWZLLEVBZ0JMLHdCQWhCSyxFQWlCTCxzQkFqQkssRUFrQkwsa0JBbEJLLEVBbUJMLHdCQW5CSyxFQW9CTCxrQkFwQkssRUFxQkwscUJBckJLLEVBc0JMLHNCQXRCSyxFQXVCTCxnQkF2QkssRUF3QkwsbUJBeEJLLENBREE7QUE0QlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0E1QkQ7QUFrQ1BDLGNBQVE7QUFDTkMseUJBQWlCLE1BRFg7QUFFTkMsdUJBQWMsU0FGUjtBQUdOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsbUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxxQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsa0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEk7QUFIQTtBQWxDRCxLQTBETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVU7QUFDVCxxQkFBS0MsY0FBTCxDQUFvQixPQUFwQixFQUE0QixrQ0FBNUI7QUFDRDs7OztFQW5FMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgLy8gJ3BhZ2VzL2luZGV4L2JpbmQnLFxyXG4gICAgICBcclxuICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL25ldy9tYXAnLFxyXG4gICAgICAncGFnZXMvaW5kZXgvY2l0eScsXHJcbiAgICAgICdwYWdlcy91c2VyL3VzZXInLFxyXG4gICAgICAncGFnZXMvZml0L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL25ldy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9maW5hbmNpYWwvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaG91c2UvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaG91c2UvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2hvdXNlL2Zvcm0nLFxyXG4gICAgICAncGFnZXMvbmV3L2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9maXQvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2ZpdC9mb3JtJyxcclxuICAgICAgJ3BhZ2VzL2ZpbmFuY2lhbC9kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvZmluYW5jaWFsL2Zvcm0nLFxyXG4gICAgICAncGFnZXMvdXNlci9zaGFyZScsXHJcbiAgICAgICdwYWdlcy91c2VyL21vbmV5ZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvbW9uZXknLFxyXG4gICAgICAncGFnZXMvdXNlci9yZWRldGFpbCcsXHJcbiAgICAgICdwYWdlcy91c2VyL3JlY29tbWVuZCcsXHJcbiAgICAgICdwYWdlcy91c2VyL21zZycsXHJcbiAgICAgICdwYWdlcy91c2VyL2ludml0ZScsXHJcbiAgICAgIFxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIfkvJfliIbkvaMnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY2MzQwJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9pY29uX2luZGV4LnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2ljb25faW5kZXhfb24ucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2ljb25fbXkucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vaWNvbl9teV9vbi5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW4nLCdHRjNISU1BTENaRXBMN3pkZXhlcWF2SUxvUU5VbWRLaCcpO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=