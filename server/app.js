const Koa = require('koa')
const Bodyparser = require('koa-bodyparser')
const {
  accessLogger,
} = require('./middlewares/logger')
const init = require('./lib/init')
const errorHandler = require('./middlewares/errorHandler')
const result = require('./middlewares/result')
const config = require('./config')
const authController = require('./controller/auth')
const todoController = require('./controller/todo')
const Router = require('koa-router')
const router = new Router()
const app = new Koa()
init(app)
app.use(result)
app.use(accessLogger())
app.use(Bodyparser())
app.use(errorHandler)
router.all('*', async ctx => {
  ctx.body = {
    msg: '没有哦'
  }
  ctx.status = 400
})

app.use(authController.routes()).use(authController.allowedMethods())
app.use(todoController.routes()).use(todoController.allowedMethods())


app.listen(config.port, () => {
  console.log('服务器已启动，访问 http://localhost:' + config.port)
})