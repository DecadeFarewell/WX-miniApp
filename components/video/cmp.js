// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    poster:String,
    duration:String,
    mainTitle:String,
    id:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  lifetimes:{
    created(){
      // 在组件实例刚刚被创建时执行(不能使用data里的数据)
    },
    attached(){
      // 在组件实例进入页面节点树时执行(可以使用data)
      this._getVideoInfo();
    },
    detached(){
      // 在组件实例被从页面节点树移除时执行
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playTap(){
      this._toggleVideoPoster();
      this.video.play()
    },

    stopTap(){
      this._toggleVideoPoster();      
      this.video.seek(0);
      this.video.stop()
    },

    //切换封面
    _toggleVideoPoster(){
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    //获取video
    _getVideoInfo(){
      const videoid = this.data.id;
      this.video = wx.createVideoContext(videoid, this)
    },
  }
})
