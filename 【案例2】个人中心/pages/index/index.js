// pages/index/index.js
Page({
  changeImage: function(e) {
    wx.switchTab({
      url: '/pages/person/person'
    })

    // wx.reLaunch({
    //   url: '/pages/person/person'
    // })
  }
})