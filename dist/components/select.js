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
            },
            close: function close() {
                this.status = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInN0YXR1cyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImxpc3QiLCJPYmplY3QiLCJtZXRob2RzIiwic2VsZWN0ZWRTdXJlIiwiJGVtaXQiLCJzZWxlY3RlZENoYW5nZSIsImluZGV4Iiwic2VsZWN0ZWQiLCJjbG9zZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsSyxHQUFRO0FBQ0pDLG9CQUFPO0FBQ0hDLHNCQUFLQyxPQURGO0FBRUhDLHlCQUFRLEtBRkw7QUFHSEMsd0JBQU87QUFISixhQURIO0FBTUpDLGtCQUFLO0FBQ0RKLHNCQUFLSztBQURKO0FBTkQsUyxRQVVSQyxPLEdBQVU7QUFDTkMsd0JBRE0sMEJBQ1M7QUFDWCxxQkFBS1IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxxQkFBS1MsS0FBTCxDQUFXLFVBQVg7QUFDSCxhQUpLO0FBS05DLDBCQUxNLDBCQUtTQyxLQUxULEVBS2dCO0FBQ2xCLHFCQUFLTixJQUFMLENBQVVNLEtBQVYsRUFBaUJDLFFBQWpCLEdBQTRCLENBQUMsS0FBS1AsSUFBTCxDQUFVTSxLQUFWLEVBQWlCQyxRQUE5QztBQUNILGFBUEs7QUFRTkMsaUJBUk0sbUJBUUU7QUFDTixxQkFBS2IsTUFBTCxHQUFjLEtBQWQ7QUFDRDtBQVZLLFM7Ozs7RUFYc0IsZUFBS2MsUzs7a0JBQXBCaEIsTSIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xyXG4gICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgIHN0YXR1czp7XHJcbiAgICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgdHdvV2F5OnRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsaXN0OntcclxuICAgICAgICAgICAgICB0eXBlOk9iamVjdFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICBzZWxlY3RlZFN1cmUoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0ZWRDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gIXRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4iXX0=