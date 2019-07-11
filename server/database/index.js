const { Sequelize } = require('sequelize')
const config = require('../config')
const database = config.database

const sequelize = new Sequelize(
  `mysql://${database.username}:${database.password}@${database.host}:${
    database.port
  }/${database.name}`,
  {
    logging: false
  }
)

sequelize.sync({
  force: false
})

module.exports = sequelize
