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
      pages: ['pages/index/index', 'pages/user/agree', 'pages/user/tx', 'pages/index/rule', 'pages/new/form', 'pages/user/money', 'pages/user/moneydetail', 'pages/user/user', 'pages/user/share', 'pages/index/bind', 'pages/new/map', 'pages/index/city', 'pages/fit/index', 'pages/new/index', 'pages/financial/index', 'pages/house/index', 'pages/house/detail', 'pages/house/form', 'pages/new/detail', 'pages/fit/detail', 'pages/fit/form', 'pages/financial/detail', 'pages/financial/form', 'pages/user/redetail', 'pages/user/recommend', 'pages/user/msg', 'pages/user/invite'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWdFRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBN0RmQSxNQTZEZSxHQTdETjtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxrQkFGSyxFQUdMLGVBSEssRUFJTCxrQkFKSyxFQUtMLGdCQUxLLEVBTUwsa0JBTkssRUFPTCx3QkFQSyxFQVFMLGlCQVJLLEVBU0wsa0JBVEssRUFVTCxrQkFWSyxFQVdMLGVBWEssRUFZTCxrQkFaSyxFQWFMLGlCQWJLLEVBY0wsaUJBZEssRUFlTCx1QkFmSyxFQWdCTCxtQkFoQkssRUFpQkwsb0JBakJLLEVBa0JMLGtCQWxCSyxFQW1CTCxrQkFuQkssRUFvQkwsa0JBcEJLLEVBcUJMLGdCQXJCSyxFQXNCTCx3QkF0QkssRUF1Qkwsc0JBdkJLLEVBd0JMLHFCQXhCSyxFQXlCTCxzQkF6QkssRUEwQkwsZ0JBMUJLLEVBMkJMLG1CQTNCSyxDQURBO0FBK0JQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsTUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BL0JEO0FBcUNQQyxjQUFRO0FBQ05DLHlCQUFpQixNQURYO0FBRU5DLHVCQUFjLFNBRlI7QUFHTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUscUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxpQkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJO0FBSEE7QUFyQ0QsS0E2RE07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVLENBQ1Y7Ozs7RUFyRTBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleC9pbmRleCcsXHJcbiAgICAgICdwYWdlcy91c2VyL2FncmVlJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvdHgnLFxyXG4gICAgICAncGFnZXMvaW5kZXgvcnVsZScsXHJcbiAgICAgICdwYWdlcy9uZXcvZm9ybScsXHJcbiAgICAgICdwYWdlcy91c2VyL21vbmV5JyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvbW9uZXlkZXRhaWwnLFxyXG4gICAgICAncGFnZXMvdXNlci91c2VyJyxcclxuICAgICAgJ3BhZ2VzL3VzZXIvc2hhcmUnLFxyXG4gICAgICAncGFnZXMvaW5kZXgvYmluZCcsXHJcbiAgICAgICdwYWdlcy9uZXcvbWFwJyxcclxuICAgICAgJ3BhZ2VzL2luZGV4L2NpdHknLCAgICAgIFxyXG4gICAgICAncGFnZXMvZml0L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL25ldy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9maW5hbmNpYWwvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaG91c2UvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaG91c2UvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2hvdXNlL2Zvcm0nLFxyXG4gICAgICAncGFnZXMvbmV3L2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9maXQvZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2ZpdC9mb3JtJyxcclxuICAgICAgJ3BhZ2VzL2ZpbmFuY2lhbC9kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvZmluYW5jaWFsL2Zvcm0nLFxyXG4gICAgICAncGFnZXMvdXNlci9yZWRldGFpbCcsXHJcbiAgICAgICdwYWdlcy91c2VyL3JlY29tbWVuZCcsXHJcbiAgICAgICdwYWdlcy91c2VyL21zZycsXHJcbiAgICAgICdwYWdlcy91c2VyL2ludml0ZScsXHJcbiAgICAgIFxyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuIfkvJfliIbkvaMnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOicjZmY2MzQwJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4L2luZGV4XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIummlumhtVwiLFxyXG4gICAgICAgICAgaWNvblBhdGg6IFwiaWNvbi9pY29uX2luZGV4LnBuZ1wiLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpY29uL2ljb25faW5kZXhfb24ucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXHJcbiAgICAgICAgICBpY29uUGF0aDogXCJpY29uL2ljb25fbXkucG5nXCIsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImljb24vaWNvbl9teV9vbi5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=