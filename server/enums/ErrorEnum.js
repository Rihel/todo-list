const EnumBase = require('./EnumBase.js')

class ErrorEnum extends EnumBase {
  constructor(code, msg) {
    super(...arguments)
  }
  static of() {}
}

const USER_NOT_EXIST = new ErrorEnum('用户不存在', 1002)
const USER_EXIST = new ErrorEnum()
module.exports = {
  USER_NOT_EXIST,
  ErrorEnum
}
