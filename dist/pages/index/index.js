"use strict";

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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "万众分佣"
    }, _this.data = {
      banner: [],
      mycity: "",
      nowNotice: "",
      info: "",
      animate: true,
      money: '',
      timer: ''
    }, _this.methods = {
      toCity: function toCity() {
        _wepy2.default.navigateTo({
          url: "/pages/index/city"
        });
      },
      toDetail: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  item = this.banner.filter(function (item) {
                    return item.id == id;
                  });

                  console.log(item[0]);
                  _context.next = 4;
                  return _wepy2.default.setStorageSync("detail", item[0].data);

                case 4:
                  _context.t0 = item[0].type;
                  _context.next = _context.t0 === "decorate" ? 7 : _context.t0 === "finance" ? 9 : _context.t0 === "hand-house" ? 11 : _context.t0 === "new-house" ? 13 : 15;
                  break;

                case 7:
                  _wepy2.default.navigateTo({ url: "/pages/fit/detail" });
                  return _context.abrupt("break", 15);

                case 9:
                  _wepy2.default.navigateTo({ url: "/pages/financial/detail" });
                  return _context.abrupt("break", 15);

                case 11:
                  _wepy2.default.navigateTo({ url: "/pages/house/detail" });
                  return _context.abrupt("break", 15);

                case 13:
                  _wepy2.default.navigateTo({ url: "/pages/new/detail?id=" + item[0].data.id });
                  return _context.abrupt("break", 15);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function toDetail(_x) {
          return _ref2.apply(this, arguments);
        }

        return toDetail;
      }(),
      phone: function phone(_phone) {
        _wxapi2.default.phoneCall(_phone);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.banner();

              case 2:
                data = _context2.sent;

                this.banner = data;

              case 4:
              case "end":
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
    key: "onShow",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var info;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.indexNotice();

              case 2:
                info = _context3.sent;

                this.info = info;
                this.nowNotice = info.ls[0];
                // this.money = this.format(info.balance)
                this.jump(info.balance);
                clearInterval(this.timer);
                this.notice();
                this.$apply();

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: "notice",
    value: function notice() {
      var _this2 = this;

      var i = 1;
      this.timer = setInterval(function () {
        _this2.nowNotice = _this2.info.ls[i];
        i += 1;
        if (i >= _this2.info.ls.length) {
          i = 0;
        }
        _this2.$apply();
      }, 3000);
    }
  }, {
    key: "format",
    value: function format(num) {
      var num = (num || 0).toString();
      var result = "";
      while (num.length > 3) {
        result = "," + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }
      if (num) {
        result = num + result;
      }
      return result;
    }
  }, {
    key: "jump",
    value: function jump(num) {
      var _this3 = this;

      var l = num.length;
      var start = '1';
      for (var i = 0; i < l - 1; i++) {
        start += '0';
      }
      var dir = parseInt(num) - parseInt(start);
      var once = Math.floor(dir / 20);
      var result = parseInt(start);
      var jump = setInterval(function () {
        result = result + once;
        if (result >= num) {
          result = num;
          clearInterval(jump);
        }
        _this3.money = _this3.format(result);
        _this3.$apply();
      }, 30);
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXIiLCJteWNpdHkiLCJub3dOb3RpY2UiLCJpbmZvIiwiYW5pbWF0ZSIsIm1vbmV5IiwidGltZXIiLCJtZXRob2RzIiwidG9DaXR5IiwibmF2aWdhdGVUbyIsInVybCIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwidHlwZSIsInBob25lIiwicGhvbmVDYWxsIiwiZXZlbnRzIiwiaW5kZXhOb3RpY2UiLCJscyIsImp1bXAiLCJiYWxhbmNlIiwiY2xlYXJJbnRlcnZhbCIsIm5vdGljZSIsIiRhcHBseSIsImkiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsIm51bSIsInRvU3RyaW5nIiwicmVzdWx0Iiwic2xpY2UiLCJsIiwic3RhcnQiLCJkaXIiLCJwYXJzZUludCIsIm9uY2UiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLGNBQVEsRUFGSDtBQUdMQyxpQkFBVyxFQUhOO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxlQUFTLElBTEo7QUFNTEMsYUFBTSxFQU5EO0FBT0xDLGFBQU07QUFQRCxLLFFBVVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1GQyxjQU5FO0FBQUEsNkZBTU9DLEVBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0FDLHNCQVBBLEdBT08sS0FBS2IsTUFB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O0FBQ0Q7QUFDRCxVQUFJQyxNQUFNQyxTQUFTUCxHQUFULElBQWdCTyxTQUFTRixLQUFULENBQTFCO0FBQ0EsVUFBSUcsT0FBT0MsS0FBS0MsS0FBTCxDQUFXSixNQUFJLEVBQWYsQ0FBWDtBQUNBLFVBQUlKLFNBQVNLLFNBQVNGLEtBQVQsQ0FBYjtBQUNBLFVBQUliLE9BQU9NLFlBQVksWUFBSTtBQUN6QkksaUJBQVNBLFNBQVNNLElBQWxCO0FBQ0EsWUFBR04sVUFBUUYsR0FBWCxFQUFlO0FBQ2JFLG1CQUFTRixHQUFUO0FBQ0FOLHdCQUFjRixJQUFkO0FBQ0Q7QUFDRCxlQUFLbkIsS0FBTCxHQUFhLE9BQUtzQyxNQUFMLENBQVlULE1BQVosQ0FBYjtBQUNBLGVBQUtOLE1BQUw7QUFDRCxPQVJVLEVBUVQsRUFSUyxDQUFYO0FBU0Q7Ozt3Q0FDa0IsQ0FBRTs7OztFQTNHWSxlQUFLZ0IsSTs7a0JBQW5CaEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2FwaVwiO1xyXG5pbXBvcnQgd3hBcGkgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvd3hhcGlcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5LiH5LyX5YiG5L2jXCJcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgYmFubmVyOiBbXSxcclxuICAgIG15Y2l0eTogXCJcIixcclxuICAgIG5vd05vdGljZTogXCJcIixcclxuICAgIGluZm86IFwiXCIsXHJcbiAgICBhbmltYXRlOiB0cnVlLFxyXG4gICAgbW9uZXk6JycsXHJcbiAgICB0aW1lcjonJ1xyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0b0NpdHkoKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBcIi9wYWdlcy9pbmRleC9jaXR5XCJcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgdG9EZXRhaWwoaWQpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYmFubmVyLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1bMF0pO1xyXG4gICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2VTeW5jKFwiZGV0YWlsXCIsIGl0ZW1bMF0uZGF0YSk7XHJcbiAgICAgIHN3aXRjaCAoaXRlbVswXS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImRlY29yYXRlXCI6XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL2ZpdC9kZXRhaWxcIiB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmaW5hbmNlXCI6XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL2ZpbmFuY2lhbC9kZXRhaWxcIiB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJoYW5kLWhvdXNlXCI6XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL2hvdXNlL2RldGFpbFwiIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm5ldy1ob3VzZVwiOlxyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiBcIi9wYWdlcy9uZXcvZGV0YWlsP2lkPVwiICsgaXRlbVswXS5kYXRhLmlkIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwaG9uZShwaG9uZSkge1xyXG4gICAgICB3eEFwaS5waG9uZUNhbGwocGhvbmUpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXZlbnRzID0ge307XHJcblxyXG4gIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuYmFubmVyKCk7XHJcbiAgICB0aGlzLmJhbm5lciA9IGRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIC8vIGNvbnN0IGNpdHkgPSBhd2FpdCB3eEFwaS5nZXRDaXR5KCk7XHJcbiAgICAvLyB0aGlzLm15Y2l0eSA9IGNpdHk7XHJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgYXBpLmluZGV4Tm90aWNlKCk7XHJcbiAgICB0aGlzLmluZm8gPSBpbmZvO1xyXG4gICAgdGhpcy5ub3dOb3RpY2UgPSBpbmZvLmxzWzBdO1xyXG4gICAgLy8gdGhpcy5tb25leSA9IHRoaXMuZm9ybWF0KGluZm8uYmFsYW5jZSlcclxuICAgIHRoaXMuanVtcChpbmZvLmJhbGFuY2UpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXHJcbiAgICB0aGlzLm5vdGljZSgpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIG5vdGljZSgpIHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubm93Tm90aWNlID0gdGhpcy5pbmZvLmxzW2ldO1xyXG4gICAgICBpICs9IDE7XHJcbiAgICAgIGlmIChpID49IHRoaXMuaW5mby5scy5sZW5ndGgpIHtcclxuICAgICAgICBpID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG4gIGZvcm1hdChudW0pIHtcclxuICAgIHZhciBudW0gPSAobnVtIHx8IDApLnRvU3RyaW5nKClcclxuICAgIGxldCByZXN1bHQgPSBcIlwiXHJcbiAgICB3aGlsZSAobnVtLmxlbmd0aCA+IDMpIHtcclxuICAgICAgcmVzdWx0ID0gXCIsXCIgKyBudW0uc2xpY2UoLTMpICsgcmVzdWx0XHJcbiAgICAgIG51bSA9IG51bS5zbGljZSgwLCBudW0ubGVuZ3RoIC0gMylcclxuICAgIH1cclxuICAgIGlmIChudW0pIHtcclxuICAgICAgcmVzdWx0ID0gbnVtICsgcmVzdWx0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG4gIGp1bXAobnVtKSB7XHJcbiAgICBsZXQgbCA9IG51bS5sZW5ndGg7XHJcbiAgICBsZXQgc3RhcnQgPSAnMSc7XHJcbiAgICBmb3IobGV0IGkgPTA7aTxsLTE7aSsrKXtcclxuICAgICAgc3RhcnQrPScwJ1xyXG4gICAgfVxyXG4gICAgbGV0IGRpciA9IHBhcnNlSW50KG51bSkgLSBwYXJzZUludChzdGFydClcclxuICAgIGxldCBvbmNlID0gTWF0aC5mbG9vcihkaXIvMjApXHJcbiAgICBsZXQgcmVzdWx0ID0gcGFyc2VJbnQoc3RhcnQpXHJcbiAgICBsZXQganVtcCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG9uY2VcclxuICAgICAgaWYocmVzdWx0Pj1udW0pe1xyXG4gICAgICAgIHJlc3VsdCA9IG51bVxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoanVtcClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1vbmV5ID0gdGhpcy5mb3JtYXQocmVzdWx0KVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LDMwKSBcclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKXt9XHJcbn1cclxuIl19