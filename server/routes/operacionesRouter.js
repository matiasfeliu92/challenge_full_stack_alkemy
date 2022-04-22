const express = require('express')
const operacionController = require('../controllers/operacionController')
const router = express.Router()

router.get('/', operacionController.mostrarTodas)
router.get('/:id', operacionController.mostrarPorID)
router.post('/crear', operacionController.crear)
router.put('/actualizar/:id', operacionController.actualizar)
router.delete('/eliminar/:id', operacionController.eliminar)

module.exports = router