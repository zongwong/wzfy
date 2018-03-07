'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = function (_wepy$page) {
    _inherits(Rule, _wepy$page);

    function Rule() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Rule);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rule.__proto__ || Object.getPrototypeOf(Rule)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '分佣规则'
        }, _this.data = {
            info: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Rule, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {}
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _api2.default.ad();

                            case 2:
                                data = _context.sent;

                                this.info = data;
                                this.$apply();
                                _wxParse2.default.wxParse('content', 'html', data.content, this, 4);

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

    return Rule;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Rule , 'pages/index/rule'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5mbyIsImFkIiwiJGFwcGx5Iiwid3hQYXJzZSIsImNvbnRlbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUlUQyxJLEdBQU87QUFDSEMsa0JBQUs7QUFERixTOzs7Ozs0Q0FHWSxDQUFFOzs7Ozs7Ozs7Ozt1Q0FFRSxjQUFJQyxFQUFKLEU7OztBQUFiRixvQzs7QUFDTixxQ0FBS0MsSUFBTCxHQUFZRCxJQUFaO0FBQ0EscUNBQUtHLE1BQUw7QUFDQSxrREFBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQ0osS0FBS0ssT0FBeEMsRUFBaUQsSUFBakQsRUFBdUQsQ0FBdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFiNEIsZUFBS0MsSTs7a0JBQWxCVCxJIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL3d4UGFyc2Uvd3hQYXJzZS5qcydcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG5L2j6KeE5YiZJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaW5mbzonJ1xyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5hZCgpXHJcbiAgICAgICAgdGhpcy5pbmZvID0gZGF0YVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICBXeFBhcnNlLnd4UGFyc2UoJ2NvbnRlbnQnLCAnaHRtbCcsIGRhdGEuY29udGVudCwgdGhpcywgNClcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=