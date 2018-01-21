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
      areaList: [{
        text: '司马',
        selected: false
      }, {
        text: '请问',
        selected: false
      }],
      priceList: [],
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
      selected: function selected() {
        console.log('xz');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(New, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var city, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxapi2.default.getCity();

              case 2:
                city = _context.sent;

                this.mycity = city;
                _context.next = 6;
                return _api2.default.builds({
                  city: city
                });

              case 6:
                data = _context.sent;

                this.all = data;
                this.$apply();

              case 9:
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

  return New;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(New , 'pages/new/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk5ldyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhcmVhU2VsZWN0IiwicHJpY2VTZWxlY3QiLCJ0eXBlU2VsZWN0IiwicHJvcGVydHlTZWxlY3QiLCJkYXRhIiwibXljaXR5IiwiYWxsIiwiYXJlYUxpc3QiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJwcmljZUxpc3QiLCJ0eXBlTGlzdCIsInByb3BlcnR5TGlzdCIsImFyZWFTdGF0dXMiLCJwcmljZVN0YXR1cyIsInR5cGVTdGF0dXMiLCJwcm9wZXJ0eVN0YXR1cyIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2l0eSIsImNpdHkiLCJidWlsZHMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsVUFBdEMsRUFBaUQsc0JBQXFCLFlBQXRFLEVBQWQsRUFBa0csZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixXQUF0QyxFQUFrRCxzQkFBcUIsYUFBdkUsRUFBaEgsRUFBc00sY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxzQkFBcUIsWUFBdEUsRUFBbk4sRUFBdVMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGNBQXRDLEVBQXFELHNCQUFxQixnQkFBMUUsRUFBeFQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsa0NBRFE7QUFFUkMsbUNBRlE7QUFHUkMsa0NBSFE7QUFJUkM7QUFKUSxLLFFBT1ZDLEksR0FBTztBQUNMQyxjQUFPLEVBREY7QUFFTEMsV0FBSSxJQUZDO0FBR0xDLGdCQUFVLENBQ1I7QUFDRUMsY0FBSyxJQURQO0FBRUVDLGtCQUFTO0FBRlgsT0FEUSxFQUlOO0FBQ0FELGNBQUssSUFETDtBQUVBQyxrQkFBUztBQUZULE9BSk0sQ0FITDtBQVlMQyxpQkFBVSxFQVpMO0FBYUxDLGdCQUFTLEVBYko7QUFjTEMsb0JBQWEsRUFkUjtBQWVMQyxrQkFBVyxLQWZOO0FBZ0JMQyxtQkFBWSxLQWhCUDtBQWlCTEMsa0JBQVcsS0FqQk47QUFrQkxDLHNCQUFlO0FBbEJWLEssUUF1QlBDLE8sR0FBVTtBQUNSakIsZ0JBRFEsd0JBQ0s7QUFDWCxhQUFLYyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLGFBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxhQUFLSCxVQUFMLEdBQWtCLElBQWxCO0FBQ0QsT0FOTztBQU9SWixpQkFQUSx5QkFPTTtBQUNaLGFBQUtZLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLGFBQUtGLFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxPQVpPO0FBYVJaLGdCQWJRLHdCQWFLO0FBQ1gsYUFBS1ksV0FBTCxHQUFtQixLQUFuQjtBQUNBLGFBQUtELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLRyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsYUFBS0QsVUFBTCxHQUFrQixJQUFsQjtBQUNELE9BbEJPO0FBbUJSWixvQkFuQlEsNEJBbUJTO0FBQ2YsYUFBS1csV0FBTCxHQUFtQixLQUFuQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsYUFBS0csY0FBTCxHQUFzQixJQUF0QjtBQUNEO0FBeEJPLEssUUEyQlZFLE0sR0FBUztBQUNQVCxjQURPLHNCQUNJO0FBQ1RVLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNEO0FBSE0sSzs7Ozs7Ozs7Ozs7Ozt1QkFPWSxnQkFBTUMsT0FBTixFOzs7QUFBYkMsb0I7O0FBQ04scUJBQUtqQixNQUFMLEdBQWNpQixJQUFkOzt1QkFDbUIsY0FBSUMsTUFBSixDQUFXO0FBQzVCRCx3QkFBS0E7QUFEdUIsaUJBQVgsQzs7O0FBQWJsQixvQjs7QUFHTixxQkFBS0UsR0FBTCxHQUFXRixJQUFYO0FBQ0EscUJBQUtvQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUU2QixlQUFLQyxJOztrQkFBakJoQyxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGltcG9ydCB3eEFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3d4YXBpJ1xyXG4gIGltcG9ydCBzZWxlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWxlY3QnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIvydcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYXJlYVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJhcmVhTGlzdFwiLFwidi1iaW5kOnN0YXR1cy5zeW5jXCI6XCJhcmVhU3RhdHVzXCJ9LFwicHJpY2VTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicHJpY2VMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcInByaWNlU3RhdHVzXCJ9LFwidHlwZVNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0eXBlTGlzdFwiLFwidi1iaW5kOnN0YXR1cy5zeW5jXCI6XCJ0eXBlU3RhdHVzXCJ9LFwicHJvcGVydHlTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicHJvcGVydHlMaXN0XCIsXCJ2LWJpbmQ6c3RhdHVzLnN5bmNcIjpcInByb3BlcnR5U3RhdHVzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgYXJlYVNlbGVjdDpzZWxlY3QsXHJcbiAgICAgIHByaWNlU2VsZWN0OnNlbGVjdCxcclxuICAgICAgdHlwZVNlbGVjdDpzZWxlY3QsXHJcbiAgICAgIHByb3BlcnR5U2VsZWN0OnNlbGVjdCxcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBteWNpdHk6JycsXHJcbiAgICAgIGFsbDpudWxsLFxyXG4gICAgICBhcmVhTGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6J+WPuOmprCcsXHJcbiAgICAgICAgICBzZWxlY3RlZDpmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgdGV4dDon6K+36ZeuJyxcclxuICAgICAgICAgIHNlbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBwcmljZUxpc3Q6W10sXHJcbiAgICAgIHR5cGVMaXN0OltdLFxyXG4gICAgICBwcm9wZXJ0eUxpc3Q6W10sXHJcbiAgICAgIGFyZWFTdGF0dXM6ZmFsc2UsXHJcbiAgICAgIHByaWNlU3RhdHVzOmZhbHNlLFxyXG4gICAgICB0eXBlU3RhdHVzOmZhbHNlLFxyXG4gICAgICBwcm9wZXJ0eVN0YXR1czpmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhcmVhU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcmVhU3RhdHVzID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwcmljZVNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLmFyZWFTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcmljZVN0YXR1cyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdHlwZVNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLnByaWNlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyZWFTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcGVydHlTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgcHJvcGVydHlTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFyZWFTdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcGVydHlTdGF0dXMgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIHNlbGVjdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd4eicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB3eEFwaS5nZXRDaXR5KClcclxuICAgICAgdGhpcy5teWNpdHkgPSBjaXR5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYnVpbGRzKHtcclxuICAgICAgICBjaXR5OmNpdHlcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5hbGwgPSBkYXRhXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==