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
      pages: ['pages/user/user',
      // 'pages/index/bind',
      'pages/fit/index', 'pages/new/index', 'pages/financial/index', 'pages/house/index', 'pages/house/detail', 'pages/house/form', 'pages/index/index', 'pages/new/detail', 'pages/fit/detail', 'pages/fit/form', 'pages/financial/detail', 'pages/financial/form', 'pages/user/share', 'pages/user/moneydetail', 'pages/user/money', 'pages/user/redetail', 'pages/user/recommend', 'pages/user/msg', 'pages/user/invite'],
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
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQTBERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBdkRmQSxNQXVEZSxHQXZETjtBQUNQQyxhQUFPLENBQ0wsaUJBREs7QUFFTDtBQUNBLHVCQUhLLEVBSUwsaUJBSkssRUFLTCx1QkFMSyxFQU1MLG1CQU5LLEVBT0wsb0JBUEssRUFRTCxrQkFSSyxFQVNMLG1CQVRLLEVBVUwsa0JBVkssRUFXTCxrQkFYSyxFQVlMLGdCQVpLLEVBYUwsd0JBYkssRUFjTCxzQkFkSyxFQWVMLGtCQWZLLEVBZ0JMLHdCQWhCSyxFQWlCTCxrQkFqQkssRUFrQkwscUJBbEJLLEVBbUJMLHNCQW5CSyxFQW9CTCxnQkFwQkssRUFxQkwsbUJBckJLLENBREE7QUF5QlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0F6QkQ7QUErQlBDLGNBQVE7QUFDTkMseUJBQWlCLE1BRFg7QUFFTkMsdUJBQWMsU0FGUjtBQUdOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsbUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxxQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsa0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEk7QUFIQTtBQS9CRCxLQXVETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVUsQ0FFVjs7OztFQWhFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL3VzZXIvdXNlcicsXHJcbiAgICAgIC8vICdwYWdlcy9pbmRleC9iaW5kJyxcclxuICAgICAgJ3BhZ2VzL2ZpdC9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9uZXcvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvZmluYW5jaWFsL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2hvdXNlL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2hvdXNlL2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9ob3VzZS9mb3JtJyxcclxuICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL25ldy9kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvZml0L2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9maXQvZm9ybScsXHJcbiAgICAgICdwYWdlcy9maW5hbmNpYWwvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2ZpbmFuY2lhbC9mb3JtJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvc2hhcmUnLFxyXG4gICAgICAncGFnZXMvdXNlci9tb25leWRldGFpbCcsXHJcbiAgICAgICdwYWdlcy91c2VyL21vbmV5JyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvcmVkZXRhaWwnLFxyXG4gICAgICAncGFnZXMvdXNlci9yZWNvbW1lbmQnLFxyXG4gICAgICAncGFnZXMvdXNlci9tc2cnLFxyXG4gICAgICAncGFnZXMvdXNlci9pbnZpdGUnLFxyXG4gICAgICBcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LiH5LyX5YiG5L2jJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjonI2ZmNjM0MCcsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgICAgdGV4dDogXCLpppbpobVcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImljb24vaWNvbl9pbmRleC5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaWNvbi9pY29uX2luZGV4X29uLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdXNlci91c2VyXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIuaIkeeahFwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9pY29uX215LnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2ljb25fbXlfb24ucG5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuXHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==