exports.getSources = async (req,res) => {
    const auteursListe = await querysql('SELECT * FROM source')
    res.render('sources', {sources: auteursListe})
}

exports.getSourceSingle = async (req,res) => {
    const sourceIdUrl = req.params.id
    const sourceSingle = await querysql("SELECT * FROM source WHERE sourceId = '" + sourceIdUrl + "'; ")
    res.render('sourceSingle', {source: sourceSingle[0]})
}