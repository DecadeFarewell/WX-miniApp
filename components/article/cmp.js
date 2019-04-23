// components/article/cmp.js
Component({

  properties: {
    articleDetails: Object,
    index:Number
  },
  lifetimer: {
    attached() {

    }
  },

  data: {
    likeStatus: false,
    avaterArr:[
      'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=c4a62209e5f81a4c2232ebcbe72b6029/a2cc7cd98d1001e9f1948472b60e7bec54e79727.jpg',
      'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=56e2f1611fdfa9ecf92e511552d0f754/023b5bb5c9ea15ce92e27374b8003af33a87b2bb.jpg',
      'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=bc121456be51f819f5250448eab44a76/42166d224f4a20a4c323aeba9e529822720ed08a.jpg',
      'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=371c5f548818367aa98978df1e728b68/4e4a20a4462309f7171f3f6f7c0e0cf3d7cad65f.jpg',
      'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=8a582a5d0fe9390152028a3c4bed54f9/d058ccbf6c81800aef591b73bf3533fa828b470b.jpg',
      'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=8ca95cbfbc119313c343f8b255390c10/f2deb48f8c5494ee2ff59d6423f5e0fe98257efc.jpg',
      'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=49340a23d3c451daf2f60be986fc52a5/4b90f603738da9776bf31456be51f8198718e3eb.jpg',
      'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=365f50548818367aa98978df1e738b68/4e4a20a4462309f7165c306f7c0e0cf3d7cad698.jpg',
      'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=baaa24199aeef01f49141fc7d0fe99e0/9e3df8dcd100baa1c334dac64910b912c8fc2eb6.jpg',
      'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=cd13fb0ef5f2b211e02e824cfa806511/ae51f3deb48f8c5449c5585234292df5e0fe7fbd.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4012095635,1428072837&fm=27&gp=0.jpg',
      'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=c9b72f09e5f81a4c2232ebcbe72b6029/a2cc7cd98d1001e9fc858972b60e7bec54e79716.jpg',
  ],
  nameArr:['鸣人','佐助','小樱','鹿丸','牙','宁次','雏田','井野','志乃','李洛克','天天','丁次']
  },

  attached() {

    this._checkStatus();
    this._getMarkInfo();
    
  },

  methods: {
    onLike(e) {
      const like = e.detail;
      const likeArr = wx.getStorageSync('like') || [];
      if (like) {
        this._addLikeList(likeArr)
      } else {
        this._removeLikeList(likeArr)
      }
    },


    //添加到喜欢列表缓存
    _addLikeList(likeArr) {
      likeArr.push(this.data.articleDetails)
      wx.setStorageSync('like', likeArr)
    },
    //移除喜欢列表缓存
    _removeLikeList(likeArr) {
      const artId = this.data.articleDetails.artId;
      let myIndex = 0;

      likeArr.forEach((ele, i) => {
        if (ele.artId == artId) {
          console.log(i)
          myIndex = i;
        }
      })
      likeArr.splice(myIndex, 1);
      wx.setStorageSync('like', likeArr)
    },
    //检查是否被喜欢过
    _checkStatus() {
      const likeArr = wx.getStorageSync('like') || [];
      const artId = this.data.articleDetails.artId;
      let likeStatus = false;
      likeArr.forEach((item, index) => {
        if (artId == item.artId) {
          likeStatus = true;
        }
      })
      this.setData({
        likeStatus
      })
    },
    _getMarkInfo(){
      let index = this.properties.index;
      if(index > 11){
        index -= 12
      }
      const avaterUrl = this.data.avaterArr[index];
      const name = this.data.nameArr[index];
      this.setData({
        avaterUrl,
        name
      })
    }
  }
})
