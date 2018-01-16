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

var TabNav = function (_wepy$component) {
    _inherits(TabNav, _wepy$component);

    function TabNav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TabNav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabNav.__proto__ || Object.getPrototypeOf(TabNav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            navs: {
                type: Object
            }
        }, _this.methods = {
            tap: function tap(index) {
                this.navs.forEach(function (item, i) {
                    if (i == index) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                });
                this.$emit('navTapEvent', index);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return TabNav;
}(_wepy2.default.component);

exports.default = TabNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWJOYXYiLCJwcm9wcyIsIm5hdnMiLCJ0eXBlIiwiT2JqZWN0IiwibWV0aG9kcyIsInRhcCIsImluZGV4IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic2VsZWN0ZWQiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsSyxHQUFRO0FBQ0pDLGtCQUFLO0FBQ0RDLHNCQUFLQztBQURKO0FBREQsUyxRQUtSQyxPLEdBQVU7QUFDTkMsZUFETSxlQUNGQyxLQURFLEVBQ0s7QUFDUCxxQkFBS0wsSUFBTCxDQUFVTSxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBTUMsQ0FBTixFQUFVO0FBQ3hCLHdCQUFHQSxLQUFLSCxLQUFSLEVBQWM7QUFDVkUsNkJBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxxQkFGRCxNQUVLO0FBQ0RGLDZCQUFLRSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7QUFDSixpQkFORDtBQU9BLHFCQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQkwsS0FBMUI7QUFDSDtBQVZLLFM7Ozs7RUFOc0IsZUFBS00sUzs7a0JBQXBCYixNIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTmF2IGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgbmF2czp7XHJcbiAgICAgICAgICAgICAgdHlwZTpPYmplY3RcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgdGFwKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uYXZzLmZvckVhY2goKGl0ZW0saSk9PntcclxuICAgICAgICAgICAgICAgICAgaWYoaSA9PSBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25hdlRhcEV2ZW50JywgaW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4iXX0=