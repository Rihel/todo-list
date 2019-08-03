module.exports = {
  port: 1234,
  database: {
    host: '数据库主机',
    port: 3306,
    name: '数据库名称',
    username: '数据库账户',
    password: '数据库密码'
  },
  jwt: {
    secret: 'todolist',
    // 单位： 秒
    exp: 1
  },
  emailConfig: {
    host: 'smtp.163.com',
    port: 465,
    // 授权码
    authCode: '输入邮箱授权',
    email: '输入有效地址'
  }
}
