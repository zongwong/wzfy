'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../interfaces/api.js');

var _api2 = _interopRequireDefault(_api);

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
      content: ''
    }, _this.methods = {
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
                  if (this.content) {
                    _context.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写其他需求'
                  });
                  return _context.abrupt('return', false);

                case 9:
                  _context.next = 11;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: this.type,
                    content: this.content
                  });

                case 11:
                  data = _context.sent;

                  if (data) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '推荐成功'
                    });
                  }

                case 13:
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

  return newForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(newForm , 'pages/new/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibmV3Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJtZXRob2RzIiwibmFtZUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwicmVwb3J0cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssU0FKQTtBQUtMQyxlQUFRO0FBTEgsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1AsSUFBTCxHQUFZTyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS04sS0FBTCxHQUFhTSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVCxHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJVLGtCQVZRLHdCQVVLTCxDQVZMLEVBVVE7QUFDZCxhQUFLSCxPQUFMLEdBQWVHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQVpPO0FBYUZJLFlBYkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFjRixLQUFLYixJQWRIO0FBQUE7QUFBQTtBQUFBOztBQWVKLGlDQUFLYyxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViWCw2QkFBUTtBQUZLLG1CQUFmO0FBZkksbURBbUJHLEtBbkJIOztBQUFBO0FBQUEsc0JBcUJGLEtBQUtILEtBckJIO0FBQUE7QUFBQTtBQUFBOztBQXNCSixpQ0FBS2EsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYlgsNkJBQVE7QUFGSyxtQkFBZjtBQXRCSSxtREEwQkcsS0ExQkg7O0FBQUE7QUFBQSxzQkE0QkYsS0FBS0EsT0E1Qkg7QUFBQTtBQUFBO0FBQUE7O0FBNkJKLGlDQUFLVSxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViWCw2QkFBUTtBQUZLLG1CQUFmO0FBN0JJLG1EQWlDRyxLQWpDSDs7QUFBQTtBQUFBO0FBQUEseUJBbUNhLGNBQUlZLE9BQUosQ0FBWTtBQUM3QmhCLDBCQUFLLEtBQUtBLElBRG1CO0FBRTdCQywyQkFBTSxLQUFLQSxLQUZrQjtBQUc3QkMseUJBQUksS0FBS0EsR0FIb0I7QUFJN0JDLDBCQUFLLEtBQUtBLElBSm1CO0FBSzdCQyw2QkFBUSxLQUFLQTtBQUxnQixtQkFBWixDQW5DYjs7QUFBQTtBQW1DQUwsc0JBbkNBOztBQTBDTixzQkFBR0EsSUFBSCxFQUFRO0FBQ04sbUNBQUtlLFNBQUwsQ0FBZTtBQUNiQyw2QkFBTSxJQURPO0FBRWJYLCtCQUFRO0FBRksscUJBQWY7QUFJRDs7QUEvQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBYnlCLGVBQUthLEk7O2tCQUFyQnJCLE8iLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+aOqOiNkCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICB0eXBlOiduZXctYnV5JyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgY29udGVudElucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBzdWJtaXQoKXtcclxuICAgICAgICBpZighdGhpcy5uYW1lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWnk+WQjSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMucGhvbmUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5omL5py65Y+3J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jb250ZW50KXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWFtuS7lumcgOaxgidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgY29udGVudDp0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+aOqOiNkOaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuIl19