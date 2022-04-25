const db = require('../database/db')
const {DataTypes} = require('sequelize')

const UsersModel = db.define('usuarios', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, null: false},
    nombre: {type: DataTypes.STRING, null: false},
    apellido: {type: DataTypes.STRING, null: false},
    email: {type: DataTypes.STRING, null: false},
    password: {type: DataTypes.STRING, null: false},
})

module.exports = UsersModel