'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invite = function (_wepy$page) {
  _inherits(Invite, _wepy$page);

  function Invite() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Invite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Invite.__proto__ || Object.getPrototypeOf(Invite)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的邀请'
    }, _this.data = {
      list: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Invite, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.inviters();

              case 2:
                data = _context.sent;

                this.list = data;
                this.$apply();

              case 5:
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

  return Invite;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Invite , 'pages/user/invite'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZS5qcyJdLCJuYW1lcyI6WyJJbnZpdGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJpbnZpdGVycyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSztBQURBLEs7Ozs7Ozs7Ozs7Ozs7dUJBS2MsY0FBSUMsUUFBSixFOzs7QUFBYkYsb0I7O0FBQ04scUJBQUtDLElBQUwsR0FBWUQsSUFBWjtBQUNBLHFCQUFLRyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWmdDLGVBQUtDLEk7O2tCQUFwQlAsTSIsImZpbGUiOiJpbnZpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52aXRlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOmCgOivtydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsaXN0OltdXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmludml0ZXJzKClcclxuICAgICAgdGhpcy5saXN0ID0gZGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=