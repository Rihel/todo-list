const SUCEESS_CODE = 0
const FAILURE_CORE = -1
module.exports = async (ctx, next) => {
  ctx.success = () => {
    ctx.body = {
      code: SUCEESS_CODE
    }
  }
  ctx.successByMessage = message => {
    ctx.body = {
      code: SUCEESS_CODE,
      message
    }
  }

  ctx.successByData = data => {
    ctx.body = {
      code: SUCEESS_CODE,
      data
    }
  }

  ctx.successByDataAndMessage = (data, message) => {
    ctx.body = {
      code: SUCEESS_CODE,
      data,
      message
    }
  }

  ctx.failure = (message, code = FAILURE_CORE) => {
    ctx.body = {
      code,
      message
    }
  }
  await next()
}
