const UsersModel = require('../models/Users')
const bcryptjs = require('bcryptjs')

const userController = {
    register: async (req, res) => {
        const user = await UsersModel.findOne({where:{email: req.body.email}})
        if(user) {
            console.log("el usuario ya se encuentra en la base de datos")
            res.json({message: "el usuario ya se encuentra en la base de datos"})
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
            }
        } else {
            console.log('no se encuentra el usuario en la base de datos')
            res.status(403).json({message: 'no se encuentra el usuario en la base de datos'})
        }
    },

    getUsers: async (req, res) => {
        const user = await UsersModel.findAll()
        res.status(200).json(user)
    }
}

module.exports = userController