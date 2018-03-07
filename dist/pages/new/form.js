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
                  _context.next = 11;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone,
                    sex: this.sex,
                    type: 'new-house',
                    content: '意向楼盘:' + this.build + ',' + this.content
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

  _createClass(newForm, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {}
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var builds;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.buildsName({
                  city: options.city
                });

              case 2:
                builds = _context2.sent;

                builds.unshift('不限');
                this.builds = builds;
                this.build = options.type;
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return newForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(newForm , 'pages/new/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibmV3Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJidWlsZCIsImJ1aWxkcyIsIm1ldGhvZHMiLCJidWlsZElucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwidGVzdCIsInJlcG9ydHMiLCJvcHRpb25zIiwiYnVpbGRzTmFtZSIsImNpdHkiLCJ1bnNoaWZ0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssU0FKQTtBQUtMQyxlQUFRLEVBTEg7QUFNTEMsYUFBTSxTQU5EO0FBT0xDLGNBQU87QUFQRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS0osS0FBTCxHQUFhLEtBQUtDLE1BQUwsQ0FBWUcsRUFBRUMsTUFBRixDQUFTQyxLQUFyQixDQUFiO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlFSCxDQUpGLEVBSUs7QUFDWCxhQUFLVCxJQUFMLEdBQVlTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQU5PO0FBT1JFLGdCQVBRLHNCQU9HSixDQVBILEVBT007QUFDWixhQUFLUixLQUFMLEdBQWFRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVRPO0FBVVJHLGVBVlEscUJBVUVaLEdBVkYsRUFVTztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNELE9BWk87QUFhUmEsa0JBYlEsd0JBYUtOLENBYkwsRUFhUTtBQUNkLGFBQUtMLE9BQUwsR0FBZUssRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNELE9BZk87QUFnQkZLLFlBaEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaUJGLEtBQUtoQixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtpQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JlLElBQXBCLENBQXlCLEtBQUtsQixLQUE5QixDQXhCQztBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBekJJLG1EQTZCRyxLQTdCSDs7QUFBQTtBQUFBLHdCQStCSCxLQUFLQyxLQUFMLElBQVksU0EvQlQ7QUFBQTtBQUFBO0FBQUE7O0FBZ0NKLGlDQUFLWSxTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBaENJLG1EQW9DRyxLQXBDSDs7QUFBQTtBQUFBO0FBQUEseUJBNkNhLGNBQUlnQixPQUFKLENBQVk7QUFDN0JwQiwwQkFBSyxLQUFLQSxJQURtQjtBQUU3QkMsMkJBQU0sS0FBS0EsS0FGa0I7QUFHN0JDLHlCQUFJLEtBQUtBLEdBSG9CO0FBSTdCQywwQkFBSyxXQUp3QjtBQUs3QkMsNkJBQVEsVUFBUSxLQUFLQyxLQUFiLEdBQW1CLEdBQW5CLEdBQXVCLEtBQUtEO0FBTFAsbUJBQVosQ0E3Q2I7O0FBQUE7QUE2Q0FMLHNCQTdDQTs7QUFvRE4sc0JBQUdBLElBQUgsRUFBUTtBQUNOLG1DQUFLa0IsU0FBTCxDQUFlO0FBQ2JDLDZCQUFNLElBRE87QUFFYmQsK0JBQVE7QUFGSyxxQkFBZjtBQUlEOztBQXpESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQURTLENBQUU7Ozs7NEZBNkRSaUIsTzs7Ozs7Ozt1QkFFVSxjQUFJQyxVQUFKLENBQWU7QUFDbENDLHdCQUFLRixRQUFRRTtBQURxQixpQkFBZixDOzs7QUFBZmpCLHNCOztBQUdOQSx1QkFBT2tCLE9BQVAsQ0FBZSxJQUFmO0FBQ0EscUJBQUtsQixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxxQkFBS0QsS0FBTCxHQUFhZ0IsUUFBUWxCLElBQXJCO0FBQ0EscUJBQUtzQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkZpQyxlQUFLQyxJOztrQkFBckI5QixPIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hcGknXHJcbiAgaW1wb3J0IHd4QXBpIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvd3hhcGknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3Rm9ybSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDmiL/mjqjojZAnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmFtZTonJyxcclxuICAgICAgcGhvbmU6JycsXHJcbiAgICAgIHNleDonbWVuJyxcclxuICAgICAgdHlwZTonbmV3LWJ1eScsXHJcbiAgICAgIGNvbnRlbnQ6JycsXHJcbiAgICAgIGJ1aWxkOifor7fpgInmi6nmhI/lkJHmpbznm5gnLFxyXG4gICAgICBidWlsZHM6W11cclxuICAgIH1cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKCl7fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYnVpbGRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZCA9IHRoaXMuYnVpbGRzW2UuZGV0YWlsLnZhbHVlXVxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzZXhTZWxlY3Qoc2V4KSB7XHJcbiAgICAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgICAgfSxcclxuICAgICAgY29udGVudElucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBzdWJtaXQoKXtcclxuICAgICAgICBpZighdGhpcy5uYW1lKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWnk+WQjSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnmraPnoa7nmoTmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYnVpbGQ9PSfor7fpgInmi6nmhI/lkJHmpbznm5gnKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+mAieaLqeaEj+WQkealvOebmCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuY29udGVudCl7XHJcbiAgICAgICAgLy8gICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgIC8vICAgICBjb250ZW50Oifor7floavlhpnlhbbku5bpnIDmsYInXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucmVwb3J0cyh7XHJcbiAgICAgICAgICBuYW1lOnRoaXMubmFtZSxcclxuICAgICAgICAgIHBob25lOnRoaXMucGhvbmUsXHJcbiAgICAgICAgICBzZXg6dGhpcy5zZXgsXHJcbiAgICAgICAgICB0eXBlOiduZXctaG91c2UnLFxyXG4gICAgICAgICAgY29udGVudDon5oSP5ZCR5qW855uYOicrdGhpcy5idWlsZCsnLCcrdGhpcy5jb250ZW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OifmjqjojZDmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgLy8gY29uc3QgY2l0eSA9IGF3YWl0IHd4QXBpLmdldENpdHkoKVxyXG4gICAgICBjb25zdCBidWlsZHMgPSBhd2FpdCBhcGkuYnVpbGRzTmFtZSh7XHJcbiAgICAgICAgY2l0eTpvcHRpb25zLmNpdHlcclxuICAgICAgfSlcclxuICAgICAgYnVpbGRzLnVuc2hpZnQoJ+S4jemZkCcpXHJcbiAgICAgIHRoaXMuYnVpbGRzID0gYnVpbGRzXHJcbiAgICAgIHRoaXMuYnVpbGQgPSBvcHRpb25zLnR5cGVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19