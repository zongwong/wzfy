'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recommend = function (_wepy$page) {
    _inherits(Recommend, _wepy$page);

    function Recommend() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Recommend);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Recommend.__proto__ || Object.getPrototypeOf(Recommend)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的推荐'
        }, _this.data = {
            navs: [{
                text: '未完成',
                selected: true
            }, {
                text: '已成交',
                selected: false
            }, {
                text: '未成交',
                selected: false
            }]
        }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:navs.once": "navs" } }, _this.$events = {}, _this.components = {
            tab: _tab2.default
        }, _this.methods = {}, _this.events = {
            navTapEvent: function navTapEvent(index) {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Recommend, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Recommend;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Recommend , 'pages/user/recommend'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWIiLCJtZXRob2RzIiwiZXZlbnRzIiwibmF2VGFwRXZlbnQiLCJpbmRleCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFLLENBQUM7QUFDQUMsc0JBQUssS0FETDtBQUVBQywwQkFBUztBQUZULGFBQUQsRUFHRDtBQUNFRCxzQkFBSyxLQURQO0FBRUVDLDBCQUFTO0FBRlgsYUFIQyxFQU1EO0FBQ0VELHNCQUFLLEtBRFA7QUFFRUMsMEJBQVM7QUFGWCxhQU5DO0FBREEsUyxRQWFSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLE1BQXRDLEVBQVAsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxTLFFBSVZDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUztBQUNQQyx1QkFETyx1QkFDS0MsS0FETCxFQUNZLENBRWxCO0FBSE0sUzs7Ozs7aUNBTUEsQ0FFUjs7OztFQXJDb0MsZUFBS0MsSTs7a0JBQXZCaEIsUyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0YWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWInXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOaOqOiNkCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYXZzOlt7XHJcbiAgICAgICAgICAgIHRleHQ6J+acquWujOaIkCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOnRydWUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHRleHQ6J+W3suaIkOS6pCcsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOmZhbHNlLFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICB0ZXh0OifmnKrmiJDkuqQnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDpmYWxzZSxcclxuICAgICAgICB9XSxcclxuICAgIH1cclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpuYXZzLm9uY2VcIjpcIm5hdnNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICB0YWI6dGFiXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIG5hdlRhcEV2ZW50KGluZGV4KSB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==