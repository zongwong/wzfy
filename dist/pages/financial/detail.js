'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Financialdetail = function (_wepy$page) {
  _inherits(Financialdetail, _wepy$page);

  function Financialdetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Financialdetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Financialdetail.__proto__ || Object.getPrototypeOf(Financialdetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '套餐详情'
    }, _this.data = {
      info: ''
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Financialdetail, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var detail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return wx.getStorageSync('detail');

              case 2:
                detail = _context.sent;

                this.info = detail;
                this.$apply();
                _wxParse2.default.wxParse('content', 'html', detail.content, this, 4);

              case 6:
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return Financialdetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Financialdetail , 'pages/financial/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaW5hbmNpYWxkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImluZm8iLCJtZXRob2RzIiwiZXZlbnRzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImRldGFpbCIsIiRhcHBseSIsInd4UGFyc2UiLCJjb250ZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLO0FBREEsSyxRQU1QQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkFLY0MsR0FBR0MsY0FBSCxDQUFrQixRQUFsQixDOzs7QUFBZkMsc0I7O0FBQ04scUJBQUtMLElBQUwsR0FBWUssTUFBWjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0Esa0NBQVFDLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBM0IsRUFBbUNGLE9BQU9HLE9BQTFDLEVBQW1ELElBQW5ELEVBQXlELENBQXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBRWlCLENBQUU7Ozs7RUF6QnNCLGVBQUtDLEk7O2tCQUE3QmIsZSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL3d4UGFyc2Uvd3hQYXJzZS5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5hbmNpYWxkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5aWX6aSQ6K+m5oOFJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGluZm86JydcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCB3eC5nZXRTdG9yYWdlU3luYygnZGV0YWlsJylcclxuICAgICAgdGhpcy5pbmZvID0gZGV0YWlsXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgV3hQYXJzZS53eFBhcnNlKCdjb250ZW50JywgJ2h0bWwnLCBkZXRhaWwuY29udGVudCwgdGhpcywgNClcclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gIH1cclxuIl19