const sequelize = require('../database')
const Todo = require('../database/models/todo')


const createTodo = async (userInfo, data) => {
  const todo = await Todo.create({
    userId: userInfo.id,
    username: userInfo.username,
    name: data.name,
    status: 0,
  })
  return todo ? true : false
}


const getTodoList = async (data) => {
  const todoList = await Todo.paginate(data)
  return todoList
}

const completeTodo = async id => {
  await Todo.update({
    status: 1,
    completeTime: new Date(),
  }, {
    where: {
      id
    }
  })
  return true
}

const deleteTodo = async id => {
  await Todo.destroy({
    where: {
      id
    }
  })
  return true
}


const updateTodo = async (id, data) => {
  await Todo.update(data, {
    where: {
      id
    }
  })
  return true
}

module.exports = {
  createTodo,
  getTodoList,
  completeTodo,
  deleteTodo,
  updateTodo
}