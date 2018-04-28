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

var Money = function (_wepy$page) {
    _inherits(Money, _wepy$page);

    function Money() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Money);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Money.__proto__ || Object.getPrototypeOf(Money)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的佣金'
        }, _this.data = {
            user: ''
        }, _this.methods = {
            downTips: function downTips(type) {
                _wepy2.default.showModal({
                    title: '提示',
                    content: '请到应用商店搜索《万众分佣》下载'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Money, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {}
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var user;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _api2.default.getMemberInfo();

                            case 2:
                                user = _context.sent;

                                this.user = user;
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

    return Money;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Money , 'pages/user/tx'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4LmpzIl0sIm5hbWVzIjpbIk1vbmV5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VyIiwibWV0aG9kcyIsImRvd25UaXBzIiwidHlwZSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImdldE1lbWJlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGtCQUFLO0FBREYsUyxRQUlQQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0dDLElBREgsRUFDUztBQUNYLCtCQUFLQyxTQUFMLENBQWU7QUFDWEMsMkJBQU0sSUFESztBQUVYQyw2QkFBUTtBQUZHLGlCQUFmO0FBSUg7QUFOSyxTOzs7Ozs0Q0FTUyxDQUFFOzs7Ozs7Ozs7Ozt1Q0FFQSxjQUFJQyxhQUFKLEU7OztBQUFiUCxvQzs7QUFDTixxQ0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EscUNBQUtRLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0QitCLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJ0eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNb25leSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkvaPph5EnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VyOicnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBkb3duVGlwcyh0eXBlKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDon6K+35Yiw5bqU55So5ZWG5bqX5pCc57Si44CK5LiH5LyX5YiG5L2j44CL5LiL6L29J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5nZXRNZW1iZXJJbmZvKClcclxuICAgICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=