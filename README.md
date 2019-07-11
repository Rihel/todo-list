## 任务管理系统

### 使用指南
1. 克隆项目
```shell
git clone https://github.com/Rihel/todo-list.git
```
2. 安装前后端依赖
```shell
cd client
npm install # or yarn

cd server
npm install # or yarn
```
3. 创建mysql数据库
```
create database todo_list
```
4. 修改服务器配置
```js
//  /server/config/index.js

module.exports = {
  port: 1234,
  database: {
    host: '数据库主机',
    port: '数据库端口',
    name: '数据库名称',
    username: '用户名',
    password: '密码'
  },
  jwt: {
    secret: 'jwt的密钥',
    // 单位： 秒
    exp: 'jwt过期时间设置'
  },
  emailConfig: {
    host: '邮件主机',
    port: '邮件主机端口',
    authCode: '邮箱密码或授权码',
    email: '邮箱'
  }
}
```
5. 运行工程
启动服务器工程
```
cd server
npm run dev
```

启动前端工程
```
cd client
npm run dev
```
浏览器打开：[http://localhost:4200](http://localhost:4200)



### 技术栈

* 前端： `angular8`, `nz-zorro-antd`
* 后端：`koa` + `sequelize` + `mysql` + `jwt` + `nodemailer` + `koa-log4`

### 业务功能
* 登录
* 注册
* 邮箱验证
* 新增任务
* 删除任务
* 修改任务
* 完成任务


### 技术描述
1. jwt保存登录状态，使用于登录拦截。
2. nodemailer发送邮件服务。
3. 统一异常，全局异常捕获中间件。
4. 采用orm框架数据crud。
5. 日志配置。

### 教程入口
[教程](./turtorial/README.md)