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

var Form = function (_wepy$page) {
  _inherits(Form, _wepy$page);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '二手房'
    }, _this.data = {
      name: '',
      phone: '',
      sex: 'men',
      type: 'hand-buy',
      content: '',
      zx: ''
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
      needSelect: function needSelect(type) {
        this.type = type;
      },
      contentInput: function contentInput(e) {
        this.content = e.detail.value;
      },
      zxSelect: function zxSelect(zx) {
        this.zx = zx;
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
                    content: '装修程度:' + this.zx + ',' + this.content
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

  return Form;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Form , 'pages/house/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJ6eCIsIm1ldGhvZHMiLCJuYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwaG9uZUlucHV0Iiwic2V4U2VsZWN0IiwibmVlZFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInp4U2VsZWN0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJyZXBvcnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxVQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxVQUFHO0FBTkUsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1IsSUFBTCxHQUFZUSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJXLGdCQVZRLHNCQVVHVixJQVZILEVBVVM7QUFDZixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRCxPQVpPO0FBYVJXLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JSSyxjQWhCUSxvQkFnQkNWLEVBaEJELEVBZ0JLO0FBQ1gsYUFBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0QsT0FsQk87QUFtQkZXLFlBbkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBb0JGLEtBQUtoQixJQXBCSDtBQUFBO0FBQUE7QUFBQTs7QUFxQkosaUNBQUtpQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBckJJLG1EQXlCRyxLQXpCSDs7QUFBQTtBQUFBLHNCQTJCRixLQUFLSCxLQTNCSDtBQUFBO0FBQUE7QUFBQTs7QUE0QkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBNUJJLG1EQWdDRyxLQWhDSDs7QUFBQTtBQUFBLHNCQWtDRixLQUFLQSxPQWxDSDtBQUFBO0FBQUE7QUFBQTs7QUFtQ0osaUNBQUthLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJkLDZCQUFRO0FBRkssbUJBQWY7QUFuQ0ksbURBdUNHLEtBdkNIOztBQUFBO0FBQUE7QUFBQSx5QkF5Q2EsY0FBSWUsT0FBSixDQUFZO0FBQzdCbkIsMEJBQUssS0FBS0EsSUFEbUI7QUFFN0JDLDJCQUFNLEtBQUtBLEtBRmtCO0FBRzdCQyx5QkFBSSxLQUFLQSxHQUhvQjtBQUk3QkMsMEJBQUssS0FBS0EsSUFKbUI7QUFLN0JDLDZCQUFRLFVBQVEsS0FBS0MsRUFBYixHQUFnQixHQUFoQixHQUFvQixLQUFLRDtBQUxKLG1CQUFaLENBekNiOztBQUFBO0FBeUNBTCxzQkF6Q0E7O0FBZ0ROLHNCQUFHQSxJQUFILEVBQVE7QUFDTixtQ0FBS2tCLFNBQUwsQ0FBZTtBQUNiQyw2QkFBTSxJQURPO0FBRWJkLCtCQUFRO0FBRksscUJBQWY7QUFJRDs7QUFyREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBZHNCLGVBQUtnQixJOztrQkFBbEJ4QixJIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuozmiYvmiL8nXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonaGFuZC1idXknLFxyXG4gICAgICBjb250ZW50OicnLFxyXG4gICAgICB6eDonJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBuZWVkU2VsZWN0KHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgenhTZWxlY3QoengpIHtcclxuICAgICAgICB0aGlzLnp4ID0genhcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnBob25lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY29udGVudCl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlhbbku5bpnIDmsYInXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXgsXHJcbiAgICAgICAgICB0eXBlOnRoaXMudHlwZSxcclxuICAgICAgICAgIGNvbnRlbnQ6J+ijheS/rueoi+W6pjonK3RoaXMuengrJywnK3RoaXMuY29udGVudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon5o6o6I2Q5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=