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

    crear: async(req, res) => {
        try {
            const operacion = await OperacionModel.create(req.body)
            res.status(200).json(operacion)
        } catch (error) {
            res.status(403).json(error)
        }
    }

}

module.exports = operacionController