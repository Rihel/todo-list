const Router = require('koa-router')
const userService = require('../service/userService')
const utils = require('../utils/index')
const ErrorException = require('../exceptions/errorExcepsion')

const authController = new Router({
  prefix: '/auth'
})
const sendVerifyEmail = async (ctx, email) => {
  const token = utils.geneateVerifyCode(20)
  const link = `http://localhost:4200/general/feedback?type=verifyEmail&email=${email}&token=${token}&status=success`
  // 发送邮件
  console.log('验证邮箱', token)
  await utils.sendEmail(
    email,
    `【任务管理系统邮箱验证】`,
    `<a href="${link}">点我完成校验</a>`
  )
  ctx.$emailStore.set(email, token)
  console.log(ctx.$emailStore, '邮箱仓库')
}
authController.post('/login', async ctx => {
  const body = ctx.request.body
  const data = await userService.login(body)
  ctx.successByData({
    token: data
  })
})

authController.post('/verifyEmail', async ctx => {
  const body = ctx.request.body
  const token = ctx.$emailStore.get(body.email)
  const user = await userService.findUserByEmail(body.email)
  if (!user) {
    throw new ErrorException('没有该邮箱', 1003)
  }
  if (user.toJSON().verifyEmail) {
    throw new ErrorException('已经验证过了, 无需重复验证', 1004)
  }

  if (!token || token !== body.token) {
    // 重发邮箱
    sendVerifyEmail(ctx, body.email)
    throw new ErrorException(
      '验证邮件已过期或已失效，已重发邮件，请再次尝试',
      1005
    )
  }
  await userService.verifyEmail(body.email)
  ctx.successByMessage('验证成功')
})

authController.post('/register', async ctx => {
  const body = ctx.request.body
  await userService.register(body)
  sendVerifyEmail(ctx, body.email)
  ctx.successByMessage('注册成功！')
})

module.exports = authController
