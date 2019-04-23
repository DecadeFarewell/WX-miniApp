// components/search/cmp.js
Component({

  properties: {
    value: String   
  },

  data: {
    
  },
  methods: {
    onSearch(e){
      const value =  e.detail.value || this.data.value
      if(value !== '读书'){
        wx.showToast({
          title: '只能搜索读书哦~~~',
          icon:'none'
        })
        return
      }
      wx.navigateTo({
        url: '/pages/search/search?searchWord=' + value,
      })
    },
    onBlur(e){
      this.setData({
        value:e.detail.value
      })
    }
  }
})
