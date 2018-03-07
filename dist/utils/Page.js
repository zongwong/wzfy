'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Http = require('./Http.js');

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagination = function () {
  function Pagination(url, processFunc) {
    _classCallCheck(this, Pagination);

    // 数据访问地址
    this.url = url;
    // 数据集合
    this.list = [];
    // 起始数据
    this.start = 1;
    // 加载数据条数
    this.count = 1;
    // 数据处理函数
    this.processFunc = processFunc;
    // 正在加载中
    this.loading = false;
    // 参数
    this.params = [];
    // 是否底部
    this.reachBottom = false;
    // 是否为空
    this.empty = true;
    // 是否需要清除
    this.toClear = false;
  }

  /**
   * 加载下一页数据
   */


  _createClass(Pagination, [{
    key: 'next',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
        var param, _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = {
                  page: this.start
                  //   limit: this.count
                };

                if (!this.loading) {
                  _context.next = 4;
                  break;
                }

                console.warn('page loading!');
                return _context.abrupt('return', this);

              case 4:
                // 附加参数
                this.loading = true;
                _context.prev = 5;

                Object.assign(param, args);
                _context.next = 9;
                return _Http2.default.get(this.url, param);

              case 9:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (!(data === null || data.length < 1)) {
                  _context.next = 14;
                  break;
                }

                if (this.toClear) {
                  this.clear();
                } else {
                  this.reachBottom = true;
                }
                return _context.abrupt('return', this);

              case 14:
                this.empty = false;
                // 处理数据
                this._processData(data);
                // 设置数据
                if (this.toClear) {
                  this.list = data;
                  this.toClear = false;
                } else {
                  this.list = this.list.concat(data);
                }
                this.start += this.count;
                if (data.length < this.count) {
                  this.reachBottom = true;
                }
                return _context.abrupt('return', this);

              case 20:
                _context.prev = 20;

                this.loading = false;
                return _context.finish(20);

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5,, 20, 23]]);
      }));

      function next(_x) {
        return _ref.apply(this, arguments);
      }

      return next;
    }()

    /**
     * 恢复到第一页
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.empty = true;
      this.toClear = true;
      this.start = 1;
      this.reachBottom = false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.toClear = false;
      this.start = 1;
      this.list = [];
    }

    /**
     * 处理数据（私有）
     */

  }, {
    key: '_processData',
    value: function _processData(data) {
      if (this.processFunc) {
        for (var i in data) {
          var result = this.processFunc(data[i]);
          if (result) {
            data[i] = result;
          }
        }
      }
    }
  }]);

  return Pagination;
}();

exports.default = Pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2UuanMiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInVybCIsInByb2Nlc3NGdW5jIiwibGlzdCIsInN0YXJ0IiwiY291bnQiLCJsb2FkaW5nIiwicGFyYW1zIiwicmVhY2hCb3R0b20iLCJlbXB0eSIsInRvQ2xlYXIiLCJhcmdzIiwicGFyYW0iLCJwYWdlIiwiY29uc29sZSIsIndhcm4iLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJkYXRhIiwibGVuZ3RoIiwiY2xlYXIiLCJfcHJvY2Vzc0RhdGEiLCJjb25jYXQiLCJpIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVxQkEsVTtBQUNuQixzQkFBYUMsR0FBYixFQUFrQkMsV0FBbEIsRUFBK0I7QUFBQTs7QUFDN0I7QUFDQSxTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQTtBQUNBLFNBQUtFLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQTtBQUNBLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0E7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBZjtBQUNBO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQTtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQTtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0E7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEOztBQUVEOzs7Ozs7OzswRkFHWUMsSTs7Ozs7OztBQUNKQyxxQixHQUFRO0FBQ1pDLHdCQUFNLEtBQUtUO0FBQ2I7QUFGYyxpQjs7cUJBSVYsS0FBS0UsTzs7Ozs7QUFDUFEsd0JBQVFDLElBQVIsQ0FBYSxlQUFiO2lEQUNPLEk7OztBQUVUO0FBQ0EscUJBQUtULE9BQUwsR0FBZSxJQUFmOzs7QUFFRVUsdUJBQU9DLE1BQVAsQ0FBY0wsS0FBZCxFQUFxQkQsSUFBckI7O3VCQUN1QixlQUFLTyxHQUFMLENBQVMsS0FBS2pCLEdBQWQsRUFBbUJXLEtBQW5CLEM7Ozs7QUFBZk8sb0IsU0FBQUEsSTs7c0JBRUpBLFNBQVMsSUFBVCxJQUFpQkEsS0FBS0MsTUFBTCxHQUFjLEM7Ozs7O0FBQ2pDLG9CQUFJLEtBQUtWLE9BQVQsRUFBa0I7QUFDaEIsdUJBQUtXLEtBQUw7QUFDRCxpQkFGRCxNQUVPO0FBQ0wsdUJBQUtiLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDtpREFDTSxJOzs7QUFFVCxxQkFBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQTtBQUNBLHFCQUFLYSxZQUFMLENBQWtCSCxJQUFsQjtBQUNBO0FBQ0Esb0JBQUksS0FBS1QsT0FBVCxFQUFrQjtBQUNoQix1QkFBS1AsSUFBTCxHQUFZZ0IsSUFBWjtBQUNBLHVCQUFLVCxPQUFMLEdBQWUsS0FBZjtBQUNELGlCQUhELE1BR087QUFDTCx1QkFBS1AsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVW9CLE1BQVYsQ0FBaUJKLElBQWpCLENBQVo7QUFDRDtBQUNELHFCQUFLZixLQUFMLElBQWMsS0FBS0MsS0FBbkI7QUFDQSxvQkFBSWMsS0FBS0MsTUFBTCxHQUFjLEtBQUtmLEtBQXZCLEVBQThCO0FBQzVCLHVCQUFLRyxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7aURBQ00sSTs7Ozs7QUFFUCxxQkFBS0YsT0FBTCxHQUFlLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlKOzs7Ozs7NEJBR1M7QUFDUCxXQUFLRyxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS04sS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLSSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7Ozs0QkFDUTtBQUNQLFdBQUtFLE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS04sS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLRCxJQUFMLEdBQVksRUFBWjtBQUNEOztBQUVEOzs7Ozs7aUNBR2NnQixJLEVBQU07QUFDbEIsVUFBSSxLQUFLakIsV0FBVCxFQUFzQjtBQUNwQixhQUFLLElBQUlzQixDQUFULElBQWNMLElBQWQsRUFBb0I7QUFDbEIsY0FBTU0sU0FBUyxLQUFLdkIsV0FBTCxDQUFpQmlCLEtBQUtLLENBQUwsQ0FBakIsQ0FBZjtBQUNBLGNBQUlDLE1BQUosRUFBWTtBQUNWTixpQkFBS0ssQ0FBTCxJQUFVQyxNQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs7OztrQkFqR2tCekIsVSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9IdHRwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGlvbiB7XHJcbiAgY29uc3RydWN0b3IgKHVybCwgcHJvY2Vzc0Z1bmMpIHtcclxuICAgIC8vIOaVsOaNruiuv+mXruWcsOWdgFxyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAvLyDmlbDmja7pm4blkIhcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgLy8g6LW35aeL5pWw5o2uXHJcbiAgICB0aGlzLnN0YXJ0ID0gMTtcclxuICAgIC8vIOWKoOi9veaVsOaNruadoeaVsFxyXG4gICAgdGhpcy5jb3VudCA9IDE7XHJcbiAgICAvLyDmlbDmja7lpITnkIblh73mlbBcclxuICAgIHRoaXMucHJvY2Vzc0Z1bmMgPSBwcm9jZXNzRnVuYztcclxuICAgIC8vIOato+WcqOWKoOi9veS4rVxyXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyDlj4LmlbBcclxuICAgIHRoaXMucGFyYW1zID0gW107XHJcbiAgICAvLyDmmK/lkKblupXpg6hcclxuICAgIHRoaXMucmVhY2hCb3R0b20gPSBmYWxzZTtcclxuICAgIC8vIOaYr+WQpuS4uuepulxyXG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XHJcbiAgICAvLyDmmK/lkKbpnIDopoHmuIXpmaRcclxuICAgIHRoaXMudG9DbGVhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yqg6L295LiL5LiA6aG15pWw5o2uXHJcbiAgICovXHJcbiAgYXN5bmMgbmV4dCAoYXJncykge1xyXG4gICAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAgIHBhZ2U6IHRoaXMuc3RhcnQsXHJcbiAgICAvLyAgIGxpbWl0OiB0aGlzLmNvdW50XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMubG9hZGluZykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ3BhZ2UgbG9hZGluZyEnKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvLyDpmYTliqDlj4LmlbBcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtLCBhcmdzKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwLmdldCh0aGlzLnVybCwgcGFyYW0pO1xyXG4gICAgICAvLyDlupXpg6jliKTmlq1cclxuICAgICAgaWYgKGRhdGEgPT09IG51bGwgfHwgZGF0YS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9DbGVhcikge1xyXG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlYWNoQm90dG9tID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbXB0eSA9IGZhbHNlO1xyXG4gICAgICAvLyDlpITnkIbmlbDmja5cclxuICAgICAgdGhpcy5fcHJvY2Vzc0RhdGEoZGF0YSk7XHJcbiAgICAgIC8vIOiuvue9ruaVsOaNrlxyXG4gICAgICBpZiAodGhpcy50b0NsZWFyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gZGF0YTtcclxuICAgICAgICB0aGlzLnRvQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhcnQgKz0gdGhpcy5jb3VudDtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoIDwgdGhpcy5jb3VudCkge1xyXG4gICAgICAgIHRoaXMucmVhY2hCb3R0b20gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmgaLlpI3liLDnrKzkuIDpobVcclxuICAgKi9cclxuICByZXNldCAoKSB7XHJcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcclxuICAgIHRoaXMudG9DbGVhciA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0ID0gMTtcclxuICAgIHRoaXMucmVhY2hCb3R0b20gPSBmYWxzZTtcclxuICB9XHJcbiAgY2xlYXIgKCkge1xyXG4gICAgdGhpcy50b0NsZWFyID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXJ0ID0gMTtcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5aSE55CG5pWw5o2u77yI56eB5pyJ77yJXHJcbiAgICovXHJcbiAgX3Byb2Nlc3NEYXRhIChkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5wcm9jZXNzRnVuYykge1xyXG4gICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2Nlc3NGdW5jKGRhdGFbaV0pO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIGRhdGFbaV0gPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19