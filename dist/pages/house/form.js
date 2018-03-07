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
          var str, data;
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
                  _context.next = 14;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: 'hand-house',
                    content: '需求:' + str + this.content
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

  _createClass(Form, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }]);

  return Form;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Form , 'pages/house/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJ6eCIsInR5cGVBcnIiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJtZXRob2RzIiwibmFtZUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsIm5lZWRTZWxlY3QiLCJpbmRleCIsImNvbnRlbnRJbnB1dCIsInp4U2VsZWN0Iiwic3VibWl0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJ0ZXN0Iiwic3RyIiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVwb3J0cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBSyxFQURBO0FBRUxDLGFBQU0sRUFGRDtBQUdMQyxXQUFJLEtBSEM7QUFJTEMsWUFBSyxVQUpBO0FBS0xDLGVBQVEsRUFMSDtBQU1MQyxVQUFHLEVBTkU7QUFPTEMsZUFBUSxDQUFDO0FBQ1BDLGNBQUssS0FERTtBQUVQQyxrQkFBUztBQUZGLE9BQUQsRUFHTjtBQUNBRCxjQUFLLEtBREw7QUFFQUMsa0JBQVM7QUFGVCxPQUhNLEVBTU47QUFDQUQsY0FBSyxNQURMO0FBRUFDLGtCQUFTO0FBRlQsT0FOTSxFQVNOO0FBQ0FELGNBQUssTUFETDtBQUVBQyxrQkFBUztBQUZULE9BVE07QUFQSCxLLFFBc0JQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS1gsSUFBTCxHQUFZVyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0QsT0FITztBQUlSQyxnQkFKUSxzQkFJR0gsQ0FKSCxFQUlNO0FBQ1osYUFBS1YsS0FBTCxHQUFhVSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FOTztBQU9SRSxlQVBRLHFCQU9FYixHQVBGLEVBT087QUFDYixhQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRCxPQVRPO0FBVVJjLGdCQVZRLHNCQVVHQyxLQVZILEVBVVU7QUFDaEI7QUFDQSxhQUFLWCxPQUFMLENBQWFXLEtBQWIsRUFBb0JULFFBQXBCLEdBQStCLENBQUMsS0FBS0YsT0FBTCxDQUFhVyxLQUFiLEVBQW9CVCxRQUFwRDtBQUNELE9BYk87QUFjUlUsa0JBZFEsd0JBY0tQLENBZEwsRUFjUTtBQUNkLGFBQUtQLE9BQUwsR0FBZU8sRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNELE9BaEJPO0FBaUJSTSxjQWpCUSxvQkFpQkNkLEVBakJELEVBaUJLO0FBQ1gsYUFBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0QsT0FuQk87QUFvQkZlLFlBcEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcUJGLEtBQUtwQixJQXJCSDtBQUFBO0FBQUE7QUFBQTs7QUFzQkosaUNBQUtxQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUVibEIsNkJBQVE7QUFGSyxtQkFBZjtBQXRCSSxtREEwQkcsS0ExQkg7O0FBQUE7QUFBQSxzQkE0QkQsb0JBQW9CbUIsSUFBcEIsQ0FBeUIsS0FBS3RCLEtBQTlCLENBNUJDO0FBQUE7QUFBQTtBQUFBOztBQTZCSixpQ0FBS29CLFNBQUwsQ0FBZTtBQUNiQywyQkFBTSxJQURPO0FBRWJsQiw2QkFBUTtBQUZLLG1CQUFmO0FBN0JJLG1EQWlDRyxLQWpDSDs7QUFBQTtBQW1DRm9CLHFCQW5DRSxHQW1DSSxFQW5DSjs7QUFvQ04sdUJBQUtsQixPQUFMLENBQWFtQixPQUFiLENBQXFCLGdCQUFRO0FBQzNCLHdCQUFHQyxLQUFLbEIsUUFBUixFQUFpQjtBQUNmZ0IsNkJBQUtFLEtBQUtuQixJQUFMLEdBQVUsR0FBZjtBQUNEO0FBQ0YsbUJBSkQ7QUFLQW9CLDBCQUFRQyxHQUFSLENBQVlKLEdBQVo7O0FBekNNLHNCQTBDRkEsR0ExQ0U7QUFBQTtBQUFBO0FBQUE7O0FBMkNKLGlDQUFLSCxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUVibEIsNkJBQVE7QUFGSyxtQkFBZjtBQTNDSSxtREErQ0csS0EvQ0g7O0FBQUE7QUFBQTtBQUFBLHlCQWlEYSxjQUFJeUIsT0FBSixDQUFZO0FBQzdCN0IsMEJBQUssS0FBS0EsSUFEbUI7QUFFN0JDLDJCQUFNLEtBQUtBLEtBRmtCO0FBRzdCQyx5QkFBSSxLQUFLQSxHQUhvQjtBQUk3QkMsMEJBQUssWUFKd0I7QUFLN0JDLDZCQUFTLFFBQU1vQixHQUFOLEdBQVksS0FBS3BCO0FBTEcsbUJBQVosQ0FqRGI7O0FBQUE7QUFpREFMLHNCQWpEQTs7QUF3RE4sc0JBQUdBLElBQUgsRUFBUTtBQUNOLG1DQUFLc0IsU0FBTCxDQUFlO0FBQ2JDLDZCQUFNLElBRE87QUFFYmxCLCtCQUFRO0FBRksscUJBQWY7QUFJRDs7QUE3REs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozt3Q0FEUyxDQUFFOzs7O0VBMUJXLGVBQUswQixJOztrQkFBbEJsQyxJIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuozmiYvmiL8nXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonaGFuZC1idXknLFxyXG4gICAgICBjb250ZW50OicnLFxyXG4gICAgICB6eDonJyxcclxuICAgICAgdHlwZUFycjpbe1xyXG4gICAgICAgIHRleHQ6J+S7luimgeS5sCcsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHRleHQ6J+S7luimgeWNlicsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHRleHQ6J+S7luimgeWHuuennycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHRleHQ6J+S7luimgeaxguennycsXHJcbiAgICAgICAgc2VsZWN0ZWQ6ZmFsc2UsXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBuZWVkU2VsZWN0KGluZGV4KSB7XHJcbiAgICAgICAgLy8gdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMudHlwZUFycltpbmRleF0uc2VsZWN0ZWQgPSAhdGhpcy50eXBlQXJyW2luZGV4XS5zZWxlY3RlZFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHp4U2VsZWN0KHp4KSB7XHJcbiAgICAgICAgdGhpcy56eCA9IHp4XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5aeT5ZCNJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHRoaXMudHlwZUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYoaXRlbS5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIHN0cis9aXRlbS50ZXh0KycsJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgIGlmKCFzdHIpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+36YCJ5oup6ZyA5rGCJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnJlcG9ydHMoe1xyXG4gICAgICAgICAgbmFtZTp0aGlzLm5hbWUsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnBob25lLFxyXG4gICAgICAgICAgc2V4OnRoaXMuc2V4LFxyXG4gICAgICAgICAgdHlwZTonaGFuZC1ob3VzZScsXHJcbiAgICAgICAgICBjb250ZW50OiAn6ZyA5rGCOicrc3RyICsgdGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OifmjqjojZDmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiJdfQ==