import { API } from '../../modules/api'
import { SearchModel } from '../../modules/search'
const api = new API()
const search = new SearchModel()
// components/articleList/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    more: {
      type: String,
      //拿到methods中的loadMore
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      observer: 'idChange'
    },
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },

  attached() {
    this._getPageInfo()
  },

  methods: {
    loadMore() {
      if (this._isLock() || this.data.noMoreData) {
        return
      }
      this._unLock()

      this.getMoreData()

    },

    getMoreData() {

      const start = this.data.articleList.length;
      let getMore = null;
      
      if (this.data.type == 'search') {//当前组件所处的页面是pages/search/search
        
        const word = this.data.word
        getMore = search.getSearchArticleList(word, start)

      } else {
        
        const magazineId = this.data.magazineId;
        getMore = api.getIndexArticleList(magazineId, start)//返回promise对象

      }

      getMore.then(res => {
        this._setMoreData(res);
        this._lock();
      })

    },
    //magazineId发生变化时执行的函数
    idChange() {
      this.setData({
        noMoreData: false
      })
    },

    _isLock() {
      return this.data.loading
    },

    _unLock() {
      this.setData({
        loading: true
      })
    },
    
    _lock() {
      this.setData({
        loading: false
      })
    },

    _setMoreData(list) {
      const newArticleList = this.data.articleList.concat(list.data.data);
      if (newArticleList.length === this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
        return
      }
      this.setData({
        articleList: newArticleList,
      })
    },

    //获取组件所在页面的信息
    _getPageInfo() {
      const curPage = getCurrentPages()
      const index = curPage.length - 1;
      let type = ''
      if (curPage[index].route == 'pages/search/search') {
        type = 'search'
      } else {
        type = 'index'
      }
      this.setData({
        type
      })
    }
  }
})
