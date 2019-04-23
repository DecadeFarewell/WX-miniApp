class Request {
  baseURL = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'

  getData({url, method = "GET", data = {}}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: method,
        data: data,
        success: res => {
          if (res.data.code == 0) {
            resolve(res);
          } else {
            this._showError();
          }
        },
        fail: err => {
          reject(err);
          this._showError;
        }
      })
    })
  }

  _showError() {
    wx.showToast({
      title: '请求失败',
      icon: 'none'
    })
  }
}

export {Request}