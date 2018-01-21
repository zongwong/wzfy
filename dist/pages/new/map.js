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

var Map = function (_wepy$page) {
    _inherits(Map, _wepy$page);

    function Map() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Map);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '查看地图'
        }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Map, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wx.openLocation({ //出发wx.openLocation API

                                    latitude: Number(that.data.map_lat), //坐标纬度（从地图获取坐标）

                                    longitude: Number(that.data.map_long), //坐标经度（从地图获取坐标）

                                    name: res.data.name, //打开后显示的地址名称

                                    address: res.data.address //打开后显示的地址汉字

                                });

                            case 1:
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

    return Map;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Map , 'pages/new/map'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1ldGhvZHMiLCJldmVudHMiLCJ3eCIsIm9wZW5Mb2NhdGlvbiIsImxhdGl0dWRlIiwiTnVtYmVyIiwidGhhdCIsIm1hcF9sYXQiLCJsb25naXR1ZGUiLCJtYXBfbG9uZyIsIm5hbWUiLCJyZXMiLCJhZGRyZXNzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBSVRDLEksR0FBTyxFLFFBTVBDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs7Ozs7OztBQUtMQyxtQ0FBR0MsWUFBSCxDQUFnQixFQUFFOztBQUVkQyw4Q0FBVUMsT0FBT0MsS0FBS1AsSUFBTCxDQUFVUSxPQUFqQixDQUZFLEVBRXlCOztBQUVyQ0MsK0NBQVdILE9BQU9DLEtBQUtQLElBQUwsQ0FBVVUsUUFBakIsQ0FKQyxFQUkyQjs7QUFFdkNDLDBDQUFNQyxJQUFJWixJQUFKLENBQVNXLElBTkgsRUFNUzs7QUFFckJFLDZDQUFTRCxJQUFJWixJQUFKLENBQVNhLE9BUk4sQ0FRYzs7QUFSZCxpQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQjJCLGVBQUtDLEk7O2tCQUFqQmpCLEciLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmn6XnnIvlnLDlm74nXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgICB3eC5vcGVuTG9jYXRpb24oeyAvL+WHuuWPkXd4Lm9wZW5Mb2NhdGlvbiBBUElcclxuXHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBOdW1iZXIodGhhdC5kYXRhLm1hcF9sYXQpLCAvL+WdkOagh+e6rOW6pu+8iOS7juWcsOWbvuiOt+WPluWdkOagh++8iVxyXG5cclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIodGhhdC5kYXRhLm1hcF9sb25nKSwgLy/lnZDmoIfnu4/luqbvvIjku47lnLDlm77ojrflj5blnZDmoIfvvIlcclxuXHJcbiAgICAgICAgICAgIG5hbWU6IHJlcy5kYXRhLm5hbWUsIC8v5omT5byA5ZCO5pi+56S655qE5Zyw5Z2A5ZCN56ewXHJcblxyXG4gICAgICAgICAgICBhZGRyZXNzOiByZXMuZGF0YS5hZGRyZXNzIC8v5omT5byA5ZCO5pi+56S655qE5Zyw5Z2A5rGJ5a2XXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuIl19