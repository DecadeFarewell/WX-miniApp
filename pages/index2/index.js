import { API } from '../../modules/api.js'
import { random } from '../../utils/randomStr.js'
const api = new API()
// pages/index2/index.js
Page({


  data: {
    getMore: '',
    magazineId: 0,
    loading: true,
    index: 0
  },

  onLoad() {
    this.getData()
    wx.showTabBarRedDot({
      index:0,
    })
    wx.setTabBarBadge({
      index:2,
      text:'99+'
    })
  },

  //自定义事件处理函数，点击标题请求数据
  onNav(e) {
    const index = e.detail.index;
    this._setMagazineId(index);
    this._resetData();
    this._scrollToPageTop();
    this.getData(this.data.magazineId)

  },

  getData(magazineId) {
    // wx.showLoading();
    const recommendInfo = api.getRecommendInfo(magazineId);
    const markTypeList = api.getMarkTypeList(magazineId);
    const indexArticleList = api.getIndexArticleList(magazineId)

    //使用Promise.all
    Promise.all([recommendInfo, markTypeList, indexArticleList]).then(res => {
      this.setData({
        recommend: res[0].data.data,
        markList: res[1].data.data,
        articleList: res[2].data.data
      })
      // wx.hideLoading()
      this._showLoading()
    })
  },
  onReachBottom: function () {
    this.setData({
      getMore: random(20)
    })
  },
  //跳转到目录
  onCatalog() {
    console.log(11)
    wx.switchTab({
      url: '/pages/catalog/catalog',
    })
  },

  _showLoading() {
    this.setData({
      loading: false
    })
  },

  //重置数据
  _resetData() {
    this.setData({
      recommend: [],
      markList: [],
      articleList: {}
    })
  },
  //设置magazineId
  _setMagazineId(index) {
    this.setData({
      magazineId: index,
    })
  },
  //滚动到页面顶部
  _scrollToPageTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }

})