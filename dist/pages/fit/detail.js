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
      navigationBarTitleText: '装修详情'
    }, _this.data = {
      info: ''
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fitdetail, [{
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

  return Fitdetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Fitdetail , 'pages/fit/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJGaXRkZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImluZm8iLCJtZXRob2RzIiwiZXZlbnRzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImRldGFpbCIsIiRhcHBseSIsInd4UGFyc2UiLCJjb250ZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLO0FBREEsSyxRQU1QQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkFLY0MsR0FBR0MsY0FBSCxDQUFrQixRQUFsQixDOzs7QUFBZkMsc0I7O0FBQ04scUJBQUtMLElBQUwsR0FBWUssTUFBWjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0Esa0NBQVFDLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBM0IsRUFBbUNGLE9BQU9HLE9BQTFDLEVBQW1ELElBQW5ELEVBQXlELENBQXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkJtQyxlQUFLQyxJOztrQkFBdkJiLFMiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi93eFBhcnNlL3d4UGFyc2UuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0ZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ijheS/ruivpuaDhSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpbmZvOicnXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgZGV0YWlsID0gYXdhaXQgd3guZ2V0U3RvcmFnZVN5bmMoJ2RldGFpbCcpXHJcbiAgICAgIHRoaXMuaW5mbyA9IGRldGFpbFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIFd4UGFyc2Uud3hQYXJzZSgnY29udGVudCcsICdodG1sJywgZGV0YWlsLmNvbnRlbnQsIHRoaXMsIDQpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=