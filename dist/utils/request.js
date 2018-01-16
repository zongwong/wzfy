'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options, token) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options.method === 'post') {
              options.header = {
                'content-type': 'application/x-www-form-urlencoded'
              };
            }
            if (token) {
              options.data['_token'] = _wepy2.default.getStorageSync('_token');
            }
            _context.next = 4;
            return _wepy2.default.request(options);

          case 4:
            response = _context.sent;

            if (response.statusCode === 500) {
              _wepy2.default.showModal({
                title: '提示',
                content: '\u670D\u52A1\u5668\u9519\u8BEF,' + response.data.errmsg
              });
            }
            return _context.abrupt('return', response);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function request(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return request;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsib3B0aW9ucyIsInRva2VuIiwibWV0aG9kIiwiaGVhZGVyIiwiZGF0YSIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImVycm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7OztxRUFDZSxpQkFBdUJBLE9BQXZCLEVBQWdDQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixnQkFBSUQsUUFBUUUsTUFBUixLQUFtQixNQUF2QixFQUErQjtBQUM3QkYsc0JBQVFHLE1BQVIsR0FBaUI7QUFDZixnQ0FBZ0I7QUFERCxlQUFqQjtBQUdEO0FBQ0QsZ0JBQUlGLEtBQUosRUFBVztBQUNURCxzQkFBUUksSUFBUixDQUFhLFFBQWIsSUFBeUIsZUFBS0MsY0FBTCxDQUFvQixRQUFwQixDQUF6QjtBQUNEO0FBUlk7QUFBQSxtQkFTUSxlQUFLQyxPQUFMLENBQWFOLE9BQWIsQ0FUUjs7QUFBQTtBQVNUTyxvQkFUUzs7QUFVYixnQkFBSUEsU0FBU0MsVUFBVCxLQUF3QixHQUE1QixFQUFpQztBQUMvQiw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLElBRE07QUFFYkMsNkRBQWtCSixTQUFTSCxJQUFULENBQWNRO0FBRm5CLGVBQWY7QUFJRDtBQWZZLDZDQWdCTkwsUUFoQk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZUQsTzs7OztTQUFBQSxPIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMsIHRva2VuKSB7XHJcbiAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAncG9zdCcpIHtcclxuICAgIG9wdGlvbnMuaGVhZGVyID0ge1xyXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBvcHRpb25zLmRhdGFbJ190b2tlbiddID0gd2VweS5nZXRTdG9yYWdlU3luYygnX3Rva2VuJylcclxuICB9XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgd2VweS5yZXF1ZXN0KG9wdGlvbnMpXHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDUwMCkge1xyXG4gICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgIGNvbnRlbnQ6IGDmnI3liqHlmajplJnor68sJHtyZXNwb25zZS5kYXRhLmVycm1zZ31gXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2VcclxufVxyXG4iXX0=