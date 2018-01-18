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
                                    //   this.gpsCity = city.slice(0,city.length-1)
                                    _this2.gpsCity = '呼和浩特';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOlsiQ2l0eSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2l0eSIsImdwc0NpdHkiLCJtZXRob2RzIiwiY2hvb3NlQ2l0eSIsImluZGV4T2YiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZXZlbnRzIiwiY2l0aWVzIiwiJGFwcGx5IiwiQmFpZHVNYXAiLCJ0aGVuIiwicmVzIiwib3JpZ2luYWxEYXRhIiwicmVzdWx0IiwiYWRkcmVzc0NvbXBvbmVudCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBSyxFQURBO0FBRUxDLHFCQUFRO0FBRkgsUyxRQUtQQyxPLEdBQVU7QUFDSEMsc0JBREc7QUFBQSxxR0FDUUgsSUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBRUYsS0FBS0EsSUFBTCxDQUFVSSxPQUFWLENBQWtCSixJQUFsQixLQUF5QixDQUFDLENBRnhCO0FBQUE7QUFBQTtBQUFBOztBQUdEQSwyQ0FBTyxLQUFLQSxJQUFMLENBQVUsQ0FBVixDQUFQO0FBSEM7QUFBQSwyQ0FJSyxlQUFLSyxTQUFMLENBQWU7QUFDakJDLCtDQUFNLElBRFc7QUFFakJDLGlEQUFRO0FBRlMscUNBQWYsQ0FKTDs7QUFBQTtBQVVMLG1EQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTJCUixJQUEzQjtBQVZLO0FBQUEsMkNBV0MsZUFBS1MsWUFBTCxDQUFrQjtBQUNwQkMsK0NBQU07QUFEYyxxQ0FBbEIsQ0FYRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFMsUUFpQlZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7dUNBS1ksY0FBSUMsTUFBSixFOzs7QUFBYmIsb0M7O0FBQ04scUNBQUtDLElBQUwsR0FBWUQsSUFBWjtBQUNBLHFDQUFLYyxNQUFMO0FBQ0EsZ0RBQU1DLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCLFVBQUNDLEdBQUQsRUFBTztBQUN6Qix3Q0FBSWhCLE9BQU9nQixJQUFJQyxZQUFKLENBQWlCQyxNQUFqQixDQUF3QkMsZ0JBQXhCLENBQXlDbkIsSUFBcEQ7QUFDRjtBQUNBLDJDQUFLQyxPQUFMLEdBQWUsTUFBZjtBQUNFLDJDQUFLWSxNQUFMO0FBQ0gsaUNBTEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQzhCLGVBQUtPLEk7O2tCQUFsQnhCLEkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXR5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mAieaLqeWfjuW4gidcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjaXR5OltdLFxyXG4gICAgICBncHNDaXR5OicnLFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgYXN5bmMgY2hvb3NlQ2l0eShjaXR5KXtcclxuICAgICAgICAgaWYodGhpcy5jaXR5LmluZGV4T2YoY2l0eSk9PS0xKXtcclxuICAgICAgICAgICAgIGNpdHkgPSB0aGlzLmNpdHlbMF1cclxuICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICBjb250ZW50OiflvZPliY3ln47luILmnKrlvIDpgJrmnI3liqEnXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsY2l0eSlcclxuICAgICAgICAgYXdhaXQgd2VweS5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgZGVsdGE6MVxyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5jaXRpZXMoKVxyXG4gICAgICB0aGlzLmNpdHkgPSBkYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgd3hBcGkuQmFpZHVNYXAoKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICBsZXQgY2l0eSA9IHJlcy5vcmlnaW5hbERhdGEucmVzdWx0LmFkZHJlc3NDb21wb25lbnQuY2l0eVxyXG4gICAgICAgIC8vICAgdGhpcy5ncHNDaXR5ID0gY2l0eS5zbGljZSgwLGNpdHkubGVuZ3RoLTEpXHJcbiAgICAgICAgdGhpcy5ncHNDaXR5ID0gJ+WRvOWSjOa1qeeJuSdcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiJdfQ==