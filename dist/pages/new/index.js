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
        var city, houseType, apartmentLayout, counties;
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
                this.params.city = city;
                this.$apply();
                // const data = await api.builds({
                //   city:city
                // })
                // this.all = data
                _context2.next = 9;
                return _api2.default.builds({});

              case 9:
                this.page = _context2.sent;

                console.log(this.page);
                this.$apply();
                _context2.next = 14;
                return this.next();

              case 14:
                _context2.next = 16;
                return _api2.default.houseType();

              case 16:
                houseType = _context2.sent;
                _context2.next = 19;
                return _api2.default.apartmentLayout();

              case 19:
                apartmentLayout = _context2.sent;
                _context2.next = 22;
                return _api2.default.cities();

              case 22:
                counties = _context2.sent;


                this.typeList = this.createArr(apartmentLayout);
                this.propertyList = this.createArr(houseType);
                this.areaList = this.createArr(counties, city);
                this.$apply();

              case 27:
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
      var newArr = [];
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
        return item.selected;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5ldyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhcmVhU2VsZWN0IiwicHJpY2VTZWxlY3QiLCJ0eXBlU2VsZWN0IiwicHJvcGVydHlTZWxlY3QiLCJtaXhpbnMiLCJkYXRhIiwibXljaXR5IiwiYWxsIiwiYXJlYUxpc3QiLCJwcmljZUxpc3QiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJ0eXBlTGlzdCIsInByb3BlcnR5TGlzdCIsImFyZWFTdGF0dXMiLCJwcmljZVN0YXR1cyIsInR5cGVTdGF0dXMiLCJwcm9wZXJ0eVN0YXR1cyIsInBhZ2UiLCJsaXN0IiwicGFyYW1zIiwiY2l0eSIsInRvdGFsIiwicHJvcGVydHlfdHlwZSIsImFwYXJ0bWVudF9sYXlvdXQiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImdldENpdHkiLCIkYXBwbHkiLCJidWlsZHMiLCJuZXh0IiwiaG91c2VUeXBlIiwiYXBhcnRtZW50TGF5b3V0IiwiY2l0aWVzIiwiY291bnRpZXMiLCJjcmVhdGVBcnIiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJuZXdBcnIiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJyZXN1bHQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJnZXRTZWxlY3RlZCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxzQkFBcUIsWUFBdEUsRUFBZCxFQUFrRyxlQUFjLEVB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QUlELFNBTEQsTUFLSztBQUNIK0IsaUJBQU9HLElBQVAsQ0FBWTtBQUNWbkMsa0JBQUtrQyxJQURLO0FBRVZqQyxzQkFBUztBQUZDLFdBQVo7QUFJRDtBQUNGLE9BWkQ7QUFhQSxhQUFPK0IsTUFBUDtBQUNEOzs7Z0NBQ1dILEcsRUFBSztBQUNmLFVBQUlPLFNBQVNQLElBQUlRLE1BQUosQ0FBVyxVQUFDSCxJQUFELEVBQVE7QUFDOUIsZUFBT0EsS0FBS2pDLFFBQVo7QUFDRCxPQUZZLENBQWI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBZ0IsY0FBUUMsR0FBUixDQUFZa0IsTUFBWjtBQUNBLFVBQUlBLE9BQU9FLE1BQVgsRUFBbUI7QUFDakIsZUFBT0YsT0FBTyxDQUFQLEVBQVVwQyxJQUFqQjtBQUNELE9BRkQsTUFFSztBQUNILGVBQU8sRUFBUDtBQUNEO0FBRUY7Ozs7Ozs7OztBQUVDLHFCQUFLVSxNQUFMLEdBQWM7QUFDWkMsd0JBQUssS0FBSzRCLFdBQUwsQ0FBaUIsS0FBS3pDLFFBQXRCLENBRE87QUFFWmMseUJBQU0sS0FBSzJCLFdBQUwsQ0FBaUIsS0FBS3hDLFNBQXRCLENBRk07QUFHWmMsaUNBQWMsS0FBSzBCLFdBQUwsQ0FBaUIsS0FBS3BDLFlBQXRCLENBSEY7QUFJWlcsb0NBQWlCLEtBQUt5QixXQUFMLENBQWlCLEtBQUtyQyxRQUF0QjtBQUpMLGlCQUFkO0FBTUEscUJBQUttQixNQUFMO0FBQ0E7QUFDQSxxQkFBS2IsSUFBTCxDQUFVZ0MsS0FBVjs7dUJBQ00sS0FBS2pCLElBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNLdUIsZUFBS2YsSTs7a0JBQWpCekIsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBpbXBvcnQgc2VsZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0J1xyXG4gIGltcG9ydCBwYWdpbmF0aW9uIGZyb20gJy4uLy4uL21peGluL3BhZ2luYXRpb24nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIvydcclxuICAgIH1cclxuICAgIFxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImFyZWFTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiYXJlYUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwiYXJlYVN0YXR1c1wifSxcInByaWNlU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInByaWNlTGlzdFwiLFwidi1iaW5kOnN0YXR1cy5zeW5jXCI6XCJwcmljZVN0YXR1c1wifSxcInR5cGVTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwidHlwZUxpc3RcIixcInYtYmluZDpzdGF0dXMuc3luY1wiOlwidHlwZVN0YXR1c1wifSxcInByb3BlcnR5U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInByb3BlcnR5TGlzdFwiLFwidi1iaW5kOnN0YXR1cy5zeW5jXCI6XCJwcm9wZXJ0eVN0YXR1c1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGFyZWFTZWxlY3Q6c2VsZWN0LFxyXG4gICAgICBwcmljZVNlbGVjdDpzZWxlY3QsXHJcbiAgICAgIHR5cGVTZWxlY3Q6c2VsZWN0LFxyXG4gICAgICBwcm9wZXJ0eVNlbGVjdDpzZWxlY3QsXHJcbiAgICB9XHJcbiAgICBtaXhpbnMgPSBbIHBhZ2luYXRpb24gXVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbXljaXR5OicnLFxyXG4gICAgICBhbGw6bnVsbCxcclxuICAgICAgYXJlYUxpc3Q6IFtdLFxyXG4gICAgICBwcmljZUxpc3Q6W3tcclxuICAgICAgICAgIHRleHQ6J+S4jemZkCcsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTAw5LiH5Lul5LiLJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0OicxMDAtMTUw5LiHJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0OicxNTAtMjAw5LiHJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0OicyMDAtMjUw5LiHJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0OicyNTAtMzAw5LiHJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0OiczMDAtNTAw5LiHJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0ZXh0Oic1MDAtMTAwMOS4hycsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDonMTAwMOS4h+S7peS4iicsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH1dLFxyXG4gICAgICB0eXBlTGlzdDpbXSxcclxuICAgICAgcHJvcGVydHlMaXN0OltdLFxyXG4gICAgICBhcmVhU3RhdHVzOmZhbHNlLFxyXG4gICAgICBwcmljZVN0YXR1czpmYWxzZSxcclxuICAgICAgdHlwZVN0YXR1czpmYWxzZSxcclxuICAgICAgcHJvcGVydHlTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHBhZ2U6IHtcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcGFyYW1zOntcclxuICAgICAgICBjaXR5OicnLFxyXG4gICAgICAgIHRvdGFsOicnLFxyXG4gICAgICAgIHByb3BlcnR5X3R5cGU6JycsXHJcbiAgICAgICAgYXBhcnRtZW50X2xheW91dDonJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFyZWFTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyZWFTdGF0dXMgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BlcnR5U3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9wZXJ0eVNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXJlYVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgYXN5bmMgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3h6JylcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zZWFyY2goKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgY2l0eSA9IGF3YWl0IHd4QXBpLmdldENpdHkoKVxyXG4gICAgICBjb25zb2xlLmxvZyhjaXR5KVxyXG4gICAgICB0aGlzLm15Y2l0eSA9IGNpdHlcclxuICAgICAgdGhpcy5wYXJhbXMuY2l0eSA9IGNpdHlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmJ1aWxkcyh7XHJcbiAgICAgIC8vICAgY2l0eTpjaXR5XHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vIHRoaXMuYWxsID0gZGF0YVxyXG4gICAgICB0aGlzLnBhZ2UgPSBhd2FpdCBhcGkuYnVpbGRzKHt9KVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgYXdhaXQgdGhpcy5uZXh0KCk7XHJcblxyXG4gICAgICBjb25zdCBob3VzZVR5cGUgPSBhd2FpdCBhcGkuaG91c2VUeXBlKClcclxuICAgICAgY29uc3QgYXBhcnRtZW50TGF5b3V0ID0gYXdhaXQgYXBpLmFwYXJ0bWVudExheW91dCgpXHJcbiAgICAgIGNvbnN0IGNvdW50aWVzID0gYXdhaXQgYXBpLmNpdGllcygpXHJcblxyXG4gICAgICB0aGlzLnR5cGVMaXN0ID0gdGhpcy5jcmVhdGVBcnIoYXBhcnRtZW50TGF5b3V0KVxyXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHRoaXMuY3JlYXRlQXJyKGhvdXNlVHlwZSlcclxuICAgICAgdGhpcy5hcmVhTGlzdCA9IHRoaXMuY3JlYXRlQXJyKGNvdW50aWVzLGNpdHkpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICAgIGNyZWF0ZUFycihhcnIsY2l0eSkge1xyXG4gICAgICBpZighQXJyYXkuaXNBcnJheShhcnIpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3QXJyID0gW11cclxuICAgICAgYXJyLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgaWYoY2l0eSAmJiBpdGVtID09IGNpdHkgKXtcclxuICAgICAgICAgIG5ld0Fyci5wdXNoKHtcclxuICAgICAgICAgICAgdGV4dDppdGVtLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDp0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgbmV3QXJyLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0Oml0ZW0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gIFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbmV3QXJyXHJcbiAgICB9XHJcbiAgICBnZXRTZWxlY3RlZChhcnIpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGFyci5maWx0ZXIoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc2VsZWN0ZWRcclxuICAgICAgfSlcclxuICAgICAgLy8gbGV0IHJldHVyblN0ciA9ICcnO1xyXG4gICAgICAvLyByZXN1bHQuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgLy8gICByZXR1cm5TdHIrPWl0ZW0udGV4dCsnLSdcclxuICAgICAgLy8gfSlcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRbMF0udGV4dFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGFzeW5jIHNlYXJjaCgpIHtcclxuICAgICAgdGhpcy5wYXJhbXMgPSB7XHJcbiAgICAgICAgY2l0eTp0aGlzLmdldFNlbGVjdGVkKHRoaXMuYXJlYUxpc3QpLFxyXG4gICAgICAgIHRvdGFsOnRoaXMuZ2V0U2VsZWN0ZWQodGhpcy5wcmljZUxpc3QpLFxyXG4gICAgICAgIHByb3BlcnR5X3R5cGU6dGhpcy5nZXRTZWxlY3RlZCh0aGlzLnByb3BlcnR5TGlzdCksXHJcbiAgICAgICAgYXBhcnRtZW50X2xheW91dDp0aGlzLmdldFNlbGVjdGVkKHRoaXMudHlwZUxpc3QpLFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgLy8gcmV0dXJuIGF3YWl0IGFwaS5idWlsZHMoKVxyXG4gICAgICB0aGlzLnBhZ2UucmVzZXQoKVxyXG4gICAgICBhd2FpdCB0aGlzLm5leHQoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19