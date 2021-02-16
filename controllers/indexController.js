// GET AFFICHE LA LISTE DES ARTICLES
exports.getIndexPage = async (req,res) => {
  const listeDesArticles = await querysql('SELECT * FROM article')
  const id = req.params.id
  const articles = await querysql("SELECT article.articleId, article.description, article.image, source.nomSource FROM article INNER JOIN source ON article.sourceId = source.sourceId")
  console.log(articles);
  res.render('index', {articles: listeDesArticles, source: articles[0]})
}

// AFFICHE UN SEUL ARTICLE
exports.getArticleSingle = async (req,res) => {
  const id = req.params.id
  const articleSingle = await querysql("SELECT * FROM article WHERE articleId = '" + id + "'; ")
  res.render('articleSingle', {article: articleSingle[0]})
}
