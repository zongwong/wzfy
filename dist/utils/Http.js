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
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', res.data);

              case 10:
                throw this.requestException(res);

              case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkh0dHAuanMiXSwibmFtZXMiOlsiaHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJsb2FkaW5nIiwidG9rZW4iLCJwYXJhbSIsImdldFN0b3JhZ2VTeW5jIiwiaGVhZGVyIiwicmVxdWVzdCIsInJlcyIsInN0YXR1c0NvZGUiLCJyZXF1ZXN0RXhjZXB0aW9uIiwid3hDb2RlIiwid3hEYXRhIiwiY29kZSIsImVycm9yIiwic2VydmVyRGF0YSIsInNlcnZlckNvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7SUFDcUJBLEk7Ozs7Ozs7OzBGQUNHQyxNLEVBQVFDLEcsRUFBS0MsSTtZQUFNQyxPLHVFQUFVLEk7WUFBT0MsSyx1RUFBUSxJOzs7Ozs7OztBQUMxREMscUIsR0FBUTtBQUNaSix1QkFBS0EsR0FETztBQUVaRCwwQkFBUUEsTUFGSTtBQUdaRSx3QkFBTUE7QUFITSxpQjs7QUFLZCxvQkFBSUMsT0FBSixFQUFhO0FBQ1g7QUFDRDtBQUNELG9CQUFJQyxLQUFKLEVBQVU7QUFDRkEsd0JBREUsR0FDTSxlQUFLRSxjQUFMLENBQW9CLE9BQXBCLENBRE47O0FBRVJELHdCQUFNRSxNQUFOLEdBQWU7QUFDYixvQ0FBZ0IsbUNBREg7QUFFYixxQ0FBa0IsWUFBVUg7QUFGZixtQkFBZjtBQUlEOzt1QkFDaUIsZUFBS0ksT0FBTCxDQUFhSCxLQUFiLEM7OztBQUFaSSxtQjs7c0JBRUZBLElBQUlDLFVBQUosSUFBa0IsRzs7Ozs7aURBQ2JELElBQUlQLEk7OztzQkFFTCxLQUFLUyxnQkFBTCxDQUFzQkYsR0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVjs7Ozs7OzhCQUdrQkEsRyxFQUFLO0FBQ3JCLFVBQU1HLFNBQVNILElBQUlDLFVBQW5CO0FBQ0E7QUFDQSxVQUFJRSxXQUFXLEdBQWYsRUFBb0I7QUFDbEIsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxVQUFNQyxTQUFTSixJQUFJUCxJQUFuQjtBQUNBLGFBQU8sRUFBRVcsVUFBVUEsT0FBT0MsSUFBUCxLQUFnQixDQUE1QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztxQ0FHeUJMLEcsRUFBSztBQUM1QixVQUFNTSxRQUFRLEVBQWQ7QUFDQUEsWUFBTUwsVUFBTixHQUFtQkQsSUFBSUMsVUFBdkI7QUFDQSxVQUFNRyxTQUFTSixJQUFJUCxJQUFuQjtBQUNBLFVBQU1jLGFBQWFILE9BQU9YLElBQTFCO0FBQ0EsVUFBSWMsVUFBSixFQUFnQjtBQUNkRCxjQUFNRSxVQUFOLEdBQW1CSixPQUFPQyxJQUExQjtBQUNBQyxjQUFNRyxPQUFOLEdBQWdCRixXQUFXRSxPQUEzQjtBQUNBSCxjQUFNQyxVQUFOLEdBQW1CQSxVQUFuQjtBQUNEO0FBQ0QsYUFBT0QsS0FBUDtBQUNEOzs7d0JBRVdkLEcsRUFBS0MsSSxFQUFzQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNyQyxhQUFPLEtBQUtLLE9BQUwsQ0FBYSxLQUFiLEVBQW9CUCxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0JDLE9BQS9CLENBQVA7QUFDRDs7O3dCQUVXRixHLEVBQUtDLEksRUFBc0I7QUFBQSxVQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDckMsYUFBTyxLQUFLSyxPQUFMLENBQWEsS0FBYixFQUFvQlAsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixDQUFQO0FBQ0Q7Ozt5QkFFWUYsRyxFQUFLQyxJLEVBQXNCO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQ3RDLGFBQU8sS0FBS0ssT0FBTCxDQUFhLE1BQWIsRUFBcUJQLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ0MsT0FBaEMsQ0FBUDtBQUNEOzs7MEJBRWFGLEcsRUFBS0MsSSxFQUFzQjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUN2QyxhQUFPLEtBQUtLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCUCxHQUF0QixFQUEyQkMsSUFBM0IsRUFBaUNDLE9BQWpDLENBQVA7QUFDRDs7OzRCQUVjRixHLEVBQUtDLEksRUFBc0I7QUFBQSxVQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDeEMsYUFBTyxLQUFLSyxPQUFMLENBQWEsUUFBYixFQUF1QlAsR0FBdkIsRUFBNEJDLElBQTVCLEVBQWtDQyxPQUFsQyxDQUFQO0FBQ0Q7Ozs7OztrQkF6RWtCSixJIiwiZmlsZSI6Ikh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi9UaXBzJztcclxuXHJcbi8vIEhUVFDlt6XlhbfnsbtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaHR0cCB7XHJcbiAgc3RhdGljIGFzeW5jIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSAsIHRva2VuID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgZGF0YTogZGF0YVxyXG4gICAgfTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIC8vIFRpcHMubG9hZGluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRva2VuKXtcclxuICAgICAgY29uc3QgdG9rZW4gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgIHBhcmFtLmhlYWRlciA9IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nIDogJ0JlYXJlciAnK3Rva2VuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdChwYXJhbSk7XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyB0aGlzLnJlcXVlc3RFeGNlcHRpb24ocmVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreivt+axguaYr+WQpuaIkOWKn1xyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1N1Y2Nlc3MgKHJlcykge1xyXG4gICAgY29uc3Qgd3hDb2RlID0gcmVzLnN0YXR1c0NvZGU7XHJcbiAgICAvLyDlvq7kv6Hor7fmsYLplJnor69cclxuICAgIGlmICh3eENvZGUgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3eERhdGEgPSByZXMuZGF0YTtcclxuICAgIHJldHVybiAhKHd4RGF0YSAmJiB3eERhdGEuY29kZSAhPT0gMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvILluLhcclxuICAgKi9cclxuICBzdGF0aWMgcmVxdWVzdEV4Y2VwdGlvbiAocmVzKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gICAgY29uc3Qgd3hEYXRhID0gcmVzLmRhdGE7XHJcbiAgICBjb25zdCBzZXJ2ZXJEYXRhID0gd3hEYXRhLmRhdGE7XHJcbiAgICBpZiAoc2VydmVyRGF0YSkge1xyXG4gICAgICBlcnJvci5zZXJ2ZXJDb2RlID0gd3hEYXRhLmNvZGU7XHJcbiAgICAgIGVycm9yLm1lc3NhZ2UgPSBzZXJ2ZXJEYXRhLm1lc3NhZ2U7XHJcbiAgICAgIGVycm9yLnNlcnZlckRhdGEgPSBzZXJ2ZXJEYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnR0VUJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwdXQgKHVybCwgZGF0YSwgbG9hZGluZyA9IHRydWUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcG9zdCAodXJsLCBkYXRhLCBsb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSwgbG9hZGluZyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGF0Y2ggKHVybCwgZGF0YSwgbG9hZGluZyA9IHRydWUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BBVENIJywgdXJsLCBkYXRhLCBsb2FkaW5nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGUgKHVybCwgZGF0YSwgbG9hZGluZyA9IHRydWUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgZGF0YSwgbG9hZGluZyk7XHJcbiAgfVxyXG59Il19