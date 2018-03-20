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
                this.jump(info.balance.replace(/,/g, ''));
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

      console.log(num);
      var l = num.length;
      console.log(l);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiYW5uZXIiLCJteWNpdHkiLCJub3dOb3RpY2UiLCJpbmZvIiwiYW5pbWF0ZSIsIm1vbmV5IiwidGltZXIiLCJtZXRob2RzIiwidG9DaXR5IiwibmF2aWdhdGVUbyIsInVybCIsInRvRGV0YWlsIiwiaWQiLCJpdGVtIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwidHlwZSIsInBob25lIiwicGhvbmVDYWxsIiwiZXZlbnRzIiwiaW5kZXhOb3RpY2UiLCJscyIsImp1bXAiLCJiYWxhbmNlIiwicmVwbGFjZSIsImNsZWFySW50ZXJ2YWwiLCJub3RpY2UiLCIkYXBwbHkiLCJpIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJudW0iLCJ0b1N0cmluZyIsInJlc3VsdCIsInNsaWNlIiwibCIsInN0YXJ0IiwiZGlyIiwicGFyc2VJbnQiLCJvbmNlIiwiTWF0aCIsImZsb29yIiwiZm9ybWF0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxjQUFRLEVBRkg7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsZUFBUyxJQUxKO0FBTUxDLGFBQU0sRUFORDtBQU9MQyxhQUFNO0FBUEQsSyxRQVVQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNRkMsY0FORTtBQUFBLDZGQU1PQyxFQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BQyxzQkFQQSxHQU9P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QUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFaO0FBQ0EsV0FBSSxJQUFJUixJQUFHLENBQVgsRUFBYUEsSUFBRU8sSUFBRSxDQUFqQixFQUFtQlAsR0FBbkIsRUFBdUI7QUFDckJRLGlCQUFPLEdBQVA7QUFDRDtBQUNELFVBQUlDLE1BQU1DLFNBQVNQLEdBQVQsSUFBZ0JPLFNBQVNGLEtBQVQsQ0FBMUI7QUFDQSxVQUFJRyxPQUFPQyxLQUFLQyxLQUFMLENBQVdKLE1BQUksRUFBZixDQUFYO0FBQ0EsVUFBSUosU0FBU0ssU0FBU0YsS0FBVCxDQUFiO0FBQ0EsVUFBSWQsT0FBT08sWUFBWSxZQUFJO0FBQ3pCSSxpQkFBU0EsU0FBU00sSUFBbEI7QUFDQSxZQUFHTixVQUFRRixHQUFYLEVBQWU7QUFDYkUsbUJBQVNGLEdBQVQ7QUFDQU4sd0JBQWNILElBQWQ7QUFDRDtBQUNELGVBQUtuQixLQUFMLEdBQWEsT0FBS3VDLE1BQUwsQ0FBWVQsTUFBWixDQUFiO0FBQ0EsZUFBS04sTUFBTDtBQUNELE9BUlUsRUFRVCxFQVJTLENBQVg7QUFTRDs7O3dDQUNrQixDQUFFOzs7O0VBN0dZLGVBQUtnQixJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvYXBpXCI7XHJcbmltcG9ydCB3eEFwaSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy93eGFwaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLkuIfkvJfliIbkvaNcIlxyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBiYW5uZXI6IFtdLFxyXG4gICAgbXljaXR5OiBcIlwiLFxyXG4gICAgbm93Tm90aWNlOiBcIlwiLFxyXG4gICAgaW5mbzogXCJcIixcclxuICAgIGFuaW1hdGU6IHRydWUsXHJcbiAgICBtb25leTonJyxcclxuICAgIHRpbWVyOicnXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRvQ2l0eSgpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL3BhZ2VzL2luZGV4L2NpdHlcIlxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhc3luYyB0b0RldGFpbChpZCkge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5iYW5uZXIuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IGlkO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coaXRlbVswXSk7XHJcbiAgICAgIGF3YWl0IHdlcHkuc2V0U3RvcmFnZVN5bmMoXCJkZXRhaWxcIiwgaXRlbVswXS5kYXRhKTtcclxuICAgICAgc3dpdGNoIChpdGVtWzBdLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiZGVjb3JhdGVcIjpcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvZml0L2RldGFpbFwiIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZpbmFuY2VcIjpcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvZmluYW5jaWFsL2RldGFpbFwiIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImhhbmQtaG91c2VcIjpcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvaG91c2UvZGV0YWlsXCIgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibmV3LWhvdXNlXCI6XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL25ldy9kZXRhaWw/aWQ9XCIgKyBpdGVtWzBdLmRhdGEuaWQgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBob25lKHBob25lKSB7XHJcbiAgICAgIHd4QXBpLnBob25lQ2FsbChwaG9uZSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBldmVudHMgPSB7fTtcclxuXHJcbiAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5iYW5uZXIoKTtcclxuICAgIHRoaXMuYmFubmVyID0gZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgLy8gY29uc3QgY2l0eSA9IGF3YWl0IHd4QXBpLmdldENpdHkoKTtcclxuICAgIC8vIHRoaXMubXljaXR5ID0gY2l0eTtcclxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGkuaW5kZXhOb3RpY2UoKTtcclxuICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICB0aGlzLm5vd05vdGljZSA9IGluZm8ubHNbMF07XHJcbiAgICAvLyB0aGlzLm1vbmV5ID0gdGhpcy5mb3JtYXQoaW5mby5iYWxhbmNlKVxyXG4gICAgdGhpcy5qdW1wKGluZm8uYmFsYW5jZS5yZXBsYWNlKC8sL2csJycpKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxyXG4gICAgdGhpcy5ub3RpY2UoKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICBub3RpY2UoKSB7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vd05vdGljZSA9IHRoaXMuaW5mby5sc1tpXTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgICBpZiAoaSA+PSB0aGlzLmluZm8ubHMubGVuZ3RoKSB7XHJcbiAgICAgICAgaSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuICBmb3JtYXQobnVtKSB7XHJcbiAgICB2YXIgbnVtID0gKG51bSB8fCAwKS50b1N0cmluZygpXHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIlxyXG4gICAgd2hpbGUgKG51bS5sZW5ndGggPiAzKSB7XHJcbiAgICAgIHJlc3VsdCA9IFwiLFwiICsgbnVtLnNsaWNlKC0zKSArIHJlc3VsdFxyXG4gICAgICBudW0gPSBudW0uc2xpY2UoMCwgbnVtLmxlbmd0aCAtIDMpXHJcbiAgICB9XHJcbiAgICBpZiAobnVtKSB7XHJcbiAgICAgIHJlc3VsdCA9IG51bSArIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuICBqdW1wKG51bSkge1xyXG4gICAgY29uc29sZS5sb2cobnVtKVxyXG4gICAgbGV0IGwgPSBudW0ubGVuZ3RoO1xyXG4gICAgY29uc29sZS5sb2cobClcclxuICAgIGxldCBzdGFydCA9ICcxJztcclxuICAgIGZvcihsZXQgaSA9MDtpPGwtMTtpKyspe1xyXG4gICAgICBzdGFydCs9JzAnXHJcbiAgICB9XHJcbiAgICBsZXQgZGlyID0gcGFyc2VJbnQobnVtKSAtIHBhcnNlSW50KHN0YXJ0KVxyXG4gICAgbGV0IG9uY2UgPSBNYXRoLmZsb29yKGRpci8yMClcclxuICAgIGxldCByZXN1bHQgPSBwYXJzZUludChzdGFydClcclxuICAgIGxldCBqdW1wID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgb25jZVxyXG4gICAgICBpZihyZXN1bHQ+PW51bSl7XHJcbiAgICAgICAgcmVzdWx0ID0gbnVtXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChqdW1wKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW9uZXkgPSB0aGlzLmZvcm1hdChyZXN1bHQpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sMzApIFxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpe31cclxufVxyXG4iXX0=