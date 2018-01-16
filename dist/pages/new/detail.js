'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      activeKey: 1
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
    value: function onLoad() {}
  }]);

  return Fitdetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Fitdetail , 'pages/new/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImFjdGl2ZUtleSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjb21wb25lbnRJZCIsImtleSIsImlkeCIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVywwQ0FESTtBQUVmLHlCQUFpQiwwQ0FGRjtBQUdmLHlCQUFpQjtBQUhGO0FBRlYsSyxRQVNUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU8sTUFBUixFQURJLEVBRUosRUFBQ0EsT0FBTyxNQUFSLEVBRkksRUFHSixFQUFDQSxPQUFPLE1BQVIsRUFISSxFQUlKLEVBQUNBLE9BQU8sTUFBUixFQUpJLENBREQ7QUFPTEMsaUJBQVc7QUFQTixLLFFBWVBDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDbkJDLGdCQUFRQyxHQUFSLGtCQUEyQkYsRUFBRUcsTUFBRixDQUFTQyxXQUFwQyxzQkFBZ0VKLEVBQUVHLE1BQUYsQ0FBU0UsR0FBekU7QUFDQSxZQUFNQyxNQUFNTixFQUFFRyxNQUFGLENBQVNFLEdBQXJCO0FBQ0EsYUFBS1IsU0FBTCxHQUFpQlMsR0FBakI7QUFDRDtBQUxPLEssUUFRVkMsTSxHQUFTLEU7Ozs7OzZCQUlBLENBRVI7Ozs7RUFwQ29DLGVBQUtDLEk7O2tCQUF2QmxCLFMiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXRkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5oi/6K+m5oOFJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRhYnM6IFtcclxuICAgICAgICB7dGl0bGU6ICflrqLmiLfop4TliJknfSxcclxuICAgICAgICB7dGl0bGU6ICflnKjllK7miLflnosnfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jljZbngrknfSxcclxuICAgICAgICB7dGl0bGU6ICfmpbznm5jkv6Hmga8nfVxyXG4gICAgICBdLFxyXG4gICAgICBhY3RpdmVLZXk6IDFcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKTtcclxuICAgICAgICBjb25zdCBpZHggPSBlLmRldGFpbC5rZXk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSBpZHhcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==