const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

module.exports = db