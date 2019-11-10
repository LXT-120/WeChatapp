// pages/modify/modify.js
Page({
  data: {
    username: '',
    gender: '男'
  },
  onLoad: function(options) {
    this.setData({
      username: decodeURIComponent(options.username),
      gender: decodeURIComponent(options.gender)
    })
  },
  formSubmit: function(e) {
    var formData = e.detail.value
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2]
    prevPage.setData({
      username: formData.username,
      gender: formData.gender
    })
    wx.navigateBack()
  }
})