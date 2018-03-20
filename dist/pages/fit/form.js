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
          var data, ret;
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
                  if (/^1[3456789]\d{9}$/.test(this.phone)) {
                    _context.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写正确的手机号'
                  });
                  return _context.abrupt('return', false);

                case 6:
                  _context.next = 8;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: this.type,
                    content: this.content
                  });

                case 8:
                  data = _context.sent;

                  if (!(typeof data.status == 'undefined')) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 12;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '推荐成功'
                  });

                case 12:
                  ret = _context.sent;

                  if (ret.confirm) {
                    wx.navigateBack({
                      delta: 1
                    });
                  }
                  _context.next = 17;
                  break;

                case 16:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });

                case 17:
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

  _createClass(FitForm, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return FitForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FitForm , 'pages/fit/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRml0Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJuZWVkIiwibWV0aG9kcyIsIm5hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJzZXhTZWxlY3QiLCJuZWVkU2VsZWN0IiwiY29udGVudElucHV0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJ0ZXN0IiwicmVwb3J0cyIsInN0YXR1cyIsInJldCIsImNvbmZpcm0iLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxVQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxZQUFLO0FBTkEsSyxRQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1IsSUFBTCxHQUFZUSxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1AsS0FBTCxHQUFhTyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FVixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJXLGdCQVZRLHNCQVVHUixJQVZILEVBVVM7QUFDZixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRCxPQVpPO0FBYVJTLGtCQWJRLHdCQWFLTixDQWJMLEVBYVE7QUFDZCxhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQWZPO0FBZ0JGSyxZQWhCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWlCRixLQUFLZixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViYiw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JjLElBQXBCLENBQXlCLEtBQUtqQixLQUE5QixDQXhCQztBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtlLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJiLDZCQUFRO0FBRkssbUJBQWY7QUF6QkksbURBNkJHLEtBN0JIOztBQUFBO0FBQUE7QUFBQSx5QkFzQ2EsY0FBSWUsT0FBSixDQUFZO0FBQzdCbkIsMEJBQUssS0FBS0EsSUFEbUI7QUFFN0JDLDJCQUFNLEtBQUtBLEtBRmtCO0FBRzdCQyx5QkFBSSxLQUFLQSxHQUhvQjtBQUk3QkMsMEJBQUssS0FBS0EsSUFKbUI7QUFLN0JDLDZCQUFRLEtBQUtBO0FBTGdCLG1CQUFaLENBdENiOztBQUFBO0FBc0NBTCxzQkF0Q0E7O0FBQUEsd0JBNkNILE9BQU9BLEtBQUtxQixNQUFaLElBQXNCLFdBN0NuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQThDYyxlQUFLSixTQUFMLENBQWU7QUFDL0JDLDJCQUFNLElBRHlCO0FBRS9CYiw2QkFBUTtBQUZ1QixtQkFBZixDQTlDZDs7QUFBQTtBQThDRWlCLHFCQTlDRjs7QUFrREosc0JBQUdBLElBQUlDLE9BQVAsRUFBZTtBQUNiQyx1QkFBR0MsWUFBSCxDQUFnQjtBQUNkQyw2QkFBTztBQURPLHFCQUFoQjtBQUdEO0FBdERHO0FBQUE7O0FBQUE7QUF3REosaUNBQUtULFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJiLDZCQUFRTCxLQUFLMkI7QUFGQSxtQkFBZjs7QUF4REk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozt3Q0FEUyxDQUFFOzs7O0VBYmMsZUFBS0MsSTs7a0JBQXJCL0IsTyIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXBpJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpdEZvcm0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6KOF5L+u5o6o6I2QJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6JycsXHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICBzZXg6J21lbicsXHJcbiAgICAgIHR5cGU6J2RlY29yYXRlJyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgbmVlZDon6Ieq5L2PJ1xyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgbmVlZFNlbGVjdChuZWVkKSB7XHJcbiAgICAgICAgdGhpcy5uZWVkID0gbmVlZFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5aeT5ZCNJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuY29udGVudCl7XHJcbiAgICAgICAgLy8gICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgIC8vICAgICBjb250ZW50Oifor7floavlhpnlhbbku5bpnIDmsYInXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXgsXHJcbiAgICAgICAgICB0eXBlOnRoaXMudHlwZSxcclxuICAgICAgICAgIGNvbnRlbnQ6dGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuc3RhdHVzID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+aOqOiNkOaIkOWKnydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZihyZXQuY29uZmlybSl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19