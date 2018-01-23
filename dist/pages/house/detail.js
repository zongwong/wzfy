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

var Housedetail = function (_wepy$page) {
  _inherits(Housedetail, _wepy$page);

  function Housedetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Housedetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Housedetail.__proto__ || Object.getPrototypeOf(Housedetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '房源详情'
    }, _this.data = {
      info: ''
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Housedetail, [{
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
  }]);

  return Housedetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Housedetail , 'pages/house/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJIb3VzZWRldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5mbyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiZGV0YWlsIiwiJGFwcGx5Iiwid3hQYXJzZSIsImNvbnRlbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUs7QUFEQSxLLFFBTVBDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7O3VCQUtjQyxHQUFHQyxjQUFILENBQWtCLFFBQWxCLEM7OztBQUFmQyxzQjs7QUFDTixxQkFBS0wsSUFBTCxHQUFZSyxNQUFaO0FBQ0EscUJBQUtDLE1BQUw7QUFDQSxrQ0FBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQ0YsT0FBT0csT0FBMUMsRUFBbUQsSUFBbkQsRUFBeUQsQ0FBekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2QnFDLGVBQUtDLEk7O2tCQUF6QmIsVyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL3d4UGFyc2Uvd3hQYXJzZS5qcydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VzZWRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiL/mupDor6bmg4UnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaW5mbzonJ1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IGRldGFpbCA9IGF3YWl0IHd4LmdldFN0b3JhZ2VTeW5jKCdkZXRhaWwnKVxyXG4gICAgICB0aGlzLmluZm8gPSBkZXRhaWxcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICBXeFBhcnNlLnd4UGFyc2UoJ2NvbnRlbnQnLCAnaHRtbCcsIGRldGFpbC5jb250ZW50LCB0aGlzLCA0KVxyXG4gICAgfVxyXG4gIH1cclxuIl19