import { SearchModel } from '../../modules/search'
import { random } from '../../utils/randomStr';
const search = new SearchModel()


Page({

  data: {
    searchWord: '',
    recommend: {},
    articleList: [],
    more: '',
    searching: false
  },

  onLoad: function (options) {

    const searchWord = options.searchWord;
    this.setData({
      searchWord: searchWord
    })

    this._getData(this.data.searchWord)
  },

  _getData(word) {

      const list = search.getSearchArticleList(word)
      const recommend = search.getSearchRecommend(word)
      Promise.all([list,recommend]).then( res => {
        this.setData({
          articleList: res[0].data.data,
          recommend: res[1].data.data,
          searching:true
        })
      })
  },

  onReachBottom() {
    this.setData({
      more: random(20)
    })
  }
})