'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// HTTP工具类
var http = function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, data) {
        var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        var param, _token, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = {
                  url: url,
                  method: method,
                  data: data
                };

                if (loading) {
                  // Tips.loading();
                }
                if (token) {
                  _token = _wepy2.default.getStorageSync('token');

                  param.header = {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + _token
                  };
                }

                _context.next = 5;
                return _wepy2.default.request(param);

              case 5:
                res = _context.sent;

                if (!(res.statusCode == 200)) {
                  _context.next = 14;
                  break;
                }

                if (!(res.data.code == 0 && res.data.message == '你还未登录' && !res.data.status)) {
                  _context.next = 11;
                  break;
                }

                _wepy2.default.navigateTo({
                  url: '/pages/index/bind'
                });
                _context.next = 12;
                break;

              case 11:
                return _context.abrupt('return', res.data);

              case 12:
                _context.next = 15;
                break;

              case 14:
                throw this.requestException(res);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()

    /**
     * 判断请求是否成功
     */

  }, {
    key: 'isSuccess',
    value: function isSuccess(res) {
      var wxCode = res.statusCode;
      // 微信请求错误
      if (wxCode !== 200) {
        return false;
      }
      var wxData = res.data;
      return !(wxData && wxData.code !== 0);
    }

    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(res) {
      var error = {};
      error.statusCode = res.statusCode;
      var wxData = res.data;
      var serverData = wxData.data;
      if (serverData) {
        error.serverCode = wxData.code;
        error.message = serverData.message;
        error.serverData = serverData;
      }
      return error;
    }
  }, {
    key: 'get',
    value: function get(url, data) {
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.request('GET', url, data, loading);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.request('PUT', url, data, loading);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.request('POST', url, data, loading);
    }
  }, {
    key: 'patch',
    value: function patch(url, data) {
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.request('PATCH', url, data, loading);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.request('DELETE', url, data, loading);
    }
  }]);

  return http;
}();

exports.default = http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkh0dHAuanMiXSwibmFtZXMiOlsiaHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJsb2FkaW5nIiwidG9rZW4iLCJwYXJhbSIsImdldFN0b3JhZ2VTeW5jIiwiaGVhZGVyIiwicmVxdWVzdCIsInJlcyIsInN0YXR1c0NvZGUiLCJjb2RlIiwibWVzc2FnZSIsInN0YXR1cyIsIm5hdmlnYXRlVG8iLCJyZXF1ZXN0RXhjZXB0aW9uIiwid3hDb2RlIiwid3hEYXRhIiwiZXJyb3IiLCJzZXJ2ZXJEYXRhIiwic2VydmVyQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxJOzs7Ozs7OzswRkFDR0MsTSxFQUFRQyxHLEVBQUtDLEk7WUFBTUMsTyx1RUFBVSxJO1lBQU9DLEssdUVBQVEsSTs7Ozs7Ozs7QUFDMURDLHFCLEdBQVE7QUFDWkosdUJBQUtBLEdBRE87QUFFWkQsMEJBQVFBLE1BRkk7QUFHWkUsd0JBQU1BO0FBSE0saUI7O0FBS2Qsb0JBQUlDLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRCxvQkFBSUMsS0FBSixFQUFVO0FBQ0ZBLHdCQURFLEdBQ00sZUFBS0UsY0FBTCxDQUFvQixPQUFwQixDQUROOztBQUVSRCx3QkFBTUUsTUFBTixHQUFlO0FBQ2Isb0NBQWdCLG1DQURIO0FBRWIscUNBQWtCLFlBQVVIO0FBRmYsbUJBQWY7QUFJRDs7O3VCQUVpQixlQUFLSSxPQUFMLENBQWFILEtBQWIsQzs7O0FBQVpJLG1COztzQkFFRkEsSUFBSUMsVUFBSixJQUFrQixHOzs7OztzQkFDaEJELElBQUlQLElBQUosQ0FBU1MsSUFBVCxJQUFpQixDQUFqQixJQUFzQkYsSUFBSVAsSUFBSixDQUFTVSxPQUFULElBQW1CLE9BQXpDLElBQW9ELENBQUNILElBQUlQLElBQUosQ0FBU1csTTs7Ozs7QUFDaEUsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDZGIsdUJBQUk7QUFEVSxpQkFBaEI7Ozs7O2lEQUlPUSxJQUFJUCxJOzs7Ozs7O3NCQUdQLEtBQUthLGdCQUFMLENBQXNCTixHQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlWOzs7Ozs7OEJBR2tCQSxHLEVBQUs7QUFDckIsVUFBTU8sU0FBU1AsSUFBSUMsVUFBbkI7QUFDQTtBQUNBLFVBQUlNLFdBQVcsR0FBZixFQUFvQjtBQUNsQixlQUFPLEtBQVA7QUFDRDtBQUNELFVBQU1DLFNBQVNSLElBQUlQLElBQW5CO0FBQ0EsYUFBTyxFQUFFZSxVQUFVQSxPQUFPTixJQUFQLEtBQWdCLENBQTVCLENBQVA7QUFDRDs7QUFFRDs7Ozs7O3FDQUd5QkYsRyxFQUFLO0FBQzVCLFVBQU1TLFFBQVEsRUFBZDtBQUNBQSxZQUFNUixVQUFOLEdBQW1CRCxJQUFJQyxVQUF2QjtBQUNBLFVBQU1PLFNBQVNSLElBQUlQLElBQW5CO0FBQ0EsVUFBTWlCLGFBQWFGLE9BQU9mLElBQTFCO0FBQ0EsVUFBSWlCLFVBQUosRUFBZ0I7QUFDZEQsY0FBTUUsVUFBTixHQUFtQkgsT0FBT04sSUFBMUI7QUFDQU8sY0FBTU4sT0FBTixHQUFnQk8sV0FBV1AsT0FBM0I7QUFDQU0sY0FBTUMsVUFBTixHQUFtQkEsVUFBbkI7QUFDRDtBQUNELGFBQU9ELEtBQVA7QUFDRDs7O3dCQUVXakIsRyxFQUFLQyxJLEVBQXNCO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQ3JDLGFBQU8sS0FBS0ssT0FBTCxDQUFhLEtBQWIsRUFBb0JQLEdBQXBCLEVBQXlCQyxJQUF6QixFQUErQkMsT0FBL0IsQ0FBUDtBQUNEOzs7d0JBRVdGLEcsRUFBS0MsSSxFQUFzQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNyQyxhQUFPLEtBQUtLLE9BQUwsQ0FBYSxLQUFiLEVBQW9CUCxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0JDLE9BQS9CLENBQVA7QUFDRDs7O3lCQUVZRixHLEVBQUtDLEksRUFBc0I7QUFBQSxVQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDdEMsYUFBTyxLQUFLSyxPQUFMLENBQWEsTUFBYixFQUFxQlAsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxPQUFoQyxDQUFQO0FBQ0Q7OzswQkFFYUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQ3ZDLGFBQU8sS0FBS0ssT0FBTCxDQUFhLE9BQWIsRUFBc0JQLEdBQXRCLEVBQTJCQyxJQUEzQixFQUFpQ0MsT0FBakMsQ0FBUDtBQUNEOzs7NEJBRWNGLEcsRUFBS0MsSSxFQUFzQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUN4QyxhQUFPLEtBQUtLLE9BQUwsQ0FBYSxRQUFiLEVBQXVCUCxHQUF2QixFQUE0QkMsSUFBNUIsRUFBa0NDLE9BQWxDLENBQVA7QUFDRDs7Ozs7O2tCQWhGa0JKLEkiLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgVGlwcyBmcm9tICcuL1RpcHMnO1xyXG5cclxuLy8gSFRUUOW3peWFt+exu1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBodHRwIHtcclxuICBzdGF0aWMgYXN5bmMgcmVxdWVzdCAobWV0aG9kLCB1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlICwgdG9rZW4gPSB0cnVlKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9O1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgLy8gVGlwcy5sb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodG9rZW4pe1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgcGFyYW0uaGVhZGVyID0ge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbicgOiAnQmVhcmVyICcrdG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdChwYXJhbSk7XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAwICYmIHJlcy5kYXRhLm1lc3NhZ2UgPT0n5L2g6L+Y5pyq55m75b2VJyAmJiAhcmVzLmRhdGEuc3RhdHVzKXtcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOicvcGFnZXMvaW5kZXgvYmluZCdcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IHRoaXMucmVxdWVzdEV4Y2VwdGlvbihyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat6K+35rGC5piv5ZCm5oiQ5YqfXHJcbiAgICovXHJcbiAgc3RhdGljIGlzU3VjY2VzcyAocmVzKSB7XHJcbiAgICBjb25zdCB3eENvZGUgPSByZXMuc3RhdHVzQ29kZTtcclxuICAgIC8vIOW+ruS/oeivt+axgumUmeivr1xyXG4gICAgaWYgKHd4Q29kZSAhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHd4RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgcmV0dXJuICEod3hEYXRhICYmIHd4RGF0YS5jb2RlICE9PSAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8guW4uFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1ZXN0RXhjZXB0aW9uIChyZXMpIHtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICBjb25zdCB3eERhdGEgPSByZXMuZGF0YTtcclxuICAgIGNvbnN0IHNlcnZlckRhdGEgPSB3eERhdGEuZGF0YTtcclxuICAgIGlmIChzZXJ2ZXJEYXRhKSB7XHJcbiAgICAgIGVycm9yLnNlcnZlckNvZGUgPSB3eERhdGEuY29kZTtcclxuICAgICAgZXJyb3IubWVzc2FnZSA9IHNlcnZlckRhdGEubWVzc2FnZTtcclxuICAgICAgZXJyb3Iuc2VydmVyRGF0YSA9IHNlcnZlckRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0ICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIGRhdGEsIGxvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHB1dCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUFVUJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb3N0ICh1cmwsIGRhdGEsIGxvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQT1NUJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXRjaCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUEFUQ0gnLCB1cmwsIGRhdGEsIGxvYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGV0ZSAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnREVMRVRFJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcclxuICB9XHJcbn0iXX0=