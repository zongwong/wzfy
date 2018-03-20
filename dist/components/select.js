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
        }, _this.data = {
            minHeight: 600
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
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var res = wx.getSystemInfoSync();
            this.minHeight = res.windowHeight;
        }
    }]);

    return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInN0YXR1cyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImxpc3QiLCJPYmplY3QiLCJkYXRhIiwibWluSGVpZ2h0IiwibWV0aG9kcyIsInNlbGVjdGVkQ2hhbmdlIiwiaW5kZXgiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJzZWxlY3RlZCIsInNlbGVjdGVkU3VyZSIsImNsb3NlIiwiJGVtaXQiLCJyZXMiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEssR0FBUTtBQUNKQyxvQkFBTztBQUNIQyxzQkFBS0MsT0FERjtBQUVIQyx5QkFBUSxLQUZMO0FBR0hDLHdCQUFPO0FBSEosYUFESDtBQU1KQyxrQkFBSztBQUNESixzQkFBS0s7QUFESjtBQU5ELFMsUUFVUkMsSSxHQUFPO0FBQ0hDLHVCQUFVO0FBRFAsUyxRQUdQQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLEtBRFQsRUFDZ0I7QUFDbEIscUJBQUtOLElBQUwsQ0FBVU8sT0FBVixDQUFtQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYztBQUMvQix3QkFBR0EsS0FBS0gsS0FBUixFQUFjO0FBQ1pFLDZCQUFLRSxRQUFMLEdBQWdCLElBQWhCO0FBQ0QscUJBRkQsTUFFSztBQUNIRiw2QkFBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNEO0FBQ0YsaUJBTkQ7QUFPQSxxQkFBS0MsWUFBTDtBQUNBO0FBQ0gsYUFYSztBQVlOQyxpQkFaTSxtQkFZRTtBQUNOLHFCQUFLakIsTUFBTCxHQUFjLEtBQWQ7QUFDRDtBQWRLLFM7Ozs7O3VDQWlCSztBQUNYLGlCQUFLQSxNQUFMLEdBQWMsS0FBZDtBQUNBLGlCQUFLa0IsS0FBTCxDQUFXLFVBQVg7QUFDSDs7O2lDQUNRO0FBQ1AsZ0JBQUlDLE1BQU1DLEdBQUdDLGlCQUFILEVBQVY7QUFDQSxpQkFBS2IsU0FBTCxHQUFpQlcsSUFBSUcsWUFBckI7QUFDRDs7OztFQXRDK0IsZUFBS0MsUzs7a0JBQXBCekIsTSIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xyXG4gICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgIHN0YXR1czp7XHJcbiAgICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgdHdvV2F5OnRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsaXN0OntcclxuICAgICAgICAgICAgICB0eXBlOk9iamVjdFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBtaW5IZWlnaHQ6NjAwXHJcbiAgICAgIH1cclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgIHNlbGVjdGVkQ2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goIChpdGVtLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN1cmUoKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSAhdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkU3VyZSgpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdGVkJylcclxuICAgICAgfVxyXG4gICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcclxuICAgICAgfVxyXG5cclxuICB9XHJcbiJdfQ==