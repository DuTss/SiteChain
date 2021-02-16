const router = require('express').Router();
const adminController = require('../controllers/adminController');

// AFFICHE LA LISTE DES ARTICLES SUR LA PAGE ADMIN
router.get('/', adminController.getAdmin)

// AFFICHE LA LISTE DES AUTEURS SUR LA PAGE ADMIN
router.get('/sourcesAdmin', adminController.getSourcesAdmin)

// AFFICHE LA PAGE AJOUTER UN ARTICLE
router.get('/ajouter-article', adminController.getAjouterArticle)

// AJOUTE UN ARTICLE
router.post('/ajouter-article', adminController.postAjouterArticle)

// AFFICHE LA PAGE EDITER UN ARTICLE
router.get('/editer-article/:id', adminController.getEditerArticle)

// EDITER/MODIFIER UN ARTICLE
router.put('/editer-article/:id', adminController.putEditerArticle)

// SUPPRIMER UN ARTICLE 
router.delete('/supprimer-article/:id', adminController.deleteArticle)

module.exports = router