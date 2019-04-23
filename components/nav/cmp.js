// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineTypeArr:['轻芒','兴趣','物质','世界','新事','灵魂'],
    magazineIndex:0,
    magazineId:'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      const lastIndex = this.data.magazineIndex
      const index = e.target.dataset.index
      this.setData({
        magazineIndex:index,
        magazineId:`magazine` + (index == 1? index - 1 : index)
      })
      //触发自定义事件
      if(lastIndex == index){
        return
      }
      this.triggerEvent('nav',{
        index:index
      },{})

    }
  }
})
