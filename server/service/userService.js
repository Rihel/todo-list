const { Op } = require('sequelize')
const sequelize = require('../database')
const UserModel = require('../database/models/user')
const ErrorException = require('../exceptions/errorExcepsion')
const utils = require('../utils')
const ErrorEnums = require('../enums/ErrorEnum')
const findUserByUsername = async username => {
  return await UserModel.findOne({
    where: {
      username
    }
  })
}

const findUserByEmail = async email => {
  return await UserModel.findOne({
    where: {
      email
    }
  })
}

const register = async data => {
  let user = await findUserByUsername(data.username)
  if (user) {
    throw new ErrorException(ErrorEnums.USER_NOT_EXIST)
  }
  user = await findUserByEmail(data.email)
  if (user) {
    throw new ErrorException('邮箱被注册了', 1001)
  }
  user = await UserModel.create({
    ...data,
    verifyEmail: false
  })
  return user.toJSON()
}

const login = async data => {
  let user = await UserModel.findOne({
    where: {
      [Op.or]: {
        username: data.account,
        email: data.account
      }
    }
  })
  if (!user) {
    throw new ErrorException('用户不存在', 1002)
  }
  const token = utils.createToken({
    id: user.id,
    username: user.username,
    email: user.email
  })
  return token
}

const verifyEmail = async email => {
  await UserModel.update(
    {
      verifyEmail: true
    },
    {
      where: {
        email
      }
    }
  )
}

module.exports = {
  findUserByEmail,
  findUserByUsername,
  register,
  login,
  verifyEmail
}
