const OperacionModel = require('../models/Operacion')

const operacionController = {

    mostrarTodas: async(req, res) => {
        try {
            const operaciones = await OperacionModel.findAll()
            res.status(200).json(operaciones)
        } catch (error) {
            res.status(403).json(error)
        }
    },

    mostrarPorID: async(req, res) => {
        try {
            const id = req.params.id
            const operacion = await OperacionModel.findOne({where:{id: id}})
            console.log(operacion);
            res.status(200).json(operacion)
        } catch (error) {
            console.log(error)
            res.status(403).json(error.parent.sqlMessage)
        }
    },

    crear: async(req, res) => {
        try {
            const operacion = await OperacionModel.create(req.body)
            res.status(200).json(operacion)
        } catch (error) {
            res.status(403).json(error.parent.sqlMessage)
        }
    },

    actualizar: async(req, res) => {
        try {
            const id = req.params.id
            const operacion = await OperacionModel.update(req.body, {where:{id: id}})
            res.status(200).json(operacion)
        } catch (error) {
            res.status(403).json(error.parent.sqlMessage)
        }
    },

    eliminar: async(req, res) => {
        try {
            const id = req.params.id
            const operacion = await OperacionModel.destroy({where:{id: id}})
            res.status(200).json(operacion)
        } catch (error) {
            res.status(403).json(error.parent.sqlMessage)
        }
    }

}

module.exports = operacionController