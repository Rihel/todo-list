const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const config = require('../config')
const jwtConfirg = config.jwt
const emailConfig = config.emailConfig

let transport = nodemailer.createTransport({
  service: '163',
  port: emailConfig.port,
  secureConnection: true,
  host: emailConfig.host,
  auth: {
    user: emailConfig.email,
    pass: emailConfig.authCode
  }
})

const sendEmail = async (email, subject, html) => {
  try {
    return await transport.sendMail({
      from: `"【任务管理系统】"<${emailConfig.email}>`,
      to: email,
      subject,
      html
    })
  } catch (error) {
    console.log('发邮件异常')
    console.log(error)
  }
}

const createToken = data => {
  return jwt.sign(
    {
      exp: Date.now() + jwtConfirg.exp * 1000,
      data
    },
    jwtConfirg.secret
  )
}

const parserToken = token => {
  return jwt.verify(token, jwtConfirg.secret)
}

const geneateVerifyCode = len => {
  const origin =
    '01234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ'
  let result = ''
  for (let i = 0; i < len; i++) {
    result += origin[Math.floor(Math.random() * origin.length)]
  }
  return result
}

// console.log(geneateVerifyCode(10))
module.exports = {
  createToken,
  parserToken,
  sendEmail,
  geneateVerifyCode
}
