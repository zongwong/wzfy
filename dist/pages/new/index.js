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

var _select = require('./../../components/select.js');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var New = function (_wepy$page) {
  _inherits(New, _wepy$page);

  function New() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, New);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = New.__proto__ || Object.getPrototypeOf(New)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '新房'
    }, _this.$repeat = {}, _this.$props = { "areaSelect": { "xmlns:v-bind": "", "v-bind:list.sync": "areaList", "v-bind:status.sync": "areaStatus" }, "priceSelect": { "xmlns:v-bind": "", "v-bind:list.sync": "priceList", "v-bind:status.sync": "priceStatus" }, "typeSelect": { "xmlns:v-bind": "", "v-bind:list.sync": "typeList", "v-bind:status.sync": "typeStatus" }, "propertySelect": { "xmlns:v-bind": "", "v-bind:list.sync": "propertyList", "v-bind:status.sync": "propertyStatus" } }, _this.$events = {}, _this.components = {
      areaSelect: _select2.default,
      priceSelect: _select2.default,
      typeSelect: _select2.default,
      propertySelect: _select2.default
    }, _this.data = {
      mycity: '',
      all: null,
      areaList: [],
      priceList: [{
        text: '不限',
        selected: false
      }, {
        text: '100万以下',
        selected: false
      }, {
        text: '100-150万',
        selected: false
      }, {
        text: '150-200万',
        selected: false
      }, {
        text: '200-250万',
        selected: false
      }, {
        text: '250-300万',
        selected: false
      }, {
        text: '300-500万',
        selected: false
      }, {
        text: '500-1000万',
        selected: false
      }, {
        text: '1000万以上',
        selected: false
      }],
      typeList: [],
      propertyList: [],
      areaStatus: false,
      priceStatus: false,
      typeStatus: false,
      propertyStatus: false
    }, _this.methods = {
      areaSelect: function areaSelect() {
        this.priceStatus = false;
        this.typeStatus = false;
        this.propertyStatus = false;
        this.areaStatus = true;
      },
      priceSelect: function priceSelect() {
        this.areaStatus = false;
        this.typeStatus = false;
        this.propertyStatus = false;
        this.priceStatus = true;
      },
      typeSelect: function typeSelect() {
        this.priceStatus = false;
        this.areaStatus = false;
        this.propertyStatus = false;
        this.typeStatus = true;
      },
      propertySelect: function propertySelect() {
        this.priceStatus = false;
        this.typeStatus = false;
        this.areaStatus = false;
        this.propertyStatus = true;
      }
    }, _this.events = {
      selected: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('xz');
                  _context.next = 3;
                  return this.search();

                case 3:
                  data = _context.sent;

                  console.log(data);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function selected() {
          return _ref2.apply(this, arguments);
        }

        return selected;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(New, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var city, data, houseType, apartmentLayout, counties;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxapi2.default.getCity();

              case 2:
                city = _context2.sent;

                console.log(city);
                this.mycity = city;
                _context2.next = 7;
                return _api2.default.builds({
                  city: city
                });

              case 7:
                data = _context2.sent;
                _context2.next = 10;
                return _api2.default.houseType();

              case 10:
                houseType = _context2.sent;
                _context2.next = 13;
                return _api2.default.apartmentLayout();

              case 13:
                apartmentLayout = _context2.sent;
                _context2.next = 16;
                return _api2.default.counties(city);

              case 16:
                counties = _context2.sent;

                this.all = data;
                this.typeList = this.createArr(houseType);
                this.propertyList = this.createArr(apartmentLayout);
                this.areaList = this.createArr(counties);
                this.$apply();

              case 22:
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
  }, {
    key: 'createArr',
    value: function createArr(arr) {
      if (!Array.isArray(arr)) {
        return false;
      }
      var newArr = [];
      arr.forEach(function (item) {
        newArr.push({
          text: item,
          selected: false
        });
      });
      return newArr;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(arr) {
      var result = arr.filter(function (item) {
        return item.selected;
      });
      var returnStr = '';
      result.forEach(function (item) {
        returnStr += item.text + '-';
      });
      return returnStr;
    }
  }, {
    key: 'search',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.search({
                  county: this.getSelected(this.areaList),
                  total: this.getSelected(this.priceList),
                  property_type: this.getSelected(this.typeList),
                  apartment_layout: this.getSelected(this.propertyList)
                });

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function search() {
        return _ref4.apply(this, arguments);
      }

      return search;
    }()
  }]);

  return New;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(New , 'pages/new/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5ldyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhcmVhU2VsZWN0IiwicHJpY2VTZWxlY3QiLCJ0eXBlU2VsZWN0IiwicHJvcGVydHlTZWxlY3QiLCJkYXRhIiwibXljaXR5IiwiYWxsIiwiYXJlYUxpc3QiLCJwcmljZUxpc3QiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJ0eXBlTGlzdCIsInByb3BlcnR5TGlzdCIsImFyZWFTdGF0dXMiLCJwcmljZVN0YXR1cyIsInR5cGVTdGF0dXMiLCJwcm9wZXJ0eVN0YXR1cyIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwiZ2V0Q2l0eSIsImNpdHkiLCJidWlsZHMiLCJob3VzZVR5cGUiLCJhcGFydG1lbnRMYXlvdXQiLCJjb3VudGllcyIsImNyZWF0ZUFyciIsIiRhcHBseSIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm5ld0FyciIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInJlc3VsdCIsImZpbHRlciIsInJldHVyblN0ciIsImNvdW50eSIsImdldFNlbGVjdGVkIiwidG90YWwiLCJwcm9wZXJ0eV90eXBlIiwiYXBhcnRtZW50X2xheW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxzQkFBcUIsWUFBdEUsRUFBZCxFQUFrRyxlQUFjLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFdBQXRDLEVBQWtELHNCQUFx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O0FBRXRCbUMseUJBQU0sS0FBS0QsV0FBTCxDQUFpQixLQUFLakMsU0FBdEIsQ0FGZ0I7QUFHdEJtQyxpQ0FBYyxLQUFLRixXQUFMLENBQWlCLEtBQUs5QixRQUF0QixDQUhRO0FBSXRCaUMsb0NBQWlCLEtBQUtILFdBQUwsQ0FBaUIsS0FBSzdCLFlBQXRCO0FBSkssaUJBQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBJZ0IsZUFBS2lDLEk7O2tCQUFqQnBELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHd4QXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvd3hhcGknXHJcbiAgaW1wb3J0IHNlbGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlbGVjdCdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5oi/J1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhcmVhU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImFyZWFMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcImFyZWFTdGF0dXNcIn0sXCJwcmljZVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJwcmljZUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwicHJpY2VTdGF0dXNcIn0sXCJ0eXBlU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInR5cGVMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcInR5cGVTdGF0dXNcIn0sXCJwcm9wZXJ0eVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJwcm9wZXJ0eUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwicHJvcGVydHlTdGF0dXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBhcmVhU2VsZWN0OnNlbGVjdCxcclxuICAgICAgcHJpY2VTZWxlY3Q6c2VsZWN0LFxyXG4gICAgICB0eXBlU2VsZWN0OnNlbGVjdCxcclxuICAgICAgcHJvcGVydHlTZWxlY3Q6c2VsZWN0LFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG15Y2l0eTonJyxcclxuICAgICAgYWxsOm51bGwsXHJcbiAgICAgIGFyZWFMaXN0OiBbXSxcclxuICAgICAgcHJpY2VMaXN0Olt7XHJcbiAgICAgICAgICB0ZXh0OifkuI3pmZAnLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIHRleHQ6JzEwMOS4h+S7peS4iycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTAwLTE1MOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTUwLTIwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMjAwLTI1MOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMjUwLTMwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMzAwLTUwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonNTAwLTEwMDDkuIcnLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIHRleHQ6JzEwMDDkuIfku6XkuIonLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9XSxcclxuICAgICAgdHlwZUxpc3Q6W10sXHJcbiAgICAgIHByb3BlcnR5TGlzdDpbXSxcclxuICAgICAgYXJlYVN0YXR1czpmYWxzZSxcclxuICAgICAgcHJpY2VTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHR5cGVTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHByb3BlcnR5U3RhdHVzOmZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFyZWFTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyZWFTdGF0dXMgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9wZXJ0eVNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgYXN5bmMgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3h6JylcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zZWFyY2goKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB3eEFwaS5nZXRDaXR5KClcclxuICAgICAgY29uc29sZS5sb2coY2l0eSlcclxuICAgICAgdGhpcy5teWNpdHkgPSBjaXR5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYnVpbGRzKHtcclxuICAgICAgICBjaXR5OmNpdHlcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgaG91c2VUeXBlID0gYXdhaXQgYXBpLmhvdXNlVHlwZSgpXHJcbiAgICAgIGNvbnN0IGFwYXJ0bWVudExheW91dCA9IGF3YWl0IGFwaS5hcGFydG1lbnRMYXlvdXQoKVxyXG4gICAgICBjb25zdCBjb3VudGllcyA9IGF3YWl0IGFwaS5jb3VudGllcyhjaXR5KVxyXG4gICAgICB0aGlzLmFsbCA9IGRhdGFcclxuICAgICAgdGhpcy50eXBlTGlzdCA9IHRoaXMuY3JlYXRlQXJyKGhvdXNlVHlwZSlcclxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSB0aGlzLmNyZWF0ZUFycihhcGFydG1lbnRMYXlvdXQpXHJcbiAgICAgIHRoaXMuYXJlYUxpc3QgPSB0aGlzLmNyZWF0ZUFycihjb3VudGllcylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQXJyKGFycikge1xyXG4gICAgICBpZighQXJyYXkuaXNBcnJheShhcnIpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3QXJyID0gW11cclxuICAgICAgYXJyLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgbmV3QXJyLnB1c2goe1xyXG4gICAgICAgICAgdGV4dDppdGVtLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbmV3QXJyXHJcbiAgICB9XHJcbiAgICBnZXRTZWxlY3RlZChhcnIpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFyci5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc2VsZWN0ZWRcclxuICAgICAgfSlcclxuICAgICAgbGV0IHJldHVyblN0ciA9ICcnO1xyXG4gICAgICByZXN1bHQuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm5TdHIrPWl0ZW0udGV4dCsnLSdcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHJldHVyblN0clxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VhcmNoKCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXBpLnNlYXJjaCh7XHJcbiAgICAgICAgY291bnR5OnRoaXMuZ2V0U2VsZWN0ZWQodGhpcy5hcmVhTGlzdCksXHJcbiAgICAgICAgdG90YWw6dGhpcy5nZXRTZWxlY3RlZCh0aGlzLnByaWNlTGlzdCksXHJcbiAgICAgICAgcHJvcGVydHlfdHlwZTp0aGlzLmdldFNlbGVjdGVkKHRoaXMudHlwZUxpc3QpLFxyXG4gICAgICAgIGFwYXJ0bWVudF9sYXlvdXQ6dGhpcy5nZXRTZWxlY3RlZCh0aGlzLnByb3BlcnR5TGlzdCksXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=