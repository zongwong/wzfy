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
      isAjax: false,
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
                  if (!this.isAjax) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 8:
                  this.isAjax = true;
                  this.$apply();
                  _context.next = 12;
                  return _api2.default.reports({
                    name: this.name,
                    phone: this.phone.replace(/-/g, ''),
                    sex: this.sex,
                    type: 'new-house',
                    content: '意向楼盘:' + this.build + ',' + this.content
                  });

                case 12:
                  data = _context.sent;

                  if (!(typeof data.status == 'undefined')) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 16;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '推荐成功'
                  });

                case 16:
                  ret = _context.sent;

                  if (ret.confirm) {
                    wx.navigateBack({
                      delta: 1
                    });
                  } else {
                    this.isAjax = false;
                    this.$apply();
                  }
                  _context.next = 23;
                  break;

                case 20:
                  _wepy2.default.showModal({
                    title: '提示',
                    content: data.message
                  });
                  this.isAjax = false;
                  this.$apply();

                case 23:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibmV3Rm9ybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmFtZSIsInBob25lIiwic2V4IiwidHlwZSIsImNvbnRlbnQiLCJidWlsZCIsImlzQWpheCIsImJ1aWxkcyIsIm1ldGhvZHMiLCJidWlsZElucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibmFtZUlucHV0IiwicGhvbmVJbnB1dCIsInNleFNlbGVjdCIsImNvbnRlbnRJbnB1dCIsInN1Ym1pdCIsInNob3dNb2RhbCIsInRpdGxlIiwidGVzdCIsInJlcGxhY2UiLCIkYXBwbHkiLCJyZXBvcnRzIiwic3RhdHVzIiwicmV0IiwiY29uZmlybSIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJtZXNzYWdlIiwib3B0aW9ucyIsImJ1aWxkc05hbWUiLCJjaXR5IiwidW5zaGlmdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFLLEVBREE7QUFFTEMsYUFBTSxFQUZEO0FBR0xDLFdBQUksS0FIQztBQUlMQyxZQUFLLFNBSkE7QUFLTEMsZUFBUSxFQUxIO0FBTUxDLGFBQU0sU0FORDtBQU9MQyxjQUFPLEtBUEY7QUFRTEMsY0FBTztBQVJGLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLTCxLQUFMLEdBQWEsS0FBS0UsTUFBTCxDQUFZRyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCLENBQWI7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVILENBSkYsRUFJSztBQUNYLGFBQUtWLElBQUwsR0FBWVUsRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BTk87QUFPUkUsZ0JBUFEs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cHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FwaSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBuZXdGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOaIv+aOqOiNkCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYW1lOicnLFxyXG4gICAgICBwaG9uZTonJyxcclxuICAgICAgc2V4OidtZW4nLFxyXG4gICAgICB0eXBlOiduZXctYnV5JyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgYnVpbGQ6J+ivt+mAieaLqeaEj+WQkealvOebmCcsXHJcbiAgICAgIGlzQWpheDpmYWxzZSxcclxuICAgICAgYnVpbGRzOltdXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGJ1aWxkSW5wdXQoZSkge1xyXG4gICAgICAgIHRoaXMuYnVpbGQgPSB0aGlzLmJ1aWxkc1tlLmRldGFpbC52YWx1ZV1cclxuICAgICAgfSxcclxuICAgICAgbmFtZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZUlucHV0KGUpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgc2V4U2VsZWN0KHNleCkge1xyXG4gICAgICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnRJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc3VibWl0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMubmFtZSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnlp5PlkI0nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lLnJlcGxhY2UoLy0vZywnJykpKSl7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50Oifor7floavlhpnmraPnoa7nmoTmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKHRoaXMuYnVpbGQ9PSfor7fpgInmi6nmhI/lkJHmpbznm5gnKXtcclxuICAgICAgICAvLyAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAvLyAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6J+ivt+mAieaLqeaEj+WQkealvOebmCdcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gICByZXR1cm4gZmFsc2VcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYoIXRoaXMuY29udGVudCl7XHJcbiAgICAgICAgLy8gICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgIC8vICAgICBjb250ZW50Oifor7floavlhpnlhbbku5bpnIDmsYInXHJcbiAgICAgICAgLy8gICB9KVxyXG4gICAgICAgIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKHRoaXMuaXNBamF4KXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQWpheCA9IHRydWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5yZXBvcnRzKHtcclxuICAgICAgICAgIG5hbWU6dGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5waG9uZS5yZXBsYWNlKC8tL2csJycpLFxyXG4gICAgICAgICAgc2V4OnRoaXMuc2V4LFxyXG4gICAgICAgICAgdHlwZTonbmV3LWhvdXNlJyxcclxuICAgICAgICAgIGNvbnRlbnQ6J+aEj+WQkealvOebmDonK3RoaXMuYnVpbGQrJywnK3RoaXMuY29udGVudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHR5cGVvZiBkYXRhLnN0YXR1cyA9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OifmjqjojZDmiJDlip8nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYocmV0LmNvbmZpcm0pe1xyXG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pc0FqYXggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOifmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuaXNBamF4ID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIC8vIGNvbnN0IGNpdHkgPSBhd2FpdCB3eEFwaS5nZXRDaXR5KClcclxuICAgICAgY29uc3QgYnVpbGRzID0gYXdhaXQgYXBpLmJ1aWxkc05hbWUoe1xyXG4gICAgICAgIGNpdHk6b3B0aW9ucy5jaXR5XHJcbiAgICAgIH0pXHJcbiAgICAgIGJ1aWxkcy51bnNoaWZ0KCfkuI3pmZAnKVxyXG4gICAgICB0aGlzLmJ1aWxkcyA9IGJ1aWxkc1xyXG4gICAgICB0aGlzLmJ1aWxkID0gb3B0aW9ucy50eXBlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==