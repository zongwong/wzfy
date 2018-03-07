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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Housedetail, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJIb3VzZWRldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5mbyIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJkZXRhaWwiLCIkYXBwbHkiLCJ3eFBhcnNlIiwiY29udGVudCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSztBQURBLEs7Ozs7O3dDQUdZLENBQUU7Ozs7Ozs7Ozs7O3VCQUVFQyxHQUFHQyxjQUFILENBQWtCLFFBQWxCLEM7OztBQUFmQyxzQjs7QUFDTixxQkFBS0gsSUFBTCxHQUFZRyxNQUFaO0FBQ0EscUJBQUtDLE1BQUw7QUFDQSxrQ0FBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQ0YsT0FBT0csT0FBMUMsRUFBbUQsSUFBbkQsRUFBeUQsQ0FBekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFicUMsZUFBS0MsSTs7a0JBQXpCWCxXIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vd3hQYXJzZS93eFBhcnNlLmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXNlZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIv+a6kOivpuaDhSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpbmZvOicnXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgZGV0YWlsID0gYXdhaXQgd3guZ2V0U3RvcmFnZVN5bmMoJ2RldGFpbCcpXHJcbiAgICAgIHRoaXMuaW5mbyA9IGRldGFpbFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIFd4UGFyc2Uud3hQYXJzZSgnY29udGVudCcsICdodG1sJywgZGV0YWlsLmNvbnRlbnQsIHRoaXMsIDQpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=