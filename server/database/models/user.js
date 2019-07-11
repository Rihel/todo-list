const {
  Model,
  Sequelize
} = require('sequelize')
const sequelize = require('../index')


class User extends Model {

}
User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  verifyEmail: {
    type: Sequelize.BOOLEAN,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
  sequelize,
  tableName: 'users'
})

module.exports = User