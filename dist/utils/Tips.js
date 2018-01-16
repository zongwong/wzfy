'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'success',


    /**
     * 弹出提示框
     */

    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      wx.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      });
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'modal',
    value: function modal(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: false,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: '/images/icons/alert.png',
        mask: true,
        duration: 500
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 500);
      });
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/icons/error.png',
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      if (wx.showLoading) {
        wx.showLoading({
          title: title,
          mask: true
        });
      } else {
        wx.showNavigationBarLoading();
      }
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (this.isLoading) {
        this.isLoading = false;
        if (wx.hideLoading) {
          wx.hideLoading();
        } else {
          wx.hideNavigationBarLoading();
        }
      }
    }

    /**
     * 弹出下拉动作栏
     */

  }, {
    key: 'action',
    value: function action() {
      for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: 'actionWithFunc',
    value: function actionWithFunc(items) {
      for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        functions[_key2 - 1] = arguments[_key2];
      }

      wx.showActionSheet({
        itemList: items,
        success: function success(res) {
          var index = res.tapIndex;
          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      this.isLoading = true;
    }
  }]);

  return Tips;
}();

Tips.isLoading = false;
Tips.pause = false;
exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsInRpdGxlIiwiZHVyYXRpb24iLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJwYXlsb2FkIiwiY29uZmlybSIsImNhbmNlbCIsIm9uSGlkZSIsImltYWdlIiwiaXNMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJoaWRlTG9hZGluZyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsIml0ZW1zIiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJyZXN1bHQiLCJpbmRleCIsInRhcEluZGV4IiwiZXJyTXNnIiwiZnVuY3Rpb25zIiwibGVuZ3RoIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCIsInBhdXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdxQkEsSTs7Ozs7Ozs7O0FBSW5COzs7OzRCQUlnQkMsSyxFQUF1QjtBQUFBLFVBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNyQ0MsU0FBR0MsU0FBSCxDQUFhO0FBQ1hILGVBQU9BLEtBREk7QUFFWEksY0FBTSxTQUZLO0FBR1hDLGNBQU0sSUFISztBQUlYSixrQkFBVUE7QUFKQyxPQUFiO0FBTUEsVUFBSUEsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCLGVBQU8sSUFBSUssT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MscUJBQVcsWUFBTTtBQUNmRjtBQUNELFdBRkQsRUFFR04sUUFGSDtBQUdELFNBSk0sQ0FBUDtBQUtEO0FBQ0Y7O0FBRUQ7Ozs7OzswQkFHY1MsSSxFQUFvQjtBQUFBLFVBQWRWLEtBQWMsdUVBQU4sSUFBTTs7QUFDaEMsYUFBTyxJQUFJTSxP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SztrQkFGSXpDLEkiLCJmaWxlIjoiVGlwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xyXG4gIHN0YXRpYyBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBzdGF0aWMgcGF1c2UgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICog5by55Ye65o+Q56S65qGGXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyBzdWNjZXNzICh0aXRsZSwgZHVyYXRpb24gPSA1MDApIHtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgIH0pO1xyXG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvLnlh7rnoa7orqTnqpflj6NcclxuICAgKi9cclxuICBzdGF0aWMgbW9kYWwgKHRleHQsIHRpdGxlID0gJ+aPkOekuicpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvLnlh7rnoa7orqTnqpflj6NcclxuICAgKi9cclxuICBzdGF0aWMgY29uZmlybSAodGV4dCwgcGF5bG9hZCA9IHt9LCB0aXRsZSA9ICfmj5DnpLonKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICByZWplY3QocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvYXN0ICh0aXRsZSwgb25IaWRlLCBpY29uID0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGljb246IGljb24sXHJcbiAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgIH0pO1xyXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uSGlkZSgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K2m5ZGK5qGGXHJcbiAgICovXHJcbiAgc3RhdGljIGFsZXJ0ICh0aXRsZSkge1xyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvaWNvbnMvYWxlcnQucG5nJyxcclxuICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmUmeivr+ahhlxyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgZXJyb3IgKHRpdGxlLCBvbkhpZGUpIHtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb25zL2Vycm9yLnBuZycsXHJcbiAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgIH0pO1xyXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uSGlkZSgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5by55Ye65Yqg6L295o+Q56S6XHJcbiAgICovXHJcbiAgc3RhdGljIGxvYWRpbmcgKHRpdGxlID0gJ+WKoOi9veS4rScpIHtcclxuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpZiAod3guc2hvd0xvYWRpbmcpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliqDovb3lrozmr5VcclxuICAgKi9cclxuICBzdGF0aWMgbG9hZGVkICgpIHtcclxuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBpZiAod3guaGlkZUxvYWRpbmcpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlvLnlh7rkuIvmi4nliqjkvZzmoI9cclxuICAgKi9cclxuICBzdGF0aWMgYWN0aW9uICguLi5pdGVtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICBpdGVtTGlzdDogaXRlbXMsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBpbmRleDogcmVzLnRhcEluZGV4LFxyXG4gICAgICAgICAgICB0ZXh0OiBpdGVtc1tyZXMudGFwSW5kZXhdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgcmVqZWN0KHJlcy5lcnJNc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhY3Rpb25XaXRoRnVuYyAoaXRlbXMsIC4uLmZ1bmN0aW9ucykge1xyXG4gICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgaXRlbUxpc3Q6IGl0ZW1zLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXMudGFwSW5kZXg7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBmdW5jdGlvbnNbaW5kZXhdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaGFyZSAodGl0bGUsIHVybCwgZGVzYykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBwYXRoOiB1cmwsXHJcbiAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBUaXBzLnRvYXN0KCfliIbkuqvmiJDlip8nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRMb2FkaW5nICgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICB9XHJcbn0iXX0=