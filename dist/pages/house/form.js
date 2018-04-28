'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      zx: '',
      isAjax: false,
      typeArr: [{
        text: '他要买',
        selected: false
      }, {
        text: '他要卖',
        selected: false
      }, {
        text: '他要出租',
        selected: false
      }, {
        text: '他要求租',
        selected: false
      }]
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
      needSelect: function needSelect(index) {
        // this.type = type
        this.typeArr[index].selected = !this.typeArr[index].selected;
      },
      contentInput: function contentInput(e) {
        this.content = e.detail.value;
      },
      zxSelect: function zxSelect(zx) {
        this.zx = zx;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var str, data, ret;
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
                  if (/^1[3456789]\d{9}$/.test(this.phone.replace(/-/g, ''))) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写正确的手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  str = '';

                  this.typeArr.forEach(function (item) {
                    if (item.selected) {
                      str += item.text + ',';
                    }
                  });
                  console.log(str);

                  if (str) {
                    _context.next = 12;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请选择需求'
                  });
                  return _context.abrupt('return', false);

                case 12:
                  if (!this.isAjax) {
                    _context.next = 14;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 14:
                  this.isAjax = true;
                  this.$apply();
                  _context.next = 18;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone.replace(/-/g, ''),
                    sex: this.sex,
                    type: 'hand-house',
                    content: '需求:' + str + this.content
                  });

                case 18:
                  data = _context.sent;

                  if (!(typeof data.status == 'undefined')) {
                    _context.next = 26;
                    break;
                  }

                  _context.next = 22;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '推荐成功'
                  });

                case 22:
                  ret = _context.sent;

                  if (ret.confirm) {
                    wx.navigateBack({
                      delta: 1
                    });
                  } else {
                    this.isAjax = false;
                    this.$apply();
                  }
                  _context.next = 29;
                  break;

                case 26:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  this.isAjax = false;
                  this.$apply();

                case 29:
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

  _createClass(Form, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return Form;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Form , 'pages/house/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJ6eCIsImlzQWpheCIsInR5cGVBcnIiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJtZXRob2RzIiwibmFtZUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsIm5lZWRTZWxlY3QiLCJpbmRleCIsImNvbnRlbnRJbnB1dCIsInp4U2VsZWN0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJ0ZXN0IiwicmVwbGFjZSIsInN0ciIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInJlcG9ydHMiLCJzdGF0dXMiLCJyZXQiLCJjb25maXJtIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssVUFKQTtBQUtMQyxlQUFRLEVBTEg7QUFNTEMsVUFBRyxFQU5FO0FBT0xDLGNBQU8sS0FQRjtBQVFMQyxlQUFRLENBQUM7QUFDUEMsY0FBSyxLQURFO0FBRVBDLGtCQUFTO0FBRkYsT0FBRCxFQUdOO0FBQ0FELGNBQUssS0FETDtBQUVBQyxrQkFBUztBQUZULE9BSE0sRUFNTjtBQUNBRCxjQUFLLE1BREw7QUFFQUMsa0JBQVM7QUFGVCxPQU5NLEVBU047QUFDQUQsY0FBSyxNQURMO0FBRUFDLGtCQUFTO0FBRlQsT0FUTTtBQVJILEssUUF1QlBDLE8sR0FBVTtBQUNS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LG1CQUpELE1BSUs7QUFDSCx5QkFBS2hDLE1BQUwsR0FBYyxLQUFkO0FBQ0EseUJBQUt5QixNQUFMO0FBQ0Q7QUF6RUc7QUFBQTs7QUFBQTtBQTJFSixpQ0FBS1QsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYm5CLDZCQUFRTCxLQUFLd0M7QUFGQSxtQkFBZjtBQUlBLHVCQUFLakMsTUFBTCxHQUFjLEtBQWQ7QUFDQSx1QkFBS3lCLE1BQUw7O0FBaEZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7d0NBRFMsQ0FBRTs7OztFQTNCVyxlQUFLUyxJOztrQkFBbEI1QyxJIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuozmiYvmiL8nXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonaGFuZC1idXknLFxyXG4gICAgICBjb250ZW50OicnLFxyXG4gICAgICB6eDonJyxcclxuICAgICAgaXNBamF4OmZhbHNlLFxyXG4gICAgICB0eXBlQXJyOlt7XHJcbiAgICAgICAgdGV4dDon5LuW6KaB5LmwJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgfSx7XHJcbiAgICAgICAgdGV4dDon5LuW6KaB5Y2WJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgfSx7XHJcbiAgICAgICAgdGV4dDon5LuW6KaB5Ye656efJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgfSx7XHJcbiAgICAgICAgdGV4dDon5LuW6KaB5rGC56efJyxcclxuICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIG5lZWRTZWxlY3QoaW5kZXgpIHtcclxuICAgICAgICAvLyB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgdGhpcy50eXBlQXJyW2luZGV4XS5zZWxlY3RlZCA9ICF0aGlzLnR5cGVBcnJbaW5kZXhdLnNlbGVjdGVkXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgenhTZWxlY3QoengpIHtcclxuICAgICAgICB0aGlzLnp4ID0genhcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJykpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnmraPnoa7nmoTmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICB0aGlzLnR5cGVBcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGlmKGl0ZW0uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBzdHIrPWl0ZW0udGV4dCsnLCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cilcclxuICAgICAgICBpZighc3RyKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+mAieaLqemcgOaxgidcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5pc0FqYXgpe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNBamF4ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnJlcG9ydHMoe1xyXG4gICAgICAgICAgbmFtZTp0aGlzLm5hbWUsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJyksXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXgsXHJcbiAgICAgICAgICB0eXBlOidoYW5kLWhvdXNlJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfpnIDmsYI6JytzdHIgKyB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5zdGF0dXMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon5o6o6I2Q5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmKHJldC5jb25maXJtKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBamF4ID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDpkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLmlzQWpheCA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuIl19