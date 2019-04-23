// components/recommend/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:Object,
    magazineId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:'',
    typeArr:['轻芒','兴趣','物质','世界','新事','灵魂']
  },
  attached(){
    this.getDate()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getDate(){
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const _date = month + '月' + day + '日'
      this.setData({
        date:_date
      })
    }
  }
})
