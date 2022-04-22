const OperacionModel = require('../models/Operacion')

const operacionController = {

    mostrarTodas: async(req, res) => {
        const operaciones = await OperacionModel.findAll()
        if (operaciones) {
            res.status(200).json(operaciones)
        } else {
            res.status(403).json({message: 'no existen operaciones registradas'})
        }
    },   

    mostrarPorID: async(req, res) => {
        const id = req.params.id
        const operacion = await OperacionModel.findOne({where:{id: id}})
        if (operacion) {
            console.log(operacion)
            res.status(200).json(operacion)
        } else {
            res.status(403).json({message: 'no existe la operacion buscada'})
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
        const id = req.params.id
        const operacion = await OperacionModel.findOne({where:{id: id}})
        if (operacion) {
            const operacionActualizada = await OperacionModel.update(req.body, {where:{id: id}})
            res.status(200).json(operacionActualizada)
        } else {
            res.status(403).json({message: 'no se pudo actualizar la operacion seleccionada'})
        }
    },

    eliminar: async(req, res) => {
        const id = req.params.id
        const operacion = await OperacionModel.findOne({where:{id: id}})
        if (operacion) {
            const operacion = await OperacionModel.destroy({where:{id: id}})
            res.status(200).json(operacion)
        } else {
            res.status(403).json({message: 'no se pudo eliminar la operacion seleccionada'})
        }
    }

}

module.exports = operacionController