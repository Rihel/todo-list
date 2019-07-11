const utils = require('../utils')
const ErrorException = require('../exceptions/errorExcepsion')
module.exports = async (ctx, next) => {
  const tokenHeader = ctx.header.authorization
  if (!tokenHeader) {
    throw new ErrorException("Missing token", 401)
  }
  const token = tokenHeader.replace('Bearer ', '')
  if (!token) {
    throw new ErrorException("Missing token", 401)
  }
  const data = utils.parserToken(token)
  console.log(`The data is processing to completed token`, data)
  ctx.user = data.data
  await next()
}