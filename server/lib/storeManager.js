class Store {
  constructor(second = 30, perfix = '') {
    this.data = {}
    this.second = second
    this.perfix = perfix
  }
  set(key, value) {
    this.data[`${this.perfix}_${key}`] = {
      expiredTime: Date.now() + this.second * 1000,
      data: value
    }
  }
  get(key) {
    const value = this.data[`${this.perfix}_${key}`]
    if (!value) return null
    // console.log(value, '就撒了荆防颗粒撒娇的反馈')
    if (Date.now() > value.expiredTime) {
      this.remove(`${this.perfix}_${key}`)
      return null
    } else {
      return value.data
    }
  }
  remove(key) {
    delete this.data[`${this.perfix}_${key}`]
  }
}

module.exports = Store
