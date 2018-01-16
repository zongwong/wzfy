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

var bmap = require('./bmap-wx.min.js');
var BaiduAk = 'H6CuxFQfHFhiK6noVqISHfs9YOiuA0Sn';

var wxApi = function (_base) {
  _inherits(wxApi, _base);

  function wxApi() {
    _classCallCheck(this, wxApi);

    return _possibleConstructorReturn(this, (wxApi.__proto__ || Object.getPrototypeOf(wxApi)).apply(this, arguments));
  }

  _createClass(wxApi, null, [{
    key: 'getLocation',

    // 获取定位城市
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getLocation(type);

              case 2:
                data = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLocation(_x) {
        return _ref.apply(this, arguments);
      }

      return getLocation;
    }()
    // 百度接口

  }, {
    key: 'BaiduMap',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var BMap;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                BMap = new bmap.BMapWX({
                  ak: BaiduAk
                });
                return _context2.abrupt('return', new Promise(function (resolve, reject) {
                  BMap.regeocoding({
                    fail: function fail(res) {
                      reject(res);
                    },
                    success: function success(res) {
                      resolve(res);
                    }
                  });
                }));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function BaiduMap() {
        return _ref2.apply(this, arguments);
      }

      return BaiduMap;
    }()
  }]);

  return wxApi;
}(_base3.default);

exports.default = wxApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4YXBpLmpzIl0sIm5hbWVzIjpbImJtYXAiLCJyZXF1aXJlIiwiQmFpZHVBayIsInd4QXBpIiwidHlwZSIsImdldExvY2F0aW9uIiwiZGF0YSIsIkJNYXAiLCJCTWFwV1giLCJhayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVnZW9jb2RpbmciLCJmYWlsIiwicmVzIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLDhCQUFSLENBQVg7QUFDQSxJQUFNQyxVQUFVLGtDQUFoQjs7SUFDcUJDLEs7Ozs7Ozs7Ozs7OztBQUNuQjs7MEZBQ3lCQyxJOzs7Ozs7O3VCQUNKLGVBQUtDLFdBQUwsQ0FBaUJELElBQWpCLEM7OztBQUFiRSxvQjs7Ozs7Ozs7Ozs7Ozs7OztBQUdSOzs7Ozs7Ozs7OztBQUVNQyxvQixHQUFPLElBQUlQLEtBQUtRLE1BQVQsQ0FBZ0I7QUFDekJDLHNCQUFJUDtBQURxQixpQkFBaEIsQztrREFHSixJQUFJUSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDTCx1QkFBS00sV0FBTCxDQUFpQjtBQUNmQywwQkFBSyxjQUFTQyxHQUFULEVBQWE7QUFDaEJILDZCQUFPRyxHQUFQO0FBQ0QscUJBSGM7QUFJZkMsNkJBQVEsaUJBQVNELEdBQVQsRUFBYTtBQUNuQkosOEJBQVFJLEdBQVI7QUFDRDtBQU5jLG1CQUFqQjtBQVFELGlCQVRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFYVVosSyIsImZpbGUiOiJ3eGFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBiYXNlIGZyb20gJy4uL2ludGVyZmFjZXMvYmFzZSdcclxudmFyIGJtYXAgPSByZXF1aXJlKCcuLi9pbnRlcmZhY2VzL2JtYXAtd3gubWluLmpzJykgXHJcbmNvbnN0IEJhaWR1QWsgPSAnSDZDdXhGUWZIRmhpSzZub1ZxSVNIZnM5WU9pdUEwU24nXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHd4QXBpIGV4dGVuZHMgYmFzZSB7XHJcbiAgLy8g6I635Y+W5a6a5L2N5Z+O5biCXHJcbiAgc3RhdGljIGFzeW5jIGdldExvY2F0aW9uKHR5cGUpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LmdldExvY2F0aW9uKHR5cGUpXHJcbiAgICAvLyByZXR1cm4gdGhpcy5CYWlkdU1hcChkYXRhLmxvbmdpdHVkZSwgZGF0YS5sYXRpdHVkZSlcclxuICB9XHJcbiAgLy8g55m+5bqm5o6l5Y+jXHJcbiAgc3RhdGljIGFzeW5jIEJhaWR1TWFwKCkge1xyXG4gICAgbGV0IEJNYXAgPSBuZXcgYm1hcC5CTWFwV1goeyAgXHJcbiAgICAgIGFrOiBCYWlkdUFrXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgQk1hcC5yZWdlb2NvZGluZyh7ICBcclxuICAgICAgICBmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgIH0sICBcclxuICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9ICBcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gIH1cclxufSJdfQ==