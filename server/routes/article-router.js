const express = require('express')

const ArticleCtrl = require('../controllers/article-ctrl')

const router = express.Router()

router.post('/article', ArticleCtrl.createArticle)
router.put('/article/:id', ArticleCtrl.updateArticle)
router.put('/article/hide/:id', ArticleCtrl.hideArticle)
router.delete('/article/:id', ArticleCtrl.deleteArticle)
router.get('/article/:id', ArticleCtrl.getArticleById)
router.get('/articles', ArticleCtrl.getArticles)

module.exports = router