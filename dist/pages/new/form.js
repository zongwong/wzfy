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
                    type: 'new-house',
                    content: '意向楼盘:' + this.build + ',' + this.content
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibmV3Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJidWlsZCIsImJ1aWxkcyIsIm1ldGhvZHMiLCJidWlsZElucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwidGVzdCIsInJlcG9ydHMiLCJzdGF0dXMiLCJyZXQiLCJjb25maXJtIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1lc3NhZ2UiLCJvcHRpb25zIiwiYnVpbGRzTmFtZSIsImNpdHkiLCJ1bnNoaWZ0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQUssRUFEQTtBQUVMQyxhQUFNLEVBRkQ7QUFHTEMsV0FBSSxLQUhDO0FBSUxDLFlBQUssU0FKQTtBQUtMQyxlQUFRLEVBTEg7QUFNTEMsYUFBTSxTQU5EO0FBT0xDLGNBQU87QUFQRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS0osS0FBTCxHQUFhLEtBQUtDLE1BQUwsQ0FBWUcsRUFBRUMsTUFBRixDQUFTQyxLQUFyQixDQUFiO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlFSCxDQUpGLEVBSUs7QUFDWCxhQUFLVCxJQUFMLEdBQVlTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxPQU5PO0FBT1JFLGdCQVBRLHNCQU9HSixDQVBILEVBT007QUFDWixhQUFLUixLQUFMLEdBQWFRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVRPO0FBVVJHLGVBVlEscUJBVUVaLEdBVkYsRUFVTztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNELE9BWk87QUFhUmEsa0JBYlEsd0JBYUtOLENBYkwsRUFhUTtBQUNkLGFBQUtMLE9BQUwsR0FBZUssRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNELE9BZk87QUFnQkZLLFlBaEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaUJGLEtBQUtoQixJQWpCSDtBQUFBO0FBQUE7QUFBQTs7QUFrQkosaUNBQUtpQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBbEJJLG1EQXNCRyxLQXRCSDs7QUFBQTtBQUFBLHNCQXdCRCxvQkFBb0JlLElBQXBCLENBQXlCLEtBQUtsQixLQUE5QixDQXhCQztBQUFBO0FBQUE7QUFBQTs7QUF5QkosaUNBQUtnQixTQUFMLENBQWU7QUFDYkMsMkJBQU0sSUFETztBQUViZCw2QkFBUTtBQUZLLG1CQUFmO0FBekJJLG1EQTZCRyxLQTdCSDs7QUFBQTtBQUFBO0FBQUEseUJBNkNhLGNBQUlnQixPQUFKLENBQVk7QUFDN0JwQiwwQkFBSyxLQUFLQSxJQURtQjtBQUU3QkMsMkJBQU0sS0FBS0EsS0FGa0I7QUFHN0JDLHlCQUFJLEtBQUtBLEdBSG9CO0FBSTdCQywwQkFBSyxXQUp3QjtBQUs3QkMsNkJBQVEsVUFBUSxLQUFLQyxLQUFiLEdBQW1CLEdBQW5CLEdBQXVCLEtBQUtEO0FBTFAsbUJBQVosQ0E3Q2I7O0FBQUE7QUE2Q0FMLHNCQTdDQTs7QUFBQSx3QkFvREgsT0FBT0EsS0FBS3NCLE1BQVosSUFBc0IsV0FwRG5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBcURjLGVBQUtKLFNBQUwsQ0FBZTtBQUMvQkMsMkJBQU0sSUFEeUI7QUFFL0JkLDZCQUFRO0FBRnVCLG1CQUFmLENBckRkOztBQUFBO0FBcURFa0IscUJBckRGOztBQXlESixzQkFBR0EsSUFBSUMsT0FBUCxFQUFlO0FBQ2JDLHVCQUFHQyxZQUFILENBQWdCO0FBQ2RDLDZCQUFPO0FBRE8scUJBQWhCO0FBR0Q7QUE3REc7QUFBQTs7QUFBQTtBQStESixpQ0FBS1QsU0FBTCxDQUFlO0FBQ2JDLDJCQUFNLElBRE87QUFFYmQsNkJBQVFMLEtBQUs0QjtBQUZBLG1CQUFmOztBQS9ESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQURTLENBQUU7Ozs7NEZBdUVSQyxPOzs7Ozs7O3VCQUVVLGNBQUlDLFVBQUosQ0FBZTtBQUNsQ0Msd0JBQUtGLFFBQVFFO0FBRHFCLGlCQUFmLEM7OztBQUFmeEIsc0I7O0FBR05BLHVCQUFPeUIsT0FBUCxDQUFlLElBQWY7QUFDQSxxQkFBS3pCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLHFCQUFLRCxLQUFMLEdBQWF1QixRQUFRekIsSUFBckI7QUFDQSxxQkFBSzZCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RmlDLGVBQUtDLEk7O2tCQUFyQnJDLE8iLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+aOqOiNkCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICB0eXBlOiduZXctYnV5JyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgYnVpbGQ6J+ivt+mAieaLqeaEj+WQkealvOebmCcsXHJcbiAgICAgIGJ1aWxkczpbXVxyXG4gICAgfVxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBidWlsZElucHV0KGUpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkID0gdGhpcy5idWlsZHNbZS5kZXRhaWwudmFsdWVdXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNleFNlbGVjdChzZXgpIHtcclxuICAgICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50SW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon6K+35aGr5YaZ5aeT5ZCNJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPtydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5idWlsZD09J+ivt+mAieaLqeaEj+WQkealvOebmCcpe1xyXG4gICAgICAgIC8vICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIC8vICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAvLyAgICAgY29udGVudDon6K+36YCJ5oup5oSP5ZCR5qW855uYJ1xyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAvLyAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZighdGhpcy5jb250ZW50KXtcclxuICAgICAgICAvLyAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAvLyAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6J+ivt+Whq+WGmeWFtuS7lumcgOaxgidcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gICByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZSxcclxuICAgICAgICAgIHNleDp0aGlzLnNleCxcclxuICAgICAgICAgIHR5cGU6J25ldy1ob3VzZScsXHJcbiAgICAgICAgICBjb250ZW50OifmhI/lkJHmpbznm5g6Jyt0aGlzLmJ1aWxkKycsJyt0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5zdGF0dXMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDon5o6o6I2Q5oiQ5YqfJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmKHJldC5jb25maXJtKXtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTon5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDpkYXRhLm1lc3NhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAvLyBjb25zdCBjaXR5ID0gYXdhaXQgd3hBcGkuZ2V0Q2l0eSgpXHJcbiAgICAgIGNvbnN0IGJ1aWxkcyA9IGF3YWl0IGFwaS5idWlsZHNOYW1lKHtcclxuICAgICAgICBjaXR5Om9wdGlvbnMuY2l0eVxyXG4gICAgICB9KVxyXG4gICAgICBidWlsZHMudW5zaGlmdCgn5LiN6ZmQJylcclxuICAgICAgdGhpcy5idWlsZHMgPSBidWlsZHNcclxuICAgICAgdGhpcy5idWlsZCA9IG9wdGlvbnMudHlwZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=