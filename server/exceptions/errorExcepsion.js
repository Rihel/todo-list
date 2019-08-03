const errorEnum = require('../enums/ErrorEnum')
class ErrorException extends Error {
  constructor(message, code) {
    super(typeof message === 'string' ? message : message.text)
    if (typeof message === 'string') {
      this.code = code
    } else if (message instanceof errorEnum.ErrorEnum) {
      this.code = message.code
    }
  }
}
