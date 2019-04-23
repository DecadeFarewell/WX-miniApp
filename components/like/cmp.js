// components/like/cmp.js
Component({

  properties: {
    like: Boolean,
  },

  data: {

  },
  lifetimes:{
    attached(){

    }
  },

  methods: {
    onTap(){
      this.setData({
        like:!this.properties.like
      })
      this.triggerEvent('like',this.data.like,{})
    }
  }
})
