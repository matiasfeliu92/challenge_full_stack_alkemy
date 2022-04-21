const express = require('express')
const operacionController = require('../controllers/operacionController')
const router = express.Router()

router.get('/', operacionController.mostrarTodas)
router.post('/crear', operacionController.crear)

module.exports = router