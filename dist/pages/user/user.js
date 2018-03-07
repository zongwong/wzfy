'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxapi = require('./../../interfaces/wxapi.js');

var _wxapi2 = _interopRequireDefault(_wxapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      userInfo: null,
      user: null
    }, _this.methods = {
      loginOut: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '你是否确认退出登录'
                  });

                case 2:
                  data = _context.sent;

                  console.log(data);
                  if (data.confirm) {
                    wx.removeStorageSync('token');
                    wx.removeStorageSync('user');
                    wx.redirectTo({
                      url: '/pages/index/bind'
                    });
                  }

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function loginOut() {
          return _ref2.apply(this, arguments);
        }

        return loginOut;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var userInfo, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxapi2.default.getUser();

              case 2:
                userInfo = _context2.sent;
                _context2.next = 5;
                return _wepy2.default.getStorageSync('user');

              case 5:
                user = _context2.sent;

                this.userInfo = userInfo;
                this.user = user;
                this.$apply();

              case 9:
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
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var id = this.user.id;
      return {
        imageUrl: 'https://www.xmwzfy.com/assets/img/bg.png',
        path: '/pages/user/share?id=' + id,
        success: function success() {
          console.log('/pages/user/share?id=' + id);
        }
      };
    }
  }]);

  return User;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJ1c2VyIiwibWV0aG9kcyIsImxvZ2luT3V0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImNvbmZpcm0iLCJ3eCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwicmVkaXJlY3RUbyIsInVybCIsImV2ZW50cyIsImdldFVzZXIiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImlkIiwiaW1hZ2VVcmwiLCJwYXRoIiwic3VjY2VzcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVMsSUFESjtBQUVMQyxZQUFLO0FBRkEsSyxRQU9QQyxPLEdBQVU7QUFDSEMsY0FERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRVksZUFBS0MsU0FBTCxDQUFlO0FBQ2hDQywyQkFBTSxJQUQwQjtBQUVoQ0MsNkJBQVE7QUFGd0IsbUJBQWYsQ0FGWjs7QUFBQTtBQUVEUCxzQkFGQzs7QUFNUFEsMEJBQVFDLEdBQVIsQ0FBWVQsSUFBWjtBQUNBLHNCQUFHQSxLQUFLVSxPQUFSLEVBQWdCO0FBQ2RDLHVCQUFHQyxpQkFBSCxDQUFxQixPQUFyQjtBQUNBRCx1QkFBR0MsaUJBQUgsQ0FBcUIsTUFBckI7QUFDQUQsdUJBQUdFLFVBQUgsQ0FBYztBQUNaQywyQkFBSTtBQURRLHFCQUFkO0FBR0Q7O0FBYk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLLFFBaUJWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkFLZ0IsZ0JBQU1DLE9BQU4sRTs7O0FBQWpCZix3Qjs7dUJBQ2EsZUFBS2dCLGNBQUwsQ0FBb0IsTUFBcEIsQzs7O0FBQWJmLG9COztBQUNOLHFCQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLHFCQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxxQkFBS2dCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFa0I7QUFDbEIsVUFBSUMsS0FBSyxLQUFLakIsSUFBTCxDQUFVaUIsRUFBbkI7QUFDQSxhQUFPO0FBQ0xDLGtCQUFTLDBDQURKO0FBRUxDLHdDQUE2QkYsRUFGeEI7QUFHTEcsaUJBQVEsbUJBQVU7QUFDaEJkLGtCQUFRQyxHQUFSLDJCQUFvQ1UsRUFBcEM7QUFDRDtBQUxJLE9BQVA7QUFPRDs7OztFQWpEK0IsZUFBS0ksSTs7a0JBQWxCMUIsSSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgd3hBcGkgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy93eGFwaSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1c2VySW5mbzpudWxsLFxyXG4gICAgICB1c2VyOm51bGxcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgIGFzeW5jIGxvZ2luT3V0KCkge1xyXG4gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgdGl0bGU6J+aPkOekuicsXHJcbiAgICAgICAgIGNvbnRlbnQ6J+S9oOaYr+WQpuehruiupOmAgOWHuueZu+W9lSdcclxuICAgICAgIH0pXHJcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgaWYoZGF0YS5jb25maXJtKXtcclxuICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXInKVxyXG4gICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICB1cmw6Jy9wYWdlcy9pbmRleC9iaW5kJ1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB3eEFwaS5nZXRVc2VyKClcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKVxyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgICAgbGV0IGlkID0gdGhpcy51c2VyLmlkXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3Lnhtd3pmeS5jb20vYXNzZXRzL2ltZy9iZy5wbmcnLFxyXG4gICAgICAgIHBhdGg6YC9wYWdlcy91c2VyL3NoYXJlP2lkPSR7aWR9YCxcclxuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgL3BhZ2VzL3VzZXIvc2hhcmU/aWQ9JHtpZH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19