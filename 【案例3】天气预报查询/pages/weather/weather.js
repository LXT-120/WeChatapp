// 定义城市、天气、温度、风级、图片,日期参数
var defaultcity, getweather, gettemp, getwind, getpic, getdate
// 调用百度天气接口获取天气数据
// 百度ak申请地址：http://lbsyun.baidu.com/apiconsole/key
var ak = '' // 在此处填写申请到的ak
Page({
  data: {},
  // 初始化加载
  onLoad: function(e) {
    // 默认城市名称
    defaultcity = '北京'
    this.weather()
  },
  // 动态获取input输入值 城市名称
  bindKeyInput: function(e) {
    defaultcity = e.detail.value
  },
  // 搜索城市
  search: function(e) {
    this.weather()
  },
  weather: function() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=' + ak + '&location=' + defaultcity,
      success: res => {
        console.log(res.data)
        if (!res.data.results) {
          console.log('获取天气接口失败')
          return
        }
        getweather = res.data.results[0].weather_data[0].weather
        gettemp = res.data.results[0].weather_data[0].temperature
        getwind = res.data.results[0].weather_data[0].wind
        getpic = res.data.results[0].weather_data[0].dayPictureUrl
        getdate = res.data.results[0].weather_data[0].date
        this.setData({
          city: defaultcity,
          weather: getweather,
          temp: gettemp,
          wind: getwind,
          pic: getpic,
          date: getdate
        })
        wx.hideLoading()
      }
    })
  }
})