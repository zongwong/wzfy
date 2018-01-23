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

var FitForm = function (_wepy$page) {
  _inherits(FitForm, _wepy$page);

  function FitForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FitForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FitForm.__proto__ || Object.getPrototypeOf(FitForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '装修推荐'
    }, _this.data = {
      name: '',
      phone: '',
      sex: 'men',
      type: 'decorate',
      content: '',
      need: '自住'
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
      needSelect: function needSelect(need) {
        this.need = need;
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
                    content: '装修类型:' + this.need + ',' + this.content
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

  return FitForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FitForm , 'pages/fit/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRml0Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJuZWVkIiwibWV0aG9kcyIsIm5hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJzZXhTZWxlY3QiLCJuZWVkU2VsZWN0IiwiY29udGVudElucHV0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJyZXBvcnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxVQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxZQUFLO0FBTkEsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1IsSUFBTCxHQUFZUSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJXLGdCQVZRLHNCQVVHUixJQVZILEVBVVM7QUFDZixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRCxPQVpPO0FBYVJTLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JGSyxZQWhCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWlCRixLQUFLZixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViYiw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRixLQUFLSCxLQXhCSDtBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtlLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJiLDZCQUFRO0FBRkssbUJBQWY7QUF6QkksbURBNkJHLEtBN0JIOztBQUFBO0FBQUEsc0JBK0JGLEtBQUtBLE9BL0JIO0FBQUE7QUFBQTtBQUFBOztBQWdDSixpQ0FBS1ksU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmIsNkJBQVE7QUFGSyxtQkFBZjtBQWhDSSxtREFvQ0csS0FwQ0g7O0FBQUE7QUFBQTtBQUFBLHlCQXNDYSxjQUFJYyxPQUFKLENBQVk7QUFDN0JsQiwwQkFBSyxLQUFLQSxJQURtQjtBQUU3QkMsMkJBQU0sS0FBS0EsS0FGa0I7QUFHN0JDLHlCQUFJLEtBQUtBLEdBSG9CO0FBSTdCQywwQkFBSyxLQUFLQSxJQUptQjtBQUs3QkMsNkJBQVEsVUFBUSxLQUFLQyxJQUFiLEdBQWtCLEdBQWxCLEdBQXNCLEtBQUtEO0FBTE4sbUJBQVosQ0F0Q2I7O0FBQUE7QUFzQ0FMLHNCQXRDQTs7QUE2Q04sc0JBQUdBLElBQUgsRUFBUTtBQUNOLG1DQUFLaUIsU0FBTCxDQUFlO0FBQ2JDLDZCQUFNLElBRE87QUFFYmIsK0JBQVE7QUFGSyxxQkFBZjtBQUlEOztBQWxESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7RUFkeUIsZUFBS2UsSTs7a0JBQXJCdkIsTyIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpdEZvcm0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6KOF5L+u5o6o6I2QJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6JycsXHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICBzZXg6J21lbicsXHJcbiAgICAgIHR5cGU6J2RlY29yYXRlJyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgbmVlZDon6Ieq5L2PJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBuZWVkU2VsZWN0KG5lZWQpIHtcclxuICAgICAgICB0aGlzLm5lZWQgPSBuZWVkXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnBob25lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY29udGVudCl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlhbbku5bpnIDmsYInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXgsXHJcbiAgICAgICAgICB0eXBlOnRoaXMudHlwZSxcclxuICAgICAgICAgIGNvbnRlbnQ6J+ijheS/ruexu+WeizonK3RoaXMubmVlZCsnLCcrdGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OifmjqjojZDmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19