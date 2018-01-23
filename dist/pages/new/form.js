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

var newForm = function (_wepy$page) {
  _inherits(newForm, _wepy$page);

  function newForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, newForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = newForm.__proto__ || Object.getPrototypeOf(newForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '新房推荐'
    }, _this.data = {
      name: '',
      phone: '',
      sex: 'men',
      type: 'new-buy',
      content: '',
      build: '请选择意向楼盘',
      builds: []
    }, _this.methods = {
      buildInput: function buildInput(e) {
        this.build = this.builds[e.detail.value];
      },
      nameInput: function nameInput(e) {
        this.name = e.detail.value;
      },
      phoneInput: function phoneInput(e) {
        this.phone = e.detail.value;
      },
      sexSelect: function sexSelect(sex) {
        this.sex = sex;
      },
      contentInput: function contentInput(e) {
        this.content = e.detail.value;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.name) {
                    _context.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写姓名'
                  });
                  return _context.abrupt('return', false);

                case 3:
                  if (this.phone) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  if (!(this.build == '请选择意向楼盘')) {
                    _context.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请选择意向楼盘'
                  });
                  return _context.abrupt('return', false);

                case 9:
                  if (this.content) {
                    _context.next = 12;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写其他需求'
                  });
                  return _context.abrupt('return', false);

                case 12:
                  _context.next = 14;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: this.type,
                    content: this.content
                  });

                case 14:
                  data = _context.sent;

                  if (data) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '推荐成功'
                    });
                  }

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(newForm, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var city, builds;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxapi2.default.getCity();

              case 2:
                city = _context2.sent;
                _context2.next = 5;
                return _api2.default.buildsName({
                  city: city
                });

              case 5:
                builds = _context2.sent;

                this.builds = builds;
                this.$apply();

              case 8:
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

  return newForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(newForm , 'pages/new/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibmV3Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJidWlsZCIsImJ1aWxkcyIsIm1ldGhvZHMiLCJidWlsZElucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwicmVwb3J0cyIsImdldENpdHkiLCJjaXR5IiwiYnVpbGRzTmFtZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLLEVBREE7QUFFTEMsYUFBTSxFQUZEO0FBR0xDLFdBQUksS0FIQztBQUlMQyxZQUFLLFNBSkE7QUFLTEMsZUFBUSxFQUxIO0FBTUxDLGFBQU0sU0FORDtBQU9MQyxjQUFPO0FBUEYsSyxRQVVQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLGFBQUtKLEtBQUwsR0FBYSxLQUFLQyxNQUFMLENBQVlHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckIsQ0FBYjtBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJRUgsQ0FKRixFQUlLO0FBQ1gsYUFBS1QsSUFBTCxHQUFZUyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FOTztBQU9SRSxnQkFQUSxzQkFPR0osQ0FQSCxFQU9NO0FBQ1osYUFBS1IsS0FBTCxHQUFhUSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FUTztBQVVSRyxlQVZRLHFCQVVFWixHQVZGLEVBVU87QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVpPO0FBYVJhLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLTCxPQUFMLEdBQWVLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JGSyxZQWhCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWlCRixLQUFLaEIsSUFqQkg7QUFBQTtBQUFBO0FBQUE7O0FBa0JKLGlDQUFLaUIsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVE7QUFGSyxtQkFBZjtBQWxCSSxtREFzQkcsS0F0Qkg7O0FBQUE7QUFBQSxzQkF3QkYsS0FBS0gsS0F4Qkg7QUFBQTtBQUFBO0FBQUE7O0FBeUJKLGlDQUFLZ0IsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVE7QUFGSyxtQkFBZjtBQXpCSSxtREE2QkcsS0E3Qkg7O0FBQUE7QUFBQSx3QkErQkgsS0FBS0MsS0FBTCxJQUFZLFNBL0JUO0FBQUE7QUFBQTtBQUFBOztBQWdDSixpQ0FBS1ksU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVE7QUFGSyxtQkFBZjtBQWhDSSxtREFvQ0csS0FwQ0g7O0FBQUE7QUFBQSxzQkFzQ0YsS0FBS0EsT0F0Q0g7QUFBQTtBQUFBO0FBQUE7O0FBdUNKLGlDQUFLYSxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBdkNJLG1EQTJDRyxLQTNDSDs7QUFBQTtBQUFBO0FBQUEseUJBNkNhLGNBQUllLE9BQUosQ0FBWTtBQUM3Qm5CLDBCQUFLLEtBQUtBLElBRG1CO0FBRTdCQywyQkFBTSxLQUFLQSxLQUZrQjtBQUc3QkMseUJBQUksS0FBS0EsR0FIb0I7QUFJN0JDLDBCQUFLLEtBQUtBLElBSm1CO0FBSzdCQyw2QkFBUSxLQUFLQTtBQUxnQixtQkFBWixDQTdDYjs7QUFBQTtBQTZDQUwsc0JBN0NBOztBQW9ETixzQkFBR0EsSUFBSCxFQUFRO0FBQ04sbUNBQUtrQixTQUFMLENBQWU7QUFDYkMsNkJBQU0sSUFETztBQUViZCwrQkFBUTtBQUZLLHFCQUFmO0FBSUQ7O0FBekRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs7Ozs7Ozt1QkE2RFcsZ0JBQU1nQixPQUFOLEU7OztBQUFiQyxvQjs7dUJBQ2UsY0FBSUMsVUFBSixDQUFlO0FBQ2xDRCx3QkFBS0E7QUFENkIsaUJBQWYsQzs7O0FBQWZmLHNCOztBQUdOLHFCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxxQkFBS2lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRmlDLGVBQUtDLEk7O2tCQUFyQjVCLE8iLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+aOqOiNkCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICB0eXBlOiduZXctYnV5JyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgYnVpbGQ6J+ivt+mAieaLqeaEj+WQkealvOebmCcsXHJcbiAgICAgIGJ1aWxkczpbXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGJ1aWxkSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGQgPSB0aGlzLmJ1aWxkc1tlLmRldGFpbC52YWx1ZV1cclxuICAgICAgfSxcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnBob25lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5idWlsZD09J+ivt+mAieaLqeaEj+WQkealvOebmCcpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+36YCJ5oup5oSP5ZCR5qW855uYJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb250ZW50KXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWFtuS7lumcgOaxgidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgY29udGVudDp0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+aOqOiNkOaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB3eEFwaS5nZXRDaXR5KClcclxuICAgICAgY29uc3QgYnVpbGRzID0gYXdhaXQgYXBpLmJ1aWxkc05hbWUoe1xyXG4gICAgICAgIGNpdHk6Y2l0eVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmJ1aWxkcyA9IGJ1aWxkc1xyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=