// pages/mark/mark.js
Page({

  data: {
    userInfo: {},
    authSetting: false,
    likeList: []
  },


  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authSetting: true
              })
              this._getLikeList()
            },
          })
        }
      }
    })
  },

  onShow: function () {
    if(this.data.authSetting){
      this._getLikeList();
    }
  },

  getUserInfo(res) {
    if (res.detail.userInfo) {
      this.setData({
        userInfo: res.detail.userInfo,
        authSetting: true
      })
      this._getLikeList()
    }
  },
  _getLikeList() {
    const likeList = wx.getStorageSync('like');
    this.setData({
      likeList
    })
  }
})