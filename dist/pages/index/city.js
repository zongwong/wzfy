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
                                    _context.next = 2;
                                    return _wepy2.default.setStorageSync('city', city);

                                case 2:
                                    _context.next = 4;
                                    return _wepy2.default.navigateBack({
                                        delta: 1
                                    });

                                case 4:
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
                                _wxapi2.default.BaiduMap().then(function (res) {
                                    _this2.gpsCity = res.originalData.result.addressComponent.city;
                                    _this2.$apply();
                                });
                                this.$apply();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOlsiQ2l0eSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2l0eSIsImdwc0NpdHkiLCJtZXRob2RzIiwiY2hvb3NlQ2l0eSIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJldmVudHMiLCJjaXRpZXMiLCJCYWlkdU1hcCIsInRoZW4iLCJyZXMiLCJvcmlnaW5hbERhdGEiLCJyZXN1bHQiLCJhZGRyZXNzQ29tcG9uZW50IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFLLEVBREE7QUFFTEMscUJBQVE7QUFGSCxTLFFBT1BDLE8sR0FBVTtBQUNIQyxzQkFERztBQUFBLHFHQUNRSCxJQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUVDLGVBQUtJLGNBQUwsQ0FBb0IsTUFBcEIsRUFBMkJKLElBQTNCLENBRkQ7O0FBQUE7QUFBQTtBQUFBLDJDQUdDLGVBQUtLLFlBQUwsQ0FBa0I7QUFDcEJDLCtDQUFNO0FBRGMscUNBQWxCLENBSEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxTLFFBU1ZDLE0sR0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7dUNBS1ksY0FBSUMsTUFBSixFOzs7QUFBYlQsb0M7O0FBQ04scUNBQUtDLElBQUwsR0FBWUQsSUFBWjtBQUNBLGdEQUFNVSxRQUFOLEdBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxHQUFELEVBQU87QUFDekIsMkNBQUtWLE9BQUwsR0FBZVUsSUFBSUMsWUFBSixDQUFpQkMsTUFBakIsQ0FBd0JDLGdCQUF4QixDQUF5Q2QsSUFBeEQ7QUFDQSwyQ0FBS2UsTUFBTDtBQUNILGlDQUhEO0FBSUEscUNBQUtBLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQzhCLGVBQUtDLEk7O2tCQUFsQnBCLEkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXR5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mAieaLqeWfjuW4gidcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjaXR5OltdLFxyXG4gICAgICBncHNDaXR5OicnLFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgYXN5bmMgY2hvb3NlQ2l0eShjaXR5KXtcclxuICAgICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlU3luYygnY2l0eScsY2l0eSlcclxuICAgICAgICAgYXdhaXQgd2VweS5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgZGVsdGE6MVxyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5jaXRpZXMoKVxyXG4gICAgICB0aGlzLmNpdHkgPSBkYXRhXHJcbiAgICAgIHd4QXBpLkJhaWR1TWFwKCkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgdGhpcy5ncHNDaXR5ID0gcmVzLm9yaWdpbmFsRGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==