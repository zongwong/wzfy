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

var City = function (_wepy$page) {
    _inherits(City, _wepy$page);

    function City() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, City);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = City.__proto__ || Object.getPrototypeOf(City)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '选择城市'
        }, _this.data = {
            city: [],
            gpsCity: ''
        }, _this.methods = {
            chooseCity: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(city) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(this.city.indexOf(city) == -1)) {
                                        _context.next = 4;
                                        break;
                                    }

                                    city = this.city[0];
                                    _context.next = 4;
                                    return _wepy2.default.showModal({
                                        title: '提示',
                                        content: '当前城市未开通服务'
                                    });

                                case 4:
                                    _wepy2.default.setStorageSync('city', city);
                                    _context.next = 7;
                                    return _wepy2.default.navigateBack({
                                        delta: 1
                                    });

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function chooseCity(_x) {
                    return _ref2.apply(this, arguments);
                }

                return chooseCity;
            }()
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(City, [{
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _api2.default.cities();

                            case 2:
                                data = _context2.sent;

                                this.city = data;
                                this.$apply();
                                _wxapi2.default.BaiduMap().then(function (res) {
                                    var city = res.originalData.result.addressComponent.city;
                                    _this2.gpsCity = city.slice(0, city.length - 1);
                                    _this2.$apply();
                                });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return City;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(City , 'pages/index/city'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOlsiQ2l0eSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2l0eSIsImdwc0NpdHkiLCJtZXRob2RzIiwiY2hvb3NlQ2l0eSIsImluZGV4T2YiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZXZlbnRzIiwiY2l0aWVzIiwiJGFwcGx5IiwiQmFpZHVNYXAiLCJ0aGVuIiwicmVzIiwib3JpZ2luYWxEYXRhIiwicmVzdWx0IiwiYWRkcmVzc0NvbXBvbmVudCIsInNsaWNlIiwibGVuZ3RoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFLLEVBREE7QUFFTEMscUJBQVE7QUFGSCxTLFFBS1BDLE8sR0FBVTtBQUNIQyxzQkFERztBQUFBLHFHQUNRSCxJQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FFRixLQUFLQSxJQUFMLENBQVVJLE9BQVYsQ0FBa0JKLElBQWxCLEtBQXlCLENBQUMsQ0FGeEI7QUFBQTtBQUFBO0FBQUE7O0FBR0RBLDJDQUFPLEtBQUtBLElBQUwsQ0FBVSxDQUFWLENBQVA7QUFIQztBQUFBLDJDQUlLLGVBQUtLLFNBQUwsQ0FBZTtBQUNqQkMsK0NBQU0sSUFEVztBQUVqQkMsaURBQVE7QUFGUyxxQ0FBZixDQUpMOztBQUFBO0FBVUwsbURBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBMkJSLElBQTNCO0FBVks7QUFBQSwyQ0FXQyxlQUFLUyxZQUFMLENBQWtCO0FBQ3BCQywrQ0FBTTtBQURjLHFDQUFsQixDQVhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsUyxRQWlCVkMsTSxHQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FLWSxjQUFJQyxNQUFKLEU7OztBQUFiYixvQzs7QUFDTixxQ0FBS0MsSUFBTCxHQUFZRCxJQUFaO0FBQ0EscUNBQUtjLE1BQUw7QUFDQSxnREFBTUMsUUFBTixHQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsR0FBRCxFQUFPO0FBQ3pCLHdDQUFJaEIsT0FBT2dCLElBQUlDLFlBQUosQ0FBaUJDLE1BQWpCLENBQXdCQyxnQkFBeEIsQ0FBeUNuQixJQUFwRDtBQUNBLDJDQUFLQyxPQUFMLEdBQWVELEtBQUtvQixLQUFMLENBQVcsQ0FBWCxFQUFhcEIsS0FBS3FCLE1BQUwsR0FBWSxDQUF6QixDQUFmO0FBQ0EsMkNBQUtSLE1BQUw7QUFDSCxpQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5DOEIsZUFBS1MsSTs7a0JBQWxCMUIsSSIsImZpbGUiOiJjaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGltcG9ydCB3eEFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3d4YXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YCJ5oup5Z+O5biCJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNpdHk6W10sXHJcbiAgICAgIGdwc0NpdHk6JycsXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBhc3luYyBjaG9vc2VDaXR5KGNpdHkpe1xyXG4gICAgICAgICBpZih0aGlzLmNpdHkuaW5kZXhPZihjaXR5KT09LTEpe1xyXG4gICAgICAgICAgICAgY2l0eSA9IHRoaXMuY2l0eVswXVxyXG4gICAgICAgICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgIGNvbnRlbnQ6J+W9k+WJjeWfjuW4guacquW8gOmAmuacjeWKoSdcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjaXR5JyxjaXR5KVxyXG4gICAgICAgICBhd2FpdCB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICBkZWx0YToxXHJcbiAgICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmNpdGllcygpXHJcbiAgICAgIHRoaXMuY2l0eSA9IGRhdGFcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB3eEFwaS5CYWlkdU1hcCgpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgIGxldCBjaXR5ID0gcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5XHJcbiAgICAgICAgICB0aGlzLmdwc0NpdHkgPSBjaXR5LnNsaWNlKDAsY2l0eS5sZW5ndGgtMSlcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==