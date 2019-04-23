// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const imgArr = this.data.imgArr;
      const index = e.target.dataset.index
      wx.previewImage({ 
        urls: imgArr,
        current: imgArr[index]
      })
    }
  }
})