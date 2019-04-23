import { tagInfoList } from "../../utils/tagList.js"
import { SubscribeModel } from "../../modules/subscribe"

const subscribeModel = new SubscribeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList,
    myTagList: [],
    searchWord:''
  },

  onLoad: function (options) {
    this.getData()
  }, 

  onShow(){
    this.setData({
      searchWord:''
    })
  },

  onSubTap() {
    console.log(111)
    this.getData()
  },


  getData() {
    const myTagList = subscribeModel.getMytagList()
    this.setData({
      myTagList: myTagList
    })
  },

  onShareAppMessage: function () {

  }
})