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

var _Page = require('./../utils/Page.js');

var _Page2 = _interopRequireDefault(_Page);

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
    // 注册

  }, {
    key: 'register',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var data = arguments[1];
        var url;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.host + '/register?member_id=' + id;

                console.log(url);
                _context3.next = 4;
                return this.post(url, data);

              case 4:
                return _context3.abrupt('return', _context3.sent);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function register() {
        return _ref3.apply(this, arguments);
      }

      return register;
    }()
    // banner

  }, {
    key: 'banner',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var url;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = this.host + '/banner';
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

      function banner() {
        return _ref4.apply(this, arguments);
      }

      return banner;
    }()
    // 银行列表

  }, {
    key: 'banks',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var url;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = this.host + '/banks';
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

      function banks() {
        return _ref5.apply(this, arguments);
      }

      return banks;
    }()
    // 获取物业类型

  }, {
    key: 'houseType',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var url;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = this.host + '/house-type';
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

      function houseType() {
        return _ref6.apply(this, arguments);
      }

      return houseType;
    }()
    // 获取贷款类型

  }, {
    key: 'serviceType',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var url;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = this.host + '/service-type';
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

      function serviceType() {
        return _ref7.apply(this, arguments);
      }

      return serviceType;
    }()
    // 获取房屋类型

  }, {
    key: 'apartmentLayout',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var url;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = this.host + '/apartment-layout';
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

      function apartmentLayout() {
        return _ref8.apply(this, arguments);
      }

      return apartmentLayout;
    }()
    // 获取城市区域

  }, {
    key: 'counties',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(city) {
        var url;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                url = this.host + '/counties?city=' + city;
                _context9.next = 3;
                return this.get(url);

              case 3:
                return _context9.abrupt('return', _context9.sent);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function counties(_x4) {
        return _ref9.apply(this, arguments);
      }

      return counties;
    }()
    // 获取广告

  }, {
    key: 'ad',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var url;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                url = this.host + '/ad';
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

      function ad() {
        return _ref10.apply(this, arguments);
      }

      return ad;
    }()
    // 获取广告

  }, {
    key: 'indexNotice',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var url;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                url = this.host + '/faker';
                _context11.next = 3;
                return this.get(url);

              case 3:
                return _context11.abrupt('return', _context11.sent);

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function indexNotice() {
        return _ref11.apply(this, arguments);
      }

      return indexNotice;
    }()
    // 获取单个楼盘

  }, {
    key: 'buildInfo',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                url = this.host + '/builds/' + id;
                _context12.next = 3;
                return this.get(url);

              case 3:
                return _context12.abrupt('return', _context12.sent);

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function buildInfo(_x5) {
        return _ref12.apply(this, arguments);
      }

      return buildInfo;
    }()
    // 获取所有楼盘

  }, {
    key: 'builds',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data, fn) {
        var url;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                url = this.host + '/query';
                return _context13.abrupt('return', new _Page2.default(url, fn));

              case 2:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function builds(_x6, _x7) {
        return _ref13.apply(this, arguments);
      }

      return builds;
    }()
    // 获取楼盘名称

  }, {
    key: 'buildsName',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                url = this.host + '/city-builds';
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

      function buildsName(_x8) {
        return _ref14.apply(this, arguments);
      }

      return buildsName;
    }()
    // 获取楼盘下的户型

  }, {
    key: 'saleType',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                url = this.host + '/doors?build_id=' + id;
                _context15.next = 3;
                return this.get(url);

              case 3:
                return _context15.abrupt('return', _context15.sent);

              case 4:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function saleType(_x9) {
        return _ref15.apply(this, arguments);
      }

      return saleType;
    }()
    // 获取所有城市

  }, {
    key: 'cities',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                url = this.host + '/cities';
                _context16.next = 3;
                return this.get(url, data);

              case 3:
                return _context16.abrupt('return', _context16.sent);

              case 4:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function cities(_x10) {
        return _ref16.apply(this, arguments);
      }

      return cities;
    }()
    // 搜索

  }, {
    key: 'search',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                url = this.host + '/query';
                _context17.next = 3;
                return this.get(url, data);

              case 3:
                return _context17.abrupt('return', _context17.sent);

              case 4:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function search(_x11) {
        return _ref17.apply(this, arguments);
      }

      return search;
    }()
    // 二手房

  }, {
    key: 'house',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var url;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                url = this.host + '/hand-houses';
                // return await this.get(url)

                return _context18.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function house() {
        return _ref18.apply(this, arguments);
      }

      return house;
    }()
    // 金融

  }, {
    key: 'finances',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var url;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                url = this.host + '/finances';
                return _context19.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function finances() {
        return _ref19.apply(this, arguments);
      }

      return finances;
    }()
    // 装修

  }, {
    key: 'decorates',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var url;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                url = this.host + '/decorates';
                // return await this.get(url)

                return _context20.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function decorates() {
        return _ref20.apply(this, arguments);
      }

      return decorates;
    }()
    // 案例

  }, {
    key: 'cases',
    value: function () {
      var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var url;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                url = this.host + '/cases';
                // return await this.get(url)

                return _context21.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function cases() {
        return _ref21.apply(this, arguments);
      }

      return cases;
    }()
    // 我的消息

  }, {
    key: 'msg',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var url;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                url = this.host + '/notifications';
                // return await this.get(url)

                return _context22.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function msg() {
        return _ref22.apply(this, arguments);
      }

      return msg;
    }()
    // 我的邀请

  }, {
    key: 'inviters',
    value: function () {
      var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var url;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                url = this.host + '/inviters';
                _context23.next = 3;
                return this.get(url);

              case 3:
                return _context23.abrupt('return', _context23.sent);

              case 4:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function inviters() {
        return _ref23.apply(this, arguments);
      }

      return inviters;
    }()
    // 我的佣金 

  }, {
    key: 'accounts',
    value: function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var url;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                url = this.host + '/accounts';
                // return await this.get(url)

                return _context24.abrupt('return', new _Page2.default(url));

              case 2:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function accounts() {
        return _ref24.apply(this, arguments);
      }

      return accounts;
    }()
    // 提现

  }, {
    key: 'wallet',
    value: function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                url = this.host + '/wallet';
                _context25.next = 3;
                return this.post(url, data);

              case 3:
                return _context25.abrupt('return', _context25.sent);

              case 4:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function wallet(_x12) {
        return _ref25.apply(this, arguments);
      }

      return wallet;
    }()
    // 报备

  }, {
    key: 'reports',
    value: function () {
      var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                url = this.host + '/reports';
                _context26.next = 3;
                return this.post(url, data);

              case 3:
                return _context26.abrupt('return', _context26.sent);

              case 4:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function reports(_x13) {
        return _ref26.apply(this, arguments);
      }

      return reports;
    }()
    // 获取报备
    // http://fenyong.oldlooker.com/api/reports?type=finance&status=succeed

  }, {
    key: 'getReports',
    value: function () {
      var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(data) {
        var url;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                url = this.host + '/reports';
                _context27.next = 3;
                return this.get(url, data);

              case 3:
                return _context27.abrupt('return', _context27.sent);

              case 4:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function getReports(_x14) {
        return _ref27.apply(this, arguments);
      }

      return getReports;
    }()
    // 获取单个报备

  }, {
    key: 'getReportDetail',
    value: function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                url = this.host + '/reports/' + id;
                _context28.next = 3;
                return this.get(url);

              case 3:
                return _context28.abrupt('return', _context28.sent);

              case 4:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function getReportDetail(_x15) {
        return _ref28.apply(this, arguments);
      }

      return getReportDetail;
    }()
    // 获取跟进记录

  }, {
    key: 'getRecordList',
    value: function () {
      var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(id) {
        var url;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                url = this.host + '/reports/' + id + '/records';
                _context29.next = 3;
                return this.get(url);

              case 3:
                return _context29.abrupt('return', _context29.sent);

              case 4:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function getRecordList(_x16) {
        return _ref29.apply(this, arguments);
      }

      return getRecordList;
    }()
    // 获取用户信息/api/members

  }, {
    key: 'getMemberInfo',
    value: function () {
      var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var url;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                url = this.host + '/members';
                _context30.next = 3;
                return this.get(url);

              case 3:
                return _context30.abrupt('return', _context30.sent);

              case 4:
              case 'end':
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getMemberInfo() {
        return _ref30.apply(this, arguments);
      }

      return getMemberInfo;
    }()
  }]);

  return Api;
}(_base3.default);

exports.default = Api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJBcGkiLCJkYXRhIiwidXJsIiwiaG9zdCIsInBvc3QiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJjaXR5IiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7OztBQUNuQjs7MEZBQ2lCQyxJOzs7Ozs7QUFDVEMsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLQyxJQUFMLENBQVVGLEdBQVYsRUFBZUQsSUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7OzRGQUNrQkEsSTs7Ozs7O0FBQ1ZDLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0MsSUFBTCxDQUFVRixHQUFWLEVBQWVELElBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7WUFDc0JJLEUsdUVBQUcsRTtZQUFHSixJOzs7Ozs7QUFDcEJDLG1CLEdBQVMsS0FBS0MsSSw0QkFBMkJFLEU7O0FBQy9DQyx3QkFBUUMsR0FBUixDQUFZTCxHQUFaOzt1QkFDYSxLQUFLRSxJQUFMLENBQVVGLEdBQVYsRUFBZUQsSUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFDLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0ssR0FBTCxDQUFTTixHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7Ozs7Ozs7QUFFUUEsbUIsR0FBUyxLQUFLQyxJOzt1QkFDUCxLQUFLSyxHQUFMLENBQVNOLEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7Ozs7OztBQUVRQSxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtLLEdBQUwsQ0FBU04sR0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFBLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0ssR0FBTCxDQUFTTixHQUFULEM7Ozs7Ozs7Ozs7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Q2hCQyxtQixHQUFTLEtBQUtDLEk7O3VCQUNQLEtBQUtLLEdBQUwsQ0FBU04sR0FBVCxFQUFhRCxJQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZjs7Ozs7OEZBQzZCSSxFOzs7Ozs7QUFDckJILG1CLEdBQVMsS0FBS0MsSSxpQkFBZ0JFLEU7O3VCQUN2QixLQUFLRyxHQUFMLENBQVNOLEdBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs4RkFDMkJHLEU7Ozs7OztBQUNuQkgsbUIsR0FBUyxLQUFLQyxJLGlCQUFnQkUsRTs7dUJBQ3ZCLEtBQUtHLEdBQUwsQ0FBU04sR0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWY7Ozs7Ozs7Ozs7O0FBRVFBLG1CLEdBQVMsS0FBS0MsSTs7dUJBQ1AsS0FBS0ssR0FBTCxDQUFTTixHQUFULEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE5SklGLEciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGJhc2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9iYXNlJ1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi91dGlscy9QYWdlJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkgZXh0ZW5kcyBiYXNle1xyXG4gIC8vIOefreS/oeaOpeWPo1xyXG4gIHN0YXRpYyBhc3luYyBzbXMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9zbXNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcbiAgLy8g55m75b2V57uR5a6aXHJcbiAgc3RhdGljIGFzeW5jIGJpbmQoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9sb2dpbmBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3QodXJsLCBkYXRhKVxyXG4gIH1cclxuICAvLyDms6jlhoxcclxuICBzdGF0aWMgYXN5bmMgcmVnaXN0ZXIoaWQ9JycsZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9yZWdpc3Rlcj9tZW1iZXJfaWQ9JHtpZH1gXHJcbiAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcbiAgLy8gYmFubmVyXHJcbiAgc3RhdGljIGFzeW5jIGJhbm5lcigpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vYmFubmVyYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6ZO26KGM5YiX6KGoXHJcbiAgc3RhdGljIGFzeW5jIGJhbmtzKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9iYW5rc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlueJqeS4muexu+Wei1xyXG4gIHN0YXRpYyBhc3luYyBob3VzZVR5cGUoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2hvdXNlLXR5cGVgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDojrflj5botLfmrL7nsbvlnotcclxuICBzdGF0aWMgYXN5bmMgc2VydmljZVR5cGUoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L3NlcnZpY2UtdHlwZWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluaIv+Wxi+exu+Wei1xyXG4gIHN0YXRpYyBhc3luYyBhcGFydG1lbnRMYXlvdXQoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2FwYXJ0bWVudC1sYXlvdXRgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDojrflj5bln47luILljLrln59cclxuICBzdGF0aWMgYXN5bmMgY291bnRpZXMoY2l0eSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9jb3VudGllcz9jaXR5PSR7Y2l0eX1gXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDojrflj5blub/lkYpcclxuICBzdGF0aWMgYXN5bmMgYWQoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2FkYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6I635Y+W5bm/5ZGKXHJcbiAgc3RhdGljIGFzeW5jIGluZGV4Tm90aWNlKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9mYWtlcmBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluWNleS4qualvOebmFxyXG4gIHN0YXRpYyBhc3luYyBidWlsZEluZm8oaWQpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vYnVpbGRzLyR7aWR9YFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICB9XHJcbiAgLy8g6I635Y+W5omA5pyJ5qW855uYXHJcbiAgc3RhdGljIGFzeW5jIGJ1aWxkcyhkYXRhLGZuKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L3F1ZXJ5YFxyXG4gICAgcmV0dXJuICBuZXcgUGFnZSh1cmwsZm4pXHJcbiAgICAvLyByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLGRhdGEpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlualvOebmOWQjeensFxyXG4gIHN0YXRpYyBhc3luYyBidWlsZHNOYW1lKGRhdGEpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vY2l0eS1idWlsZHNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLGRhdGEpXHJcbiAgfVxyXG4gIC8vIOiOt+WPlualvOebmOS4i+eahOaIt+Wei1xyXG4gIHN0YXRpYyBhc3luYyBzYWxlVHlwZShpZCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9kb29ycz9idWlsZF9pZD0ke2lkfWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluaJgOacieWfjuW4glxyXG4gIHN0YXRpYyBhc3luYyBjaXRpZXMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9jaXRpZXNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLGRhdGEpXHJcbiAgfVxyXG4gIC8vIOaQnOe0olxyXG4gIHN0YXRpYyBhc3luYyBzZWFyY2goZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9xdWVyeWBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwsZGF0YSlcclxuICB9XHJcbiAgLy8g5LqM5omL5oi/XHJcbiAgc3RhdGljIGFzeW5jIGhvdXNlKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9oYW5kLWhvdXNlc2BcclxuICAgIC8vIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgICByZXR1cm4gbmV3IFBhZ2UodXJsKVxyXG4gIH1cclxuICAvLyDph5Hono1cclxuICBzdGF0aWMgYXN5bmMgZmluYW5jZXMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2ZpbmFuY2VzYFxyXG4gICAgcmV0dXJuIG5ldyBQYWdlKHVybClcclxuICAgIC8vIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOijheS/rlxyXG4gIHN0YXRpYyBhc3luYyBkZWNvcmF0ZXMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2RlY29yYXRlc2BcclxuICAgIC8vIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgICByZXR1cm4gbmV3IFBhZ2UodXJsKVxyXG4gIH1cclxuICAvLyDmoYjkvotcclxuICBzdGF0aWMgYXN5bmMgY2FzZXMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2Nhc2VzYFxyXG4gICAgLy8gcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICAgIHJldHVybiBuZXcgUGFnZSh1cmwpXHJcbiAgfVxyXG4gIC8vIOaIkeeahOa2iOaBr1xyXG4gIHN0YXRpYyBhc3luYyBtc2coKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L25vdGlmaWNhdGlvbnNgXHJcbiAgICAvLyByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gICAgcmV0dXJuIG5ldyBQYWdlKHVybClcclxuICB9XHJcbiAgLy8g5oiR55qE6YKA6K+3XHJcbiAgc3RhdGljIGFzeW5jIGludml0ZXJzKCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9pbnZpdGVyc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG4gIC8vIOaIkeeahOS9o+mHkSBcclxuICBzdGF0aWMgYXN5bmMgYWNjb3VudHMoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L2FjY291bnRzYFxyXG4gICAgLy8gcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybClcclxuICAgIHJldHVybiBuZXcgUGFnZSh1cmwpXHJcbiAgfVxyXG4gIC8vIOaPkOeOsFxyXG4gIHN0YXRpYyBhc3luYyB3YWxsZXQoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS93YWxsZXRgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcbiAgLy8g5oql5aSHXHJcbiAgc3RhdGljIGFzeW5jIHJlcG9ydHMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9yZXBvcnRzYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG4gIC8vIOiOt+WPluaKpeWkh1xyXG4gIC8vIGh0dHA6Ly9mZW55b25nLm9sZGxvb2tlci5jb20vYXBpL3JlcG9ydHM/dHlwZT1maW5hbmNlJnN0YXR1cz1zdWNjZWVkXHJcbiAgc3RhdGljIGFzeW5jIGdldFJlcG9ydHMoZGF0YSkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9yZXBvcnRzYFxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybCxkYXRhKVxyXG4gIH1cclxuICAvLyDojrflj5bljZXkuKrmiqXlpIdcclxuICBzdGF0aWMgYXN5bmMgZ2V0UmVwb3J0RGV0YWlsKGlkKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmhvc3R9L3JlcG9ydHMvJHtpZH1gXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDojrflj5bot5/ov5vorrDlvZVcclxuICBzdGF0aWMgYXN5bmMgZ2V0UmVjb3JkTGlzdChpZCkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5ob3N0fS9yZXBvcnRzLyR7aWR9L3JlY29yZHNgXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsKVxyXG4gIH1cclxuICAvLyDojrflj5bnlKjmiLfkv6Hmga8vYXBpL21lbWJlcnNcclxuICBzdGF0aWMgYXN5bmMgZ2V0TWVtYmVySW5mbygpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaG9zdH0vbWVtYmVyc2BcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwpXHJcbiAgfVxyXG59Il19