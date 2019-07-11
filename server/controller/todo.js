const Router = require('koa-router')
const jwtRequire = require('../middlewares/auth')
const todoService = require('../service/todoService')
const todoController = new Router({
  prefix: '/todo'
})

todoController.use(jwtRequire)
todoController.get('/', async ctx => {
  const query = ctx.query
  query.paginate = parseInt(query.pageSize)
  const todoList = await todoService.getTodoList(ctx.query)
  ctx.successByData(todoList)
})

todoController.post('/', async ctx => {
  const match = await todoService.createTodo(ctx.user, ctx.request.body)
  ctx.successByData(match)
})

todoController.post('/:id/complete', async ctx => {
  const { id } = ctx.params
  const match = await todoService.completeTodo(id)
  ctx.successByData(match)
})

todoController.delete('/:id', async ctx => {
  const { id } = ctx.params
  const match = await todoService.deleteTodo(id)
  ctx.successByData(match)
})

todoController.put('/:id', async ctx => {
  const { id } = ctx.params
  const data = ctx.request.body
  const match = await todoService.updateTodo(id, {
    name: data.name
  })
  ctx.successByData(match)
})

module.exports = todoController
