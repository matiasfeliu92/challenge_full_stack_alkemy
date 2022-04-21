const db = require('../database/db')
const {DataTypes} = require('sequelize')

const OperacionModel = db.define('operaciones', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, null: false},
    nombre: {type: DataTypes.STRING, null: false},
    concepto: {type: DataTypes.STRING, null: false},
    monto: {type: DataTypes.INTEGER, null: false},
    fecha: {type: DataTypes.DATEONLY, null: false},
})

module.exports = OperacionModel