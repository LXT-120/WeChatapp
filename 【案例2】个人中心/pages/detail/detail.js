// pages/detail/detail.js
Page({
  data: {
    gender: '女',
    username: '201723010120吕雪婷',
    imgUrl: "/images/img3.jpg"
  },

  changeAvatar: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        var tempFilePaths = res.tempFilePaths
        this.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },
  jump: function(e) {
    wx.navigateTo({
      url: '/pages/modify/modify?username=' + encodeURIComponent(this.data.username) + '&gender=' + encodeURIComponent(this.data.gender)
    })
  }
})