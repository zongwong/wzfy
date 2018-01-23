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

var Redetail = function (_wepy$page) {
    _inherits(Redetail, _wepy$page);

    function Redetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Redetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Redetail.__proto__ || Object.getPrototypeOf(Redetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '推荐详情'
        }, _this.data = {
            info: '',
            list: ''
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Redetail, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var info;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _api2.default.getReportDetail(options.id);

                            case 2:
                                info = _context.sent;

                                // const list = await api.getRecordList(options.id)
                                this.info = info;
                                // this.list = list
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Redetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Redetail , 'pages/user/redetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlZGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbmZvIiwibGlzdCIsIm1ldGhvZHMiLCJvcHRpb25zIiwiZ2V0UmVwb3J0RGV0YWlsIiwiaWQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGtCQUFLLEVBREY7QUFFSEMsa0JBQUs7QUFGRixTLFFBTVBDLE8sR0FBVSxFOzs7Ozs7aUdBSUdDLE87Ozs7Ozs7dUNBQ1UsY0FBSUMsZUFBSixDQUFvQkQsUUFBUUUsRUFBNUIsQzs7O0FBQWJMLG9DOztBQUNOO0FBQ0EscUNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBO0FBQ0EscUNBQUtNLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQmdDLGVBQUtDLEk7O2tCQUF0QlgsUSIsImZpbGUiOiJyZWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmjqjojZDor6bmg4UnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBpbmZvOicnLFxyXG4gICAgICAgIGxpc3Q6JydcclxuICAgIH1cclxuXHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGkuZ2V0UmVwb3J0RGV0YWlsKG9wdGlvbnMuaWQpXHJcbiAgICAgICAgLy8gY29uc3QgbGlzdCA9IGF3YWl0IGFwaS5nZXRSZWNvcmRMaXN0KG9wdGlvbnMuaWQpXHJcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mb1xyXG4gICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3RcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=