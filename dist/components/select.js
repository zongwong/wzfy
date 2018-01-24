'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            selectedChange: function selectedChange(index) {
                this.list.forEach(function (item, i) {
                    if (i == index) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                });
                this.selectedSure();
                // this.list[index].selected = !this.list[index].selected
            },
            close: function close() {
                this.status = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
        key: 'selectedSure',
        value: function selectedSure() {
            this.status = false;
            this.$emit('selected');
        }
    }]);

    return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInN0YXR1cyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImxpc3QiLCJPYmplY3QiLCJtZXRob2RzIiwic2VsZWN0ZWRDaGFuZ2UiLCJpbmRleCIsImZvckVhY2giLCJpdGVtIiwiaSIsInNlbGVjdGVkIiwic2VsZWN0ZWRTdXJlIiwiY2xvc2UiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQU87QUFDSEMsc0JBQUtDLE9BREY7QUFFSEMseUJBQVEsS0FGTDtBQUdIQyx3QkFBTztBQUhKLGFBREg7QUFNSkMsa0JBQUs7QUFDREosc0JBQUtLO0FBREo7QUFORCxTLFFBVVJDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsS0FEVCxFQUNnQjtBQUNsQixxQkFBS0osSUFBTCxDQUFVSyxPQUFWLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFjO0FBQy9CLHdCQUFHQSxLQUFLSCxLQUFSLEVBQWM7QUFDWkUsNkJBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxxQkFGRCxNQUVLO0FBQ0hGLDZCQUFLRSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7QUFDRixpQkFORDtBQU9BLHFCQUFLQyxZQUFMO0FBQ0E7QUFDSCxhQVhLO0FBWU5DLGlCQVpNLG1CQVlFO0FBQ04scUJBQUtmLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFkSyxTOzs7Ozt1Q0FpQks7QUFDWCxpQkFBS0EsTUFBTCxHQUFjLEtBQWQ7QUFDQSxpQkFBS2dCLEtBQUwsQ0FBVyxVQUFYO0FBQ0g7Ozs7RUEvQitCLGVBQUtDLFM7O2tCQUFwQm5CLE0iLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcclxuICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgICBzdGF0dXM6e1xyXG4gICAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixcclxuICAgICAgICAgICAgICBkZWZhdWx0OmZhbHNlLFxyXG4gICAgICAgICAgICAgIHR3b1dheTp0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGlzdDp7XHJcbiAgICAgICAgICAgICAgdHlwZTpPYmplY3RcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgc2VsZWN0ZWRDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCggKGl0ZW0sIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3VyZSgpXHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9ICF0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWRTdXJlKCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0ZWQnKVxyXG4gICAgICB9XHJcblxyXG4gIH1cclxuIl19