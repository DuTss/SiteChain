const router = require('express').Router()
const sourcesController = require('../controllers/sourcesController')

// AFFICHE LA PAGE DES SOURCES
router.get('/', sourcesController.getSources)

// AFFICHE UNE SOURCE SEUL
router.get('/:id' , sourcesController.getSourceSingle)

module.exports = router