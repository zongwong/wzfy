import wepy from 'wepy'
import base from '../interfaces/base'
var bmap = require('../interfaces/bmap-wx.min.js')
import api from '../interfaces/api' 
const BaiduAk = 'H6CuxFQfHFhiK6noVqISHfs9YOiuA0Sn'
export default class wxApi extends base {
  // 获取定位城市
  static async getLocation(type) {
    const data = await wepy.getLocation(type)
    // return this.BaiduMap(data.longitude, data.latitude)
  }
  // 百度接口
  static async BaiduMap() {
    let BMap = new bmap.BMapWX({  
      ak: BaiduAk
    })
    return new Promise((resolve, reject) => {
      BMap.regeocoding({  
        fail:function(res){
          reject(res)
        },  
        success:function(res){
          resolve(res)
        }  
      })
    })
  }
  // 逆解析
  // 服务城市
  static async getCity() {
    let city = await wepy.getStorageSync('city')
    let cities = await api.cities()
    // if(city){
      return new Promise((resolve, reject) => {
        if(city){
          console.log('缓存城市:'+city)
          resolve(city)
        }else{
          this.BaiduMap().then((res)=>{
            let mycity =  res.originalData.result.addressComponent.city
            mycity = mycity.slice(0,mycity.length-1)
            console.log(mycity)
            if(cities.indexOf(mycity)==-1){
              wepy.setStorageSync('city',cities[0])
              console.log('默认城市:'+cities[0])
              resolve(cities[0])
            }else{
              console.log('定位城市:'+mycity)
              wepy.setStorageSync('city',mycity)
              resolve(mycity)
            }
          })
        }


      })


    // }else{

    // }
  }
  // 获取用户信息
  static async getUser () {
    let Info
    try {
      Info = wepy.getStorageSync('userInfo')
      if (Info) {
          return Info
      }else{
         const { userInfo } = await wepy.getUserInfo()
         return userInfo
      }
    } catch (e) {
      const { userInfo } = await wepy.getUserInfo()
      return data
    }
  }
  // 拨打电话
  static async phoneCall (phone) {
    await wepy.makePhoneCall({
      phoneNumber:phone
    })
  }
  // 图片浏览
  static imgView(src = '', urls = []) {
    wepy.previewImage({
      current: src,
      urls: urls
    })
  }
}