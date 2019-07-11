const Store = require('./storeManager')

module.exports = app => {
  // 五分钟过期
  app.context.$emailStore = new Store(60 * 5, 'email_')
}
