'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  // 获取用户信息
  getUserInfo: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, userInfo, _ref3, code;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.getUserInfo();

            case 2:
              _ref2 = _context.sent;
              userInfo = _ref2.userInfo;
              _context.next = 6;
              return _wepy2.default.login();

            case 6:
              _ref3 = _context.sent;
              code = _ref3.code;
              _context.next = 10;
              return _wepy2.default.setStorage({
                key: 'userInfo',
                data: userInfo
              });

            case 10:
              return _context.abrupt('return', {
                userInfo: JSON.stringify(userInfo),
                code: code
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getUserInfo() {
      return _ref.apply(this, arguments);
    }

    return getUserInfo;
  }(),

  // 登录
  login: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var data, userinfo;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {};
              userinfo = {};
              _context2.prev = 2;
              _context2.next = 5;
              return interfaces.getUserInfo();

            case 5:
              data = _context2.sent;
              _context2.next = 8;
              return _wepy2.default.request({
                url: _config2.default.users.login.url,
                data: data,
                method: _config2.default.users.login.method,
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
              });

            case 8:
              userinfo = _context2.sent;
              _context2.next = 11;
              return _wepy2.default.setStorage({
                key: '_token',
                data: userinfo.data.info._token
              });

            case 11:
              console.log(userinfo);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2['catch'](2);

              _wepy2.default.showModal({
                title: '提示',
                content: '\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002' + _context2.t0.message
              });

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 14]]);
    }));

    function login() {
      return _ref4.apply(this, arguments);
    }

    return login;
  }(),

  // 上传图片
  uploadImg: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var temp, _ref6, data;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _wepy2.default.chooseImage();

            case 2:
              temp = _context3.sent;
              _context3.next = 5;
              return _wepy2.default.uploadFile({
                url: 'https://www.2p98.cn/api/public/uploadImg',
                filePath: temp.tempFilePaths[0],
                name: 'filename'
              });

            case 5:
              _ref6 = _context3.sent;
              data = _ref6.data;

              console.log(data);
              return _context3.abrupt('return', data);

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function uploadImg() {
      return _ref5.apply(this, arguments);
    }

    return uploadImg;
  }(),

  // 支付
  getPayinfo: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _wepy2.default.requestPayment({
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': data.package,
                'signType': 'MD5',
                'paySign': data.paySign
              });

            case 2:
              res = _context4.sent;
              return _context4.abrupt('return', res);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getPayinfo(_x) {
      return _ref7.apply(this, arguments);
    }

    return getPayinfo;
  }(),

  // 剪贴板
  copyText: function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _wepy2.default.setClipboardData({
                data: data
              });

            case 2:
              _context5.next = 4;
              return _wepy2.default.getClipboardData();

            case 4:
              res = _context5.sent;

              if (res.data) {
                _wepy2.default.showToast({
                  title: '复制成功'
                });
              }
              return _context5.abrupt('return', res);

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function copyText(_x2) {
      return _ref8.apply(this, arguments);
    }

    return copyText;
  }(),

  // 全局配置
  globalConfig: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var _ref10, data;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _request2.default)({
                url: _config2.default.public.global.url,
                method: _config2.default.public.global.method
              });

            case 2:
              _ref10 = _context6.sent;
              data = _ref10.data;
              return _context6.abrupt('return', data);

            case 5:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function globalConfig() {
      return _ref9.apply(this, arguments);
    }

    return globalConfig;
  }(),

  // 获取个人信息
  getMyinfo: function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var _ref12, data;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _request2.default)({
                url: _config2.default.users.get.url,
                method: _config2.default.users.get.method,
                data: {}
              }, true);

            case 2:
              _ref12 = _context7.sent;
              data = _ref12.data;
              return _context7.abrupt('return', data);

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getMyinfo() {
      return _ref11.apply(this, arguments);
    }

    return getMyinfo;
  }(),

  // 获取活动详情
  getActivityInfo: function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
      var _ref14, data;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _request2.default)({
                url: _config2.default.activity.info.url,
                method: _config2.default.activity.info.method,
                data: {
                  aid: id
                }
              }, true);

            case 2:
              _ref14 = _context8.sent;
              data = _ref14.data;
              return _context8.abrupt('return', data);

            case 5:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getActivityInfo(_x3) {
      return _ref13.apply(this, arguments);
    }

    return getActivityInfo;
  }(),

  // 图片预览
  previewImg: function previewImg(current, urls) {
    _wepy2.default.previewImage({
      current: current,
      urls: urls
    });
  },

  // 获取打卡记录
  getProgress: function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
      var _ref16, data;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return (0, _request2.default)({
                url: _config2.default.activity.myprogress.url,
                method: _config2.default.activity.myprogress.method,
                data: {
                  aid: id
                }
              }, true);

            case 2:
              _ref16 = _context9.sent;
              data = _ref16.data;
              return _context9.abrupt('return', data);

            case 5:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getProgress(_x4) {
      return _ref15.apply(this, arguments);
    }

    return getProgress;
  }(),

  // 下载图片
  downFile: function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(url) {
      var data;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _wepy2.default.downloadFile({
                url: url
              });

            case 2:
              data = _context10.sent;
              return _context10.abrupt('return', data.tempFilePath);

            case 4:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function downFile(_x5) {
      return _ref17.apply(this, arguments);
    }

    return downFile;
  }(),

  // 微信支付
  wxPay: function wxPay(data) {
    // const res = await wepy.requestPayment(data)
    // return res
    return new Promise(function (resolve, reject) {
      wx.requestPayment(_extends({}, data, {
        complete: function complete(res) {
          if (res.errMsg === 'requestPayment:ok') {
            resolve(res);
          } else {
            reject(res);
          }
        }
      }));
    });
  },

  // 活动分享
  activityShare: function activityShare(title, id, url) {
    return {
      title: title,
      path: '/pages/index/pk?id=' + id,
      imageUrl: url,
      success: function success(res) {
        _wepy2.default.showToast({
          title: '分享成功'
        });
      }
    };
  }
};
exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcmluZm8iLCJyZXF1ZXN0IiwidXJsIiwidXNlcnMiLCJtZXRob2QiLCJoZWFkZXIiLCJpbmZvIiwiX3Rva2VuIiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJ1cGxvYWRJbWciLCJjaG9vc2VJbWFnZSIsInRlbXAiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwibmFtZSIsImdldFBheWluZm8iLCJyZXF1ZXN0UGF5bWVudCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInBheVNpZ24iLCJyZXMiLCJjb3B5VGV4dCIsInNldENsaXBib2FyZERhdGEiLCJnZXRDbGlwYm9hcmREYXRhIiwic2hvd1RvYXN0IiwiZ2xvYmFsQ29uZmlnIiwicHVibGljIiwiZ2xvYmFsIiwiZ2V0TXlpbmZvIiwiZ2V0IiwiZ2V0QWN0aXZpdHlJbmZvIiwiaWQiLCJhY3Rpdml0eSIsImFpZCIsInByZXZpZXdJbWciLCJjdXJyZW50IiwidXJscyIsInByZXZpZXdJbWFnZSIsImdldFByb2dyZXNzIiwibXlwcm9ncmVzcyIsImRvd25GaWxlIiwiZG93bmxvYWRGaWxlIiwidGVtcEZpbGVQYXRoIiwid3hQYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwiY29tcGxldGUiLCJlcnJNc2ciLCJhY3Rpdml0eVNoYXJlIiwicGF0aCIsImltYWdlVXJsIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsYUFBYTtBQUNqQjtBQUNNQyxhQUZXO0FBQUE7QUFBQTs7QUFBQTtBQUFB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WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdXNlckluZm9cclxuICAgIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29kZVxyXG4gICAgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAga2V5OiAndXNlckluZm8nLFxyXG4gICAgICBkYXRhOiB1c2VySW5mb1xyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJJbmZvOiBKU09OLnN0cmluZ2lmeSh1c2VySW5mbyksXHJcbiAgICAgIGNvZGU6IGNvZGVcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIOeZu+W9lVxyXG4gIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgbGV0IHVzZXJpbmZvID0ge31cclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKClcclxuICAgICAgdXNlcmluZm8gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYXBpLnVzZXJzLmxvZ2luLnVybCxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG1ldGhvZDogYXBpLnVzZXJzLmxvZ2luLm1ldGhvZCxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdfdG9rZW4nLFxyXG4gICAgICAgIGRhdGE6IHVzZXJpbmZvLmRhdGEuaW5mby5fdG9rZW5cclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2codXNlcmluZm8pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgY29udGVudDogYOiOt+WPlueUqOaIt+S/oeaBr+Wksei0pe+8jOivt+WFs+mXremHjeaWsOi/m+WFpeOAgiR7ZS5tZXNzYWdlfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIOS4iuS8oOWbvueJh1xyXG4gIGFzeW5jIHVwbG9hZEltZygpIHtcclxuICAgIGNvbnN0IHRlbXAgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKClcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGF0YVxyXG4gICAgfSA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZSh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LjJwOTguY24vYXBpL3B1YmxpYy91cGxvYWRJbWcnLFxyXG4gICAgICBmaWxlUGF0aDogdGVtcC50ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICBuYW1lOiAnZmlsZW5hbWUnXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDmlK/ku5hcclxuICBhc3luYyBnZXRQYXlpbmZvKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAndGltZVN0YW1wJzogZGF0YS50aW1lU3RhbXAsXHJcbiAgICAgICdub25jZVN0cic6IGRhdGEubm9uY2VTdHIsXHJcbiAgICAgICdwYWNrYWdlJzogZGF0YS5wYWNrYWdlLFxyXG4gICAgICAnc2lnblR5cGUnOiAnTUQ1JyxcclxuICAgICAgJ3BheVNpZ24nOiBkYXRhLnBheVNpZ25cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDliarotLTmnb9cclxuICBhc3luYyBjb3B5VGV4dChkYXRhKSB7XHJcbiAgICBhd2FpdCB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5nZXRDbGlwYm9hcmREYXRhKClcclxuICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSxcclxuICAvLyDlhajlsYDphY3nva5cclxuICBhc3luYyBnbG9iYWxDb25maWcoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaS5wdWJsaWMuZ2xvYmFsLnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkucHVibGljLmdsb2JhbC5tZXRob2RcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5Liq5Lq65L+h5oGvXHJcbiAgYXN5bmMgZ2V0TXlpbmZvKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBhcGkudXNlcnMuZ2V0LnVybCxcclxuICAgICAgbWV0aG9kOiBhcGkudXNlcnMuZ2V0Lm1ldGhvZCxcclxuICAgICAgZGF0YTogeyB9XHJcbiAgICB9LCB0cnVlKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOiOt+WPlua0u+WKqOivpuaDhVxyXG4gIGFzeW5jIGdldEFjdGl2aXR5SW5mbyhpZCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwKHtcclxuICAgICAgdXJsOiBhcGkuYWN0aXZpdHkuaW5mby51cmwsXHJcbiAgICAgIG1ldGhvZDogYXBpLmFjdGl2aXR5LmluZm8ubWV0aG9kLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWlkOiBpZFxyXG4gICAgICB9XHJcbiAgICB9LCB0cnVlKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9LFxyXG4gIC8vIOWbvueJh+mihOiniFxyXG4gIHByZXZpZXdJbWcoY3VycmVudCwgdXJscykge1xyXG4gICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxyXG4gICAgICB1cmxzOiB1cmxzXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8g6I635Y+W5omT5Y2h6K6w5b2VXHJcbiAgYXN5bmMgZ2V0UHJvZ3Jlc3MoaWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cCh7XHJcbiAgICAgIHVybDogYXBpLmFjdGl2aXR5Lm15cHJvZ3Jlc3MudXJsLFxyXG4gICAgICBtZXRob2Q6IGFwaS5hY3Rpdml0eS5teXByb2dyZXNzLm1ldGhvZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFpZDogaWRcclxuICAgICAgfVxyXG4gICAgfSwgdHJ1ZSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSxcclxuICAvLyDkuIvovb3lm77niYdcclxuICBhc3luYyBkb3duRmlsZSh1cmwpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgIHVybDogdXJsXHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIGRhdGEub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIC8vIH0pXHJcbiAgICByZXR1cm4gZGF0YS50ZW1wRmlsZVBhdGhcclxuICB9LFxyXG4gIC8vIOW+ruS/oeaUr+S7mFxyXG4gIHd4UGF5KGRhdGEpIHtcclxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdFBheW1lbnQoZGF0YSlcclxuICAgIC8vIHJldHVybiByZXNcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIGNvbXBsZXRlOiByZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5lcnJNc2cgPT09ICdyZXF1ZXN0UGF5bWVudDpvaycpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICAvLyDmtLvliqjliIbkuqtcclxuICBhY3Rpdml0eVNoYXJlKHRpdGxlLCBpZCwgdXJsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6IGAvcGFnZXMvaW5kZXgvcGs/aWQ9JHtpZH1gLFxyXG4gICAgICBpbWFnZVVybDogdXJsLFxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliIbkuqvmiJDlip8nXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2VzXHJcbiJdfQ==