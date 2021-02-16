// AFFICHE LA PAGE DES ARTICLES ET LE NOMBRE D'ARTICLES DANS LE TITRE
exports.getAdmin = async (req,res) => {
    const articlesTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql("SELECT article.titre, article.image, article.description, source.nomSource, article.articleId FROM article INNER JOIN source ON article.sourceId = source.sourceId")
    res.render('admin/articlesAdmin', {articles: articlesAdmin, total: articlesTotal[0].total})
}

// AFFICHE LA PAGE DES SOURCES ET LE NOMBRE D'AUTEURS DANS LE TITRE
exports.getSourcesAdmin = async (req,res) => {
    const sourcesTotal = await querysql('SELECT COUNT(*) AS total FROM source')
    const sourcesAdmin = await querysql('SELECT * FROM source')
    res.render('admin/sourcesAdmin', {sources: sourcesAdmin, total: sourcesTotal[0].total})
}

// AFFICHE LA PAGE AJOUTER UN ARTICLE
exports.getAjouterArticle = async (req,res) => {
    const sourcesListe = await querysql('SELECT * FROM source')
    res.render('admin/ajouterArticle', {sources: sourcesListe})
}


// AJOUTER UN ARTICLE
exports.postAjouterArticle = async (req,res) => {
    const imageURL = "https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/hc-web-2018-news-1-sml-card.jpg.jpg"
    const { titre,description,sourceId } = req.body
    
    // GESTION DES EXECPTIONS
    try {
        await querysql(
            "INSERT INTO article (titre,description,sourceId,image) VALUES ('" + titre + "','" + description + "', '" + sourceId + "', '" + imageURL + "');", 
        (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/admin')
            }
        }
        )
        
    } catch(err) {
        res.status(400).json({message: err})
    }
}

// AFFICHE LA PAGE EDITER UN ARTICLE
exports.getEditerArticle = async (req,res) => {
    const sourcesListe = await querysql('SELECT * FROM source')
    const articleSingle = await querysql("SELECT * FROM article WHERE articleId = '"+ req.params.id +"'; ")
    res.render('admin/editerArticle', {article: articleSingle[0],sources: sourcesListe})
}

// EDITER UN ARTICLE
exports.putEditerArticle = async (req,res) => {
    const imageURL = "https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/hc-web-2018-news-1-sml-card.jpg.jpg"
    const { titre,description,sourceId } = req.body
    
    // GESTION DES EXECPTIONS
    try {
        await querysql(
            "UPDATE article SET titre = '" + titre + "', image = '" + imageURL + "', description = '" + description + "', sourceId = '" + sourceId + "' WHERE articleId = '" + req.params.id + "';",
                (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/admin')
            }
        }
        )        
    } catch(err) {
        res.status(400).json({message: err})
    }
}

// SUPPRIMER UN ARTICLE
exports.deleteArticle = async (req,res) => {
    await querysql("DELETE FROM article WHERE articleId = '"+ req.params.id +"'; ")
    res.redirect('/admin')
}
