import wepy from 'wepy'
import base from '../interfaces/base'
export default class Api extends base{
  // 短信接口
  static async sms(data) {
    const url = `${this.host}/sms`
    return await this.post(url, data)
  }
  // 登录绑定
  static async bind(data) {
    const url = `${this.host}/login`
    return await this.post(url, data)
  }
  // banner
  static async banner() {
    const url = `${this.host}/banner`
    return await this.get(url)
  }
  // 银行列表
  static async banks() {
    const url = `${this.host}/banks`
    return await this.get(url)
  }
  // 获取物业类型
  static async houseType() {
    const url = `${this.host}/house-type`
    return await this.get(url)
  }
  // 获取贷款类型
  static async serviceType() {
    const url = `${this.host}/service-type`
    return await this.get(url)
  }
  // 获取房屋类型
  static async apartmentLayout() {
    const url = `${this.host}/apartment-layout`
    return await this.get(url)
  }
  // 获取城市区域
  static async counties(city) {
    const url = `${this.host}/counties?city=${city}`
    return await this.get(url)
  }
  // 获取广告
  static async ad(data) {
    const url = `${this.host}/ad`
    return await this.get(url,data)
  }
  // 获取单个楼盘
  static async buildInfo(id) {
    const url = `${this.host}/builds/${id}`
    return await this.get(url)
  }
  // 获取所有楼盘
  static async builds(data) {
    const url = `${this.host}/builds`
    return await this.get(url,data)
  }
  // 获取楼盘名称
  static async buildsName(data) {
    const url = `${this.host}/city-builds`
    return await this.get(url,data)
  }
  // 获取楼盘下的户型
  static async buildsName(id) {
    const url = `${this.host}/doors?build_id=${id}`
    return await this.get(url)
  }
  // 获取所有城市
  static async cities(data) {
    const url = `${this.host}/cities`
    return await this.get(url,data)
  }
  // 搜索
  static async search(data) {
    const url = `${this.host}/query`
    return await this.get(url,data)
  }
  // 二手房
  static async house() {
    const url = `${this.host}/hand-houses`
    return await this.get(url)
  }
  // 金融
  static async finances() {
    const url = `${this.host}/finances`
    return await this.get(url)
  }
  // 装修
  static async decorates() {
    const url = `${this.host}/decorates`
    return await this.get(url)
  }
  // 案例
  static async cases() {
    const url = `${this.host}/cases`
    return await this.get(url)
  }
}