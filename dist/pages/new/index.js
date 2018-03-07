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

var _pagination = require('./../../mixin/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

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
    }, _this.mixins = [_pagination2.default], _this.data = {
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
      propertyStatus: false,
      page: {
        list: []
      },
      params: {
        city: '',
        total: '',
        property_type: '',
        apartment_layout: ''
      }
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
      },
      toDetail: function toDetail(id) {
        _wepy2.default.navigateTo({
          url: '/pages/new/detail?id=' + id
        });
      },
      toForm: function toForm(city, type) {
        _wepy2.default.navigateTo({
          url: '/pages/new/form?city=' + city + '&type=' + type
        });
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var houseType, apartmentLayout, counties;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // const city = await wxApi.getCity()
                // console.log(city)
                // this.mycity = city
                this.params.city = '';
                this.$apply();
                // const data = await api.builds({
                //   city:city
                // })
                // this.all = data
                _context2.next = 4;
                return _api2.default.builds({});

              case 4:
                this.page = _context2.sent;

                // console.log(this.page)
                this.$apply();
                _context2.next = 8;
                return this.next();

              case 8:
                _context2.next = 10;
                return _api2.default.houseType();

              case 10:
                houseType = _context2.sent;
                _context2.next = 13;
                return _api2.default.apartmentLayout();

              case 13:
                apartmentLayout = _context2.sent;
                _context2.next = 16;
                return _api2.default.cities();

              case 16:
                counties = _context2.sent;


                this.typeList = this.createArr(apartmentLayout);
                this.propertyList = this.createArr(houseType);
                this.areaList = this.createArr(counties, '不限');
                this.$apply();

              case 21:
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
    value: function createArr(arr, city) {
      if (!Array.isArray(arr)) {
        return false;
      }
      var newArr = [{
        text: '不限',
        selected: false
      }];
      arr.forEach(function (item) {
        if (city && item == city) {
          newArr.push({
            text: item,
            selected: true
          });
        } else {
          newArr.push({
            text: item,
            selected: false
          });
        }
      });
      return newArr;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(arr) {
      var result = arr.filter(function (item) {
        return item.selected && item.text != '不限';
      });
      // let returnStr = '';
      // result.forEach((item)=>{
      //   returnStr+=item.text+'-'
      // })
      console.log(result);
      if (result.length) {
        return result[0].text;
      } else {
        return '';
      }
    }
  }, {
    key: 'search',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.params = {
                  city: this.getSelected(this.areaList),
                  total: this.getSelected(this.priceList),
                  property_type: this.getSelected(this.propertyList),
                  apartment_layout: this.getSelected(this.typeList)
                };
                this.$apply();
                // return await api.builds()
                this.page.reset();
                _context3.next = 5;
                return this.next();

              case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5ldyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhcmVhU2VsZWN0IiwicHJpY2VTZWxlY3QiLCJ0eXBlU2VsZWN0IiwicHJvcGVydHlTZWxlY3QiLCJtaXhpbnMiLCJkYXRhIiwibXljaXR5IiwiYWxsIiwiYXJlYUxpc3QiLCJwcmljZUxpc3QiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJ0eXBlTGlzdCIsInByb3BlcnR5TGlzdCIsImFyZWFTdGF0dXMiLCJwcmljZVN0YXR1cyIsInR5cGVTdGF0dXMiLCJwcm9wZXJ0eVN0YXR1cyIsInBhZ2UiLCJsaXN0IiwicGFyYW1zIiwiY2l0eSIsInRvdGFsIiwicHJvcGVydHlfdHlwZSIsImFwYXJ0bWVudF9sYXlvdXQiLCJtZXRob2RzIiwidG9EZXRhaWwiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0Zvcm0iLCJ0eXBlIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIiRhcHBseSIsImJ1aWxkcyIsIm5leHQiLCJob3VzZVR5cGUiLCJhcGFydG1lbnRMYXlvdXQiLCJjaXRpZXMiLCJjb3VudGllcyIsImNyZWF0ZUFyciIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm5ld0FyciIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInJlc3VsdCIsImZpbHRlciIsImxlbmd0aCIsImdldFNlbGVjdGVkIiwicmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFVB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Q00sS0FBS2pCLElBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhMdUIsZUFBS3BCLEk7O2tCQUFqQnpCLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHd4QXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvd3hhcGknXHJcbiAgaW1wb3J0IHNlbGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlbGVjdCdcclxuICBpbXBvcnQgcGFnaW5hdGlvbiBmcm9tICcuLi8uLi9taXhpbi9wYWdpbmF0aW9uJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDmiL8nXHJcbiAgICB9XHJcbiAgICBcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhcmVhU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImFyZWFMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcImFyZWFTdGF0dXNcIn0sXCJwcmljZVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJwcmljZUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwicHJpY2VTdGF0dXNcIn0sXCJ0eXBlU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInR5cGVMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcInR5cGVTdGF0dXNcIn0sXCJwcm9wZXJ0eVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJwcm9wZXJ0eUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwicHJvcGVydHlTdGF0dXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBhcmVhU2VsZWN0OnNlbGVjdCxcclxuICAgICAgcHJpY2VTZWxlY3Q6c2VsZWN0LFxyXG4gICAgICB0eXBlU2VsZWN0OnNlbGVjdCxcclxuICAgICAgcHJvcGVydHlTZWxlY3Q6c2VsZWN0LFxyXG4gICAgfVxyXG4gICAgbWl4aW5zID0gWyBwYWdpbmF0aW9uIF1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG15Y2l0eTonJyxcclxuICAgICAgYWxsOm51bGwsXHJcbiAgICAgIGFyZWFMaXN0OiBbXSxcclxuICAgICAgcHJpY2VMaXN0Olt7XHJcbiAgICAgICAgICB0ZXh0OifkuI3pmZAnLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIHRleHQ6JzEwMOS4h+S7peS4iycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTAwLTE1MOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTUwLTIwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMjAwLTI1MOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMjUwLTMwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMzAwLTUwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonNTAwLTEwMDDkuIcnLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIHRleHQ6JzEwMDDkuIfku6XkuIonLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9XSxcclxuICAgICAgdHlwZUxpc3Q6W10sXHJcbiAgICAgIHByb3BlcnR5TGlzdDpbXSxcclxuICAgICAgYXJlYVN0YXR1czpmYWxzZSxcclxuICAgICAgcHJpY2VTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHR5cGVTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHByb3BlcnR5U3RhdHVzOmZhbHNlLFxyXG4gICAgICBwYWdlOiB7XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgY2l0eTonJyxcclxuICAgICAgICB0b3RhbDonJyxcclxuICAgICAgICBwcm9wZXJ0eV90eXBlOicnLFxyXG4gICAgICAgIGFwYXJ0bWVudF9sYXlvdXQ6JycsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXJlYVNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcGVydHlTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgcHJpY2VTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcGVydHlTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJpY2VTdGF0dXMgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGVTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcmVhU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3BlcnR5U2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcmVhU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RldGFpbChpZCkge1xyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6YC9wYWdlcy9uZXcvZGV0YWlsP2lkPSR7aWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRm9ybShjaXR5LHR5cGUpIHtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOmAvcGFnZXMvbmV3L2Zvcm0/Y2l0eT0ke2NpdHl9JnR5cGU9JHt0eXBlfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBhc3luYyBzZWxlY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygneHonKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNlYXJjaCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAvLyBjb25zdCBjaXR5ID0gYXdhaXQgd3hBcGkuZ2V0Q2l0eSgpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNpdHkpXHJcbiAgICAgIC8vIHRoaXMubXljaXR5ID0gY2l0eVxyXG4gICAgICB0aGlzLnBhcmFtcy5jaXR5ID0gJydcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmJ1aWxkcyh7XHJcbiAgICAgIC8vICAgY2l0eTpjaXR5XHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vIHRoaXMuYWxsID0gZGF0YVxyXG4gICAgICB0aGlzLnBhZ2UgPSBhd2FpdCBhcGkuYnVpbGRzKHt9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBob3VzZVR5cGUgPSBhd2FpdCBhcGkuaG91c2VUeXBlKClcclxuICAgICAgY29uc3QgYXBhcnRtZW50TGF5b3V0ID0gYXdhaXQgYXBpLmFwYXJ0bWVudExheW91dCgpXHJcbiAgICAgIGNvbnN0IGNvdW50aWVzID0gYXdhaXQgYXBpLmNpdGllcygpXHJcblxyXG4gICAgICB0aGlzLnR5cGVMaXN0ID0gdGhpcy5jcmVhdGVBcnIoYXBhcnRtZW50TGF5b3V0KVxyXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHRoaXMuY3JlYXRlQXJyKGhvdXNlVHlwZSlcclxuICAgICAgdGhpcy5hcmVhTGlzdCA9IHRoaXMuY3JlYXRlQXJyKGNvdW50aWVzLCfkuI3pmZAnKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBjcmVhdGVBcnIoYXJyLGNpdHkpIHtcclxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoYXJyKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld0FyciA9IFt7XHJcbiAgICAgICAgICB0ZXh0OifkuI3pmZAnLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICB9XVxyXG4gICAgICBhcnIuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICBpZihjaXR5ICYmIGl0ZW0gPT0gY2l0eSApe1xyXG4gICAgICAgICAgbmV3QXJyLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0Oml0ZW0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOnRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuZXdBcnIucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6aXRlbSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6ZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBuZXdBcnJcclxuICAgIH1cclxuICAgIGdldFNlbGVjdGVkKGFycikge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXJyLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gaXRlbS5zZWxlY3RlZCAmJiBpdGVtLnRleHQhPSfkuI3pmZAnXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGxldCByZXR1cm5TdHIgPSAnJztcclxuICAgICAgLy8gcmVzdWx0LmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgIC8vICAgcmV0dXJuU3RyKz1pdGVtLnRleHQrJy0nXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0WzBdLnRleHRcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBhc3luYyBzZWFyY2goKSB7XHJcbiAgICAgIHRoaXMucGFyYW1zID0ge1xyXG4gICAgICAgIGNpdHk6dGhpcy5nZXRTZWxlY3RlZCh0aGlzLmFyZWFMaXN0KSxcclxuICAgICAgICB0b3RhbDp0aGlzLmdldFNlbGVjdGVkKHRoaXMucHJpY2VMaXN0KSxcclxuICAgICAgICBwcm9wZXJ0eV90eXBlOnRoaXMuZ2V0U2VsZWN0ZWQodGhpcy5wcm9wZXJ0eUxpc3QpLFxyXG4gICAgICAgIGFwYXJ0bWVudF9sYXlvdXQ6dGhpcy5nZXRTZWxlY3RlZCh0aGlzLnR5cGVMaXN0KSxcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIC8vIHJldHVybiBhd2FpdCBhcGkuYnVpbGRzKClcclxuICAgICAgdGhpcy5wYWdlLnJlc2V0KClcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==