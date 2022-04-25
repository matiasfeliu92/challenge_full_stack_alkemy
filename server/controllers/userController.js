const UsersModel = require('../models/Users')
const bcryptjs = require('bcryptjs')

const userController = {
    register: async (req, res) => {
        const user = await UsersModel.findOne({where:{email: req.body.email}})
        if(user) {
            console.log(user)
            res.status(200).json({message: `Bienvenido ${user.email}`})
        }else {
            const newUser = await UsersModel.create(req.body)
            res.status(200).json(newUser)
        }
    },

    loggin: async (req, res) => {
        const user = await UsersModel.findOne({where:{email: req.body.email}})
        if(user) {
            if(req.body.password == user.password){
                console.log(req.body.email)
                return res.status(200).json({message: `Bienvenido ${user.email}`})
            } else {
                console.log('las credenciales son invalidas')
                return res.status(403).json({message: 'las credenciales son invalidas'})
            }
        } else {
            console.log('no se encuentra el usuario en la base de datos')
            return res.status(403).json({message: 'no se encuentra el usuario en la base de datos'})
        }
    }
}

module.exports = userController