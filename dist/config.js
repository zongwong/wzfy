'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'production';

var hosts = {
  development: 'http://lady.zdgphp.cn/api',
  production: 'https://www.2p98.cn/api'

  // api列表
};var api = {
  users: {
    // 用户登录
    login: {
      method: 'post',
      url: '/users/login'
    },
    // 编辑资料
    save: {
      method: 'post',
      url: '/users/editUserInfo'
    },
    // 获取用户资料
    get: {
      method: 'post',
      url: '/users/userInfo'
    },
    // 我的发布
    publish: {
      method: 'post',
      url: '/users/myActivity'
    },
    // 我的参与
    join: {
      method: 'post',
      url: '/users/myJoinActivity'
    },
    // 我的心情
    mymood: {
      method: 'post',
      url: '/users/myMood'
    },
    // 我的兑换
    myex: {
      method: 'post',
      url: '/users/myExchange'
    },
    // 我的视频
    myvideo: {
      method: 'post',
      url: '/users/myStudy'
    },
    // 我的文章
    myarticle: {
      method: 'post',
      url: '/users/myArticle'
    },
    // 兑换详情
    exdetail: {
      method: 'post',
      url: '/query/exchangeDetail'
    }
  },
  public: {
    // 上传图片
    upload: {
      method: 'post',
      url: '/public/uploadImg'
    },
    // 全局数据
    global: {
      method: 'post',
      url: '/public/globalData'
    },
    // 获取支付参数
    pay: {
      method: 'post',
      url: '/public/pay'
    }
  }
  // 递归处理url
};var disposeUrl = function disposeUrl(obj, preUrl) {
  Object.keys(obj).forEach(function (key, index) {
    if (obj[key].url) {
      obj[key].url = preUrl + obj[key].url;
    } else {
      disposeUrl(obj[key], preUrl);
    }
  });
  return obj;
};

exports.default = disposeUrl(api, hosts[env]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsImFwaSIsInVzZXJzIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJzYXZlIiwiZ2V0IiwicHVibGlzaCIsImpvaW4iLCJteW1vb2QiLCJteWV4IiwibXl2aWRlbyIsIm15YXJ0aWNsZSIsImV4ZGV0YWlsIiwicHVibGljIiwidXBsb2FkIiwiZ2xvYmFsIiwicGF5IiwiZGlzcG9zZVVybCIsIm9iaiIsInByZVVybCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxZQUFaOztBQUVBLElBQU1DLFFBQVE7QUFDWkMsZUFBYSwyQkFERDtBQUVaQyxjQUFZOztBQUdkO0FBTGMsQ0FBZCxDQU1BLElBQU1DLE1BQU07QUFDVkMsU0FBTztBQUNMO0FBQ0FDLFdBQU87QUFDTEMsY0FBUSxNQURIO0FBRUxDLFdBQUs7QUFGQSxLQUZGO0FBTUw7QUFDQUMsVUFBTTtBQUNKRixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBUEQ7QUFXTDtBQUNBRSxTQUFLO0FBQ0hILGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkYsS0FaQTtBQWdCTDtBQUNBRyxhQUFTO0FBQ1BKLGNBQVEsTUFERDtBQUVQQyxXQUFLO0FBRkUsS0FqQko7QUFxQkw7QUFDQUksVUFBTTtBQUNKTCxjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBdEJEO0FBMEJMO0FBQ0FLLFlBQVE7QUFDTk4sY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQTNCSDtBQStCTDtBQUNBTSxVQUFNO0FBQ0pQLGNBQVEsTUFESjtBQUVKQyxXQUFLO0FBRkQsS0FoQ0Q7QUFvQ0w7QUFDQU8sYUFBUztBQUNQUixjQUFRLE1BREQ7QUFFUEMsV0FBSztBQUZFLEtBckNKO0FBeUNMO0FBQ0FRLGVBQVc7QUFDVFQsY0FBUSxNQURDO0FBRVRDLFdBQUs7QUFGSSxLQTFDTjtBQThDTDtBQUNBUyxjQUFVO0FBQ1JWLGNBQVEsTUFEQTtBQUVSQyxXQUFLO0FBRkc7QUEvQ0wsR0FERztBQXFEVlUsVUFBUTtBQUNOO0FBQ0FDLFlBQVE7QUFDTlosY0FBUSxNQURGO0FBRU5DLFdBQUs7QUFGQyxLQUZGO0FBTU47QUFDQVksWUFBUTtBQUNOYixjQUFRLE1BREY7QUFFTkMsV0FBSztBQUZDLEtBUEY7QUFXTjtBQUNBYSxTQUFLO0FBQ0hkLGNBQVEsTUFETDtBQUVIQyxXQUFLO0FBRkY7QUFaQztBQWtCVjtBQXZFWSxDQUFaLENBd0VBLElBQU1jLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbENDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZDLFFBQUlOLElBQUlLLEdBQUosRUFBU3BCLEdBQWIsRUFBa0I7QUFDaEJlLFVBQUlLLEdBQUosRUFBU3BCLEdBQVQsR0FBZWdCLFNBQVNELElBQUlLLEdBQUosRUFBU3BCLEdBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xjLGlCQUFXQyxJQUFJSyxHQUFKLENBQVgsRUFBcUJKLE1BQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsR0FBUDtBQUNELENBVEQ7O2tCQVdlRCxXQUFXbEIsR0FBWCxFQUFnQkgsTUFBTUQsR0FBTixDQUFoQixDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudiA9ICdwcm9kdWN0aW9uJ1xyXG5cclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6ICdodHRwOi8vbGFkeS56ZGdwaHAuY24vYXBpJyxcclxuICBwcm9kdWN0aW9uOiAnaHR0cHM6Ly93d3cuMnA5OC5jbi9hcGknXHJcbn1cclxuXHJcbi8vIGFwaeWIl+ihqFxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcnM6IHtcclxuICAgIC8vIOeUqOaIt+eZu+W9lVxyXG4gICAgbG9naW46IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9sb2dpbidcclxuICAgIH0sXHJcbiAgICAvLyDnvJbovpHotYTmlplcclxuICAgIHNhdmU6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9lZGl0VXNlckluZm8nXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W55So5oi36LWE5paZXHJcbiAgICBnZXQ6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy91c2VySW5mbydcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTlj5HluINcclxuICAgIHB1Ymxpc2g6IHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIHVybDogJy91c2Vycy9teUFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWPguS4jlxyXG4gICAgam9pbjoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215Sm9pbkFjdGl2aXR5J1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOW/g+aDhVxyXG4gICAgbXltb29kOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlNb29kJ1xyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWFkeaNolxyXG4gICAgbXlleDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215RXhjaGFuZ2UnXHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE6KeG6aKRXHJcbiAgICBteXZpZGVvOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvdXNlcnMvbXlTdHVkeSdcclxuICAgIH0sXHJcbiAgICAvLyDmiJHnmoTmlofnq6BcclxuICAgIG15YXJ0aWNsZToge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3VzZXJzL215QXJ0aWNsZSdcclxuICAgIH0sXHJcbiAgICAvLyDlhZHmjaLor6bmg4VcclxuICAgIGV4ZGV0YWlsOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcXVlcnkvZXhjaGFuZ2VEZXRhaWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwdWJsaWM6IHtcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgdXBsb2FkOiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3VwbG9hZEltZydcclxuICAgIH0sXHJcbiAgICAvLyDlhajlsYDmlbDmja5cclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgdXJsOiAnL3B1YmxpYy9nbG9iYWxEYXRhJ1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluaUr+S7mOWPguaVsFxyXG4gICAgcGF5OiB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICB1cmw6ICcvcHVibGljL3BheSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8g6YCS5b2S5aSE55CGdXJsXHJcbmNvbnN0IGRpc3Bvc2VVcmwgPSAob2JqLCBwcmVVcmwpID0+IHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgIGlmIChvYmpba2V5XS51cmwpIHtcclxuICAgICAgb2JqW2tleV0udXJsID0gcHJlVXJsICsgb2JqW2tleV0udXJsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwb3NlVXJsKG9ialtrZXldLCBwcmVVcmwpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3Bvc2VVcmwoYXBpLCBob3N0c1tlbnZdKVxyXG4iXX0=