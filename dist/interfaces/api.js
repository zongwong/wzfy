'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Api = function (_base) {
  _inherits(Api, _base);

  function Api() {
    _classCallCheck(this, Api);

    return _possibleConstructorReturn(this, (Api.__proto__ || Object.getPrototypeOf(Api)).apply(this, arguments));
  }

  _createClass(Api, null, [{
    key: 'sms',

    // 短信接口
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.host + '/sms';
                _context.next = 3;
                return this.post(url, data);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sms(_x) {
        return _ref.apply(this, arguments);
      }

      return sms;
    }()
    // 登录绑定

  }, {
    key: 'bind',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.host + '/login';
                _context2.next = 3;
                return this.post(url, data);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bind(_x2) {
        return _ref2.apply(this, arguments);
      }

      return bind;
    }()
    // banner

  }, {
    key: 'banner',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var url;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.host + '/banner';
                _context3.next = 3;
                return this.get(url);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function banner() {
        return _ref3.apply(this, arguments);
      }

      return banner;
    }()
    // 银行列表

  }, {
    key: 'banks',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var url;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = this.host + '/banks';
                _context4.next = 3;
                return this.get(url);

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function banks() {
        return _ref4.apply(this, arguments);
      }

      return banks;
    }()
    // 获取物业类型

  }, {
    key: 'houseType',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var url;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = this.host + '/house-type';
                _context5.next = 3;
                return this.get(url);

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function houseType() {
        return _ref5.apply(this, arguments);
      }

      return houseType;
    }()
    // 获取贷款类型

  }, {
    key: 'serviceType',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var url;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = this.host + '/service-type';
                _context6.next = 3;
                return this.get(url);

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function serviceType() {
        return _ref6.apply(this, arguments);
      }

      return serviceType;
    }()
    // 获取房屋类型

  }, {
    key: 'apartmentLayout',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var url;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = this.host + '/apartment-layout';
                _context7.next = 3;
                return this.get(url);

              case 3:
                return _context7.abrupt('return', _context7.sent);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function apartmentLayout() {
        return _ref7.apply(this, arguments);
      }

      return apartmentLayout;
    }()
    // 获取城市区域

  }, {
    key: 'counties',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(city) {
        var url;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = this.host + '/counties?city=' + city;
                _context8.next = 3;
                return this.get(url);

              case 3:
                return _context8.abrupt('return', _context8.sent);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function counties(_x3) {
        return _ref8.apply(this, arguments);
      }

      return counties;
    }()
    // 获取广告

  }, {
    key: 'ad',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                url = this.host + '/ad';
                _context9.next = 3;
                return this.get(url, data);

              case 3:
                return _context9.abrupt('return', _context9.sent);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function ad(_x4) {
        return _ref9.apply(this, arguments);
      }

      return ad;
    }()
    // 获取单个楼盘

  }, {
    key: 'buildInfo',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                url = this.host + '/builds/' + id;
                _context10.next = 3;
                return this.get(url);

              case 3:
                return _context10.abrupt('return', _context10.sent);

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function buildInfo(_x5) {
        return _ref10.apply(this, arguments);
      }

      return buildInfo;
    }()
    // 获取所有楼盘

  }, {
    key: 'builds',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                url = this.host + '/builds';
                _context11.next = 3;
                return this.get(url, data);

              case 3:
                return _context11.abrupt('return', _context11.sent);

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function builds(_x6) {
        return _ref11.apply(this, arguments);
      }

      return builds;
    }()
    // 获取楼盘名称

  }, {
    key: 'buildsName',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                url = this.host + '/city-builds';
                _context12.next = 3;
                return this.get(url, data);

              case 3:
                return _context12.abrupt('return', _context12.sent);

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function buildsName(_x7) {
        return _ref12.apply(this, arguments);
      }

      return buildsName;
    }()
    // 获取楼盘下的户型

  }, {
    key: 'buildsName',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                url = this.host + '/doors?build_id=' + id;
                _context13.next = 3;
                return this.get(url);

              case 3:
                return _context13.abrupt('return', _context13.sent);

              case 4:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function buildsName(_x8) {
        return _ref13.apply(this, arguments);
      }

      return buildsName;
    }()
    // 获取所有城市

  }, {
    key: 'cities',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                url = this.host + '/cities';
                _context14.next = 3;
                return this.get(url, data);

              case 3:
                return _context14.abrupt('return', _context14.sent);

              case 4:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function cities(_x9) {
        return _ref14.apply(this, arguments);
      }

      return cities;
    }()
    // 搜索

  }, {
    key: 'search',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                url = this.host + '/query';
                _context15.next = 3;
                return this.get(url, data);

              case 3:
                return _context15.abrupt('return', _context15.sent);

              case 4:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function search(_x10) {
        return _ref15.apply(this, arguments);
      }

      return search;
    }()
    // 二手房

  }, {
    key: 'house',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var url;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                url = this.host + '/hand-houses';
                _context16.next = 3;
                return this.get(url);

              case 3:
                return _context16.abrupt('return', _context16.sent);

              case 4:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function house() {
        return _ref16.apply(this, arguments);
      }

      return house;
    }()
    // 金融

  }, {
    key: 'finances',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var url;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                url = this.host + '/finances';
                _context17.next = 3;
                return this.get(url);

              case 3:
                return _context17.abrupt('return', _context17.sent);

              case 4:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function finances() {
        return _ref17.apply(this, arguments);
      }

      return finances;
    }()
    // 装修

  }, {
    key: 'decorates',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var url;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                url = this.host + '/decorates';
                _context18.next = 3;
                return this.get(url);

              case 3:
                return _context18.abrupt('return', _context18.sent);

              case 4:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function decorates() {
        return _ref18.apply(this, arguments);
      }

      return decorates;
    }()
    // 案例

  }, {
    key: 'cases',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var url;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                url = this.host + '/cases';
                _context19.next = 3;
                return this.get(url);

              case 3:
                return _context19.abrupt('return', _context19.sent);

              case 4:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function cases() {
        return _ref19.apply(this, arguments);
      }

      return cases;
    }()
  }]);

  return Api;
}(_base3.default);

exports.default = Api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJBcGkiLCJkYXRhIiwidXJsIiwiaG9zdCIsInBvc3QiLCJnZXQiLCJjaXR5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7QUFDbkI7OzBGQUNpQkMsSTs7Ozs7O0FBQ1RDLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0MsSUFBTCxDQUFVRixHQUFWLEVBQWVELElBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs0RkFDa0JBLEk7Ozs7OztBQUNWQyxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtDLElBQUwsQ0FBVUYsR0FBVixFQUFlRCxJQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7Ozs7Ozs7QUFFUUMsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLRSxHQUFMLENBQVNILEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7Ozs7OztBQUVRQSxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFBLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0UsR0FBTCxDQUFTSCxHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7Ozs7Ozs7QUFFUUEsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLRSxHQUFMLENBQVNILEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7Ozs7OztBQUVRQSxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7OzRGQUNzQkksSTs7Ozs7O0FBQ2RKLG1CLEdBQVMsS0FBS0MsSSx1QkFBc0JHLEk7O3VCQUM3QixLQUFLRCxHQUFMLENBQVNILEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs0RkFDZ0JELEk7Ozs7OztBQUNSQyxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxFQUFhRCxJQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7OEZBQ3VCTSxFOzs7Ozs7QUFDZkwsbUIsR0FBUyxLQUFLQyxJLGdCQUFlSSxFOzt1QkFDdEIsS0FBS0YsR0FBTCxDQUFTSCxHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7OEZBQ29CRCxJOzs7Ozs7QUFDWkMsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLRSxHQUFMLENBQVNILEdBQVQsRUFBYUQsSUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7OzhGQUN3QkEsSTs7Ozs7O0FBQ2hCQyxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxFQUFhRCxJQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7OEZBQ3dCTSxFOzs7Ozs7QUFDaEJMLG1CLEdBQVMsS0FBS0MsSSx3QkFBdUJJLEU7O3VCQUM5QixLQUFLRixHQUFMLENBQVNILEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs4RkFDb0JELEk7Ozs7OztBQUNaQyxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxFQUFhRCxJQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7OEZBQ29CQSxJOzs7Ozs7QUFDWkMsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLRSxHQUFMLENBQVNILEdBQVQsRUFBYUQsSUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFDLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0UsR0FBTCxDQUFTSCxHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7Ozs7Ozs7QUFFUUEsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLRSxHQUFMLENBQVNILEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7Ozs7OztBQUVRQSxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtFLEdBQUwsQ0FBU0gsR0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFBLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0UsR0FBTCxDQUFTSCxHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE5RklGLEciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGJhc2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9iYXNlJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkgZXh0ZW5kcyBiYXNle1xyXG4gIC8vIOefreS/oeaOpeWPo1xyXG4gIHN0YXRpYyBhc3luYyBzbXMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9zbXNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcbiAgLy8g55m75b2V57uR5a6aXHJcbiAgc3RhdGljIGFzeW5jIGJpbmQoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9sb2dpbmBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3QodXJsLCBkYXRhKVxyXG4gIH1cclxuICAvLyBiYW5uZXJcclxuICBzdGF0aWMgYXN5bmMgYmFubmVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9iYW5uZXJgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDpk7booYzliJfooahcclxuICBzdGF0aWMgYXN5bmMgYmFua3MoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2JhbmtzYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6I635Y+W54mp5Lia57G75Z6LXHJcbiAgc3RhdGljIGFzeW5jIGhvdXNlVHlwZSgpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vaG91c2UtdHlwZWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlui0t+asvuexu+Wei1xyXG4gIHN0YXRpYyBhc3luYyBzZXJ2aWNlVHlwZSgpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vc2VydmljZS10eXBlYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6I635Y+W5oi/5bGL57G75Z6LXHJcbiAgc3RhdGljIGFzeW5jIGFwYXJ0bWVudExheW91dCgpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vYXBhcnRtZW50LWxheW91dGBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluWfjuW4guWMuuWfn1xyXG4gIHN0YXRpYyBhc3luYyBjb3VudGllcyhjaXR5KSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2NvdW50aWVzP2NpdHk9JHtjaXR5fWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluW5v+WRilxyXG4gIHN0YXRpYyBhc3luYyBhZChkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2FkYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybCxkYXRhKVxyXG4gIH1cclxuICAvLyDojrflj5bljZXkuKrmpbznm5hcclxuICBzdGF0aWMgYXN5bmMgYnVpbGRJbmZvKGlkKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2J1aWxkcy8ke2lkfWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluaJgOaciealvOebmFxyXG4gIHN0YXRpYyBhc3luYyBidWlsZHMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9idWlsZHNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLGRhdGEpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlualvOebmOWQjeensFxyXG4gIHN0YXRpYyBhc3luYyBidWlsZHNOYW1lKGRhdGEpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vY2l0eS1idWlsZHNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLGRhdGEpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlualvOebmOS4i+eahOaIt+Wei1xyXG4gIHN0YXRpYyBhc3luYyBidWlsZHNOYW1lKGlkKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2Rvb3JzP2J1aWxkX2lkPSR7aWR9YFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6I635Y+W5omA5pyJ5Z+O5biCXHJcbiAgc3RhdGljIGFzeW5jIGNpdGllcyhkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2NpdGllc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwsZGF0YSlcclxuICB9XHJcbiAgLy8g5pCc57SiXHJcbiAgc3RhdGljIGFzeW5jIHNlYXJjaChkYXRhKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L3F1ZXJ5YFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybCxkYXRhKVxyXG4gIH1cclxuICAvLyDkuozmiYvmiL9cclxuICBzdGF0aWMgYXN5bmMgaG91c2UoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2hhbmQtaG91c2VzYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6YeR6J6NXHJcbiAgc3RhdGljIGFzeW5jIGZpbmFuY2VzKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9maW5hbmNlc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOijheS/rlxyXG4gIHN0YXRpYyBhc3luYyBkZWNvcmF0ZXMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2RlY29yYXRlc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOahiOS+i1xyXG4gIHN0YXRpYyBhc3luYyBjYXNlcygpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vY2FzZXNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxufSJdfQ==