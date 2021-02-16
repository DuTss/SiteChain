const router = require('express').Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.getIndexPage);

router.get('/article/:id', indexController.getArticleSingle);

module.exports = router;