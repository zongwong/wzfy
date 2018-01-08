const env = 'production'

const hosts = {
  development: 'http://lady.zdgphp.cn/api',
  production: 'https://www.2p98.cn/api'
}

// api列表
const api = {
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
}
// 递归处理url
const disposeUrl = (obj, preUrl) => {
  Object.keys(obj).forEach((key, index) => {
    if (obj[key].url) {
      obj[key].url = preUrl + obj[key].url
    } else {
      disposeUrl(obj[key], preUrl)
    }
  })
  return obj
}

export default disposeUrl(api, hosts[env])
