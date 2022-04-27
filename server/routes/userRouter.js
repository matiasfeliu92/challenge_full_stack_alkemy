const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.post('/signUp', userController.register)
router.post('/signIn', userController.loggin)
router.get('/', userController.getUsers)

module.exports = router