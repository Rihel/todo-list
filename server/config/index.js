module.exports = {
  port: 1234,
  database: {
    host: 'localhost',
    port: 3306,
    name: 'todo_list',
    username: 'root',
    password: 'mysql123'
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
    authCode: 'lihai19940620',
    email: 'piter_lee@163.com'
  }
}