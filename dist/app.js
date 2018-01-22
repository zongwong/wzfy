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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInNldFN0b3JhZ2VTeW5jIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBNERFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF6RGZBLE1BeURlLEdBekROO0FBQ1BDLGFBQU87QUFDQztBQUNOLHlCQUZLLEVBR0wsZUFISyxFQUlMLGtCQUpLLEVBS0wsaUJBTEssRUFNTCxpQkFOSyxFQU9MLGlCQVBLLEVBUUwsdUJBUkssRUFTTCxtQkFUSyxFQVVMLG9CQVZLLEVBV0wsa0JBWEssRUFZTCxrQkFaSyxFQWFMLGtCQWJLLEVBY0wsZ0JBZEssRUFlTCx3QkFmSyxFQWdCTCxzQkFoQkssRUFpQkwsa0JBakJLLEVBa0JMLHdCQWxCSyxFQW1CTCxrQkFuQkssRUFvQkwscUJBcEJLLEVBcUJMLHNCQXJCSyxFQXNCTCxnQkF0QkssRUF1QkwsbUJBdkJLLENBREE7QUEyQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0EzQkQ7QUFpQ1BDLGNBQVE7QUFDTkMseUJBQWlCLE1BRFg7QUFFTkMsdUJBQWMsU0FGUjtBQUdOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsbUJBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxxQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLGlCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsa0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEk7QUFIQTtBQWpDRCxLQXlETTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVU7QUFDVCxxQkFBS0MsY0FBTCxDQUFvQixPQUFwQixFQUE0QixrQ0FBNUI7QUFDRDs7OztFQWxFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgLy8gJ3BhZ2VzL2luZGV4L2JpbmQnLFxyXG4gICAgICAncGFnZXMvaW5kZXgvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvbmV3L21hcCcsXHJcbiAgICAgICdwYWdlcy9pbmRleC9jaXR5JyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvdXNlcicsXHJcbiAgICAgICdwYWdlcy9maXQvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvbmV3L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2ZpbmFuY2lhbC9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9ob3VzZS9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9ob3VzZS9kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvaG91c2UvZm9ybScsXHJcbiAgICAgICdwYWdlcy9uZXcvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2ZpdC9kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvZml0L2Zvcm0nLFxyXG4gICAgICAncGFnZXMvZmluYW5jaWFsL2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9maW5hbmNpYWwvZm9ybScsXHJcbiAgICAgICdwYWdlcy91c2VyL3NoYXJlJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvbW9uZXlkZXRhaWwnLFxyXG4gICAgICAncGFnZXMvdXNlci9tb25leScsXHJcbiAgICAgICdwYWdlcy91c2VyL3JlZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvcmVjb21tZW5kJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvbXNnJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvaW52aXRlJyxcclxuICAgICAgXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4h+S8l+WIhuS9oycsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6JyNmZjYzNDAnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXgvaW5kZXhcIixcclxuICAgICAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2ljb25faW5kZXgucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vaWNvbl9pbmRleF9vbi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL3VzZXIvdXNlclwiLFxyXG4gICAgICAgICAgdGV4dDogXCLmiJHnmoRcIixcclxuICAgICAgICAgIGljb25QYXRoOiBcImljb24vaWNvbl9teS5wbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaWNvbi9pY29uX215X29uLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsJ0dGM0hJTUFMQ1pFcEw3emRleGVxYXZJTG9RTlVtZEtoJyk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==