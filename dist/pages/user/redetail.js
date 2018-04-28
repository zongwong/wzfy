'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

var _wxapi = require('./../../interfaces/wxapi.js');

var _wxapi2 = _interopRequireDefault(_wxapi);

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
        }, _this.methods = {
            imgView: function imgView(src, urls) {
                _wxapi2.default.imgView(src, urls);
            },
            phoneCall: function phoneCall(num) {
                if (!num) {
                    return false;
                }
                _wxapi2.default.phoneCall(num);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Redetail, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {}
    }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlZGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbmZvIiwibGlzdCIsIm1ldGhvZHMiLCJpbWdWaWV3Iiwic3JjIiwidXJscyIsInBob25lQ2FsbCIsIm51bSIsIm9wdGlvbnMiLCJnZXRSZXBvcnREZXRhaWwiLCJpZCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBSVRDLEksR0FBTztBQUNIQyxrQkFBSyxFQURGO0FBRUhDLGtCQUFLO0FBRkYsUyxRQU1QQyxPLEdBQVU7QUFDUkMsbUJBRFEsbUJBQ0FDLEdBREEsRUFDSUMsSUFESixFQUNVO0FBQ2QsZ0NBQU1GLE9BQU4sQ0FBY0MsR0FBZCxFQUFrQkMsSUFBbEI7QUFDSCxhQUhPO0FBSVJDLHFCQUpRLHFCQUlFQyxHQUpGLEVBSU07QUFDVixvQkFBRyxDQUFDQSxHQUFKLEVBQVE7QUFDSiwyQkFBTyxLQUFQO0FBQ0g7QUFDRCxnQ0FBTUQsU0FBTixDQUFnQkMsR0FBaEI7QUFDSDtBQVRPLFM7Ozs7OzRDQVdTLENBQUU7Ozs7aUdBQ1JDLE87Ozs7Ozs7dUNBQ1UsY0FBSUMsZUFBSixDQUFvQkQsUUFBUUUsRUFBNUIsQzs7O0FBQWJWLG9DOztBQUNOO0FBQ0EscUNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBO0FBQ0EscUNBQUtXLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1QmdDLGVBQUtDLEk7O2tCQUF0QmhCLFEiLCJmaWxlIjoicmVkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHd4QXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvd3hhcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o6o6I2Q6K+m5oOFJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaW5mbzonJyxcclxuICAgICAgICBsaXN0OicnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGltZ1ZpZXcoc3JjLHVybHMpIHtcclxuICAgICAgICAgIHd4QXBpLmltZ1ZpZXcoc3JjLHVybHMpXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lQ2FsbChudW0pe1xyXG4gICAgICAgICAgaWYoIW51bSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3eEFwaS5waG9uZUNhbGwobnVtKVxyXG4gICAgICB9XHJcbiAgICB9ICAgICAgIFxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGkuZ2V0UmVwb3J0RGV0YWlsKG9wdGlvbnMuaWQpXHJcbiAgICAgICAgLy8gY29uc3QgbGlzdCA9IGF3YWl0IGFwaS5nZXRSZWNvcmRMaXN0KG9wdGlvbnMuaWQpXHJcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mb1xyXG4gICAgICAgIC8vIHRoaXMubGlzdCA9IGxpc3RcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=