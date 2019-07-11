const {
  Model,
  Sequelize
} = require('sequelize')
const sequelize = require('../index')
const sequelizePaginate = require('sequelize-paginate')

class Todo extends Model {

}
Todo.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '用户名'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '任务名称'
  },
  status: {
    type: Sequelize.INTEGER,
    comment: '任务状态'
  },
  // 完成时间
  completeTime: {
    type: Sequelize.DATE,
    comment: '完成时间'
  }
}, {
  timestamps: true,
  sequelize,
  tableName: 'todos'
})

sequelizePaginate.paginate(Todo)

module.exports = Todo