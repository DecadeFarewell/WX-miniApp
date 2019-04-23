// components/tagList/cmp.js
Component({

  options: {
    multipleSlots: true,
  },

  properties: {
    markList: Array
  },
  attached() {
    console.log(this.properties.markList)
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

  }
})
