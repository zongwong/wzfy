'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Http = require('./../utils/Http.js');

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var host = 'https://www.xmwzfy.com/api';

var Base = function Base() {
  _classCallCheck(this, Base);
};

Base.host = host;
Base.get = _Http2.default.get.bind(_Http2.default);
Base.post = _Http2.default.post.bind(_Http2.default);
Base.put = _Http2.default.put.bind(_Http2.default);
Base.delete = _Http2.default.delete.bind(_Http2.default);
exports.default = Base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiaG9zdCIsIkJhc2UiLCJnZXQiLCJiaW5kIiwicG9zdCIsInB1dCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7OztBQURBLElBQU1BLE9BQU8sNEJBQWI7O0lBRXFCQyxJOzs7O0FBQUFBLEksQ0FDWkQsSSxHQUFPQSxJO0FBREtDLEksQ0FFWkMsRyxHQUFNLGVBQUtBLEdBQUwsQ0FBU0MsSUFBVCxnQjtBQUZNRixJLENBR1pHLEksR0FBTyxlQUFLQSxJQUFMLENBQVVELElBQVYsZ0I7QUFIS0YsSSxDQUlaSSxHLEdBQU0sZUFBS0EsR0FBTCxDQUFTRixJQUFULGdCO0FBSk1GLEksQ0FLWkssTSxHQUFTLGVBQUtBLE1BQUwsQ0FBWUgsSUFBWixnQjtrQkFMR0YsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy54bXd6ZnkuY29tL2FwaSdcclxuaW1wb3J0IGh0dHAgZnJvbSAnLi4vdXRpbHMvSHR0cCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XHJcbiAgc3RhdGljIGhvc3QgPSBob3N0XHJcbiAgc3RhdGljIGdldCA9IGh0dHAuZ2V0LmJpbmQoaHR0cClcclxuICBzdGF0aWMgcG9zdCA9IGh0dHAucG9zdC5iaW5kKGh0dHApXHJcbiAgc3RhdGljIHB1dCA9IGh0dHAucHV0LmJpbmQoaHR0cClcclxuICBzdGF0aWMgZGVsZXRlID0gaHR0cC5kZWxldGUuYmluZChodHRwKVxyXG59Il19