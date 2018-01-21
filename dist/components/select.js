'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_wepy$component) {
    _inherits(Select, _wepy$component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            status: {
                type: Boolean,
                default: false,
                twoWay: true
            },
            list: {
                type: Object
            }
        }, _this.methods = {
            selectedSure: function selectedSure() {
                this.status = false;
                this.$emit('selected');
            },
            selectedChange: function selectedChange(index) {
                this.list[index].selected = !this.list[index].selected;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInN0YXR1cyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImxpc3QiLCJPYmplY3QiLCJtZXRob2RzIiwic2VsZWN0ZWRTdXJlIiwiJGVtaXQiLCJzZWxlY3RlZENoYW5nZSIsImluZGV4Iiwic2VsZWN0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEssR0FBUTtBQUNKQyxvQkFBTztBQUNIQyxzQkFBS0MsT0FERjtBQUVIQyx5QkFBUSxLQUZMO0FBR0hDLHdCQUFPO0FBSEosYUFESDtBQU1KQyxrQkFBSztBQUNESixzQkFBS0s7QUFESjtBQU5ELFMsUUFVUkMsTyxHQUFVO0FBQ05DLHdCQURNLDBCQUNTO0FBQ1gscUJBQUtSLE1BQUwsR0FBYyxLQUFkO0FBQ0EscUJBQUtTLEtBQUwsQ0FBVyxVQUFYO0FBQ0gsYUFKSztBQUtOQywwQkFMTSwwQkFLU0MsS0FMVCxFQUtnQjtBQUNsQixxQkFBS04sSUFBTCxDQUFVTSxLQUFWLEVBQWlCQyxRQUFqQixHQUE0QixDQUFDLEtBQUtQLElBQUwsQ0FBVU0sS0FBVixFQUFpQkMsUUFBOUM7QUFDSDtBQVBLLFM7Ozs7RUFYc0IsZUFBS0MsUzs7a0JBQXBCZixNIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgc3RhdHVzOntcclxuICAgICAgICAgICAgICB0eXBlOkJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpmYWxzZSxcclxuICAgICAgICAgICAgICB0d29XYXk6dHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxpc3Q6e1xyXG4gICAgICAgICAgICAgIHR5cGU6T2JqZWN0XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgIHNlbGVjdGVkU3VyZSgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RlZENoYW5nZShpbmRleCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSAhdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4iXX0=