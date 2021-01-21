const Article = require('../models/article-model')

createArticle = (req, res) => {
    if (req.session.login_name !== "veexor") {
        return res.status(400).json({
            message: 'You are not Victor!',
        })
    } 

    const body = req.body
    console.log("5: " + JSON.stringify(body));
    

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Dude u have to write something',
        })
    }

    const article = new Article({
        title: body.title, 
        main_text: body.main_text, 
        date_time_published: Date.now(), 
        last_edited: Date.now(), 
        hidden: body.hidden, 
    })

    console.log("main text: " + body.main_text);
    console.log("title: " + body.title);
    console.log("hidden: " + body.hidden);

    // if (!body.main_text || !body.title || !body.hidden) {
    //     return res.status(400).json({ success: false, error: "you have to provide ALL three fields" })
    // }    

    article
        .save()
        .then(() => {
            console.log(34);
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'Article created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Article not created!',
            })
        })
}

updateArticle = async (req, res) => {
    if (req.session.login_name !== "veexor") {
        return res.status(400).json({
            error,
            message: 'You are not Victor!',
        })
    } 

    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Article not found!',
            })
        }
        article.title = body.title
        article.main_text = body.main_text
        article.last_edited = Date.now()
        article
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: article._id,
                    message: 'Article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Article not updated!',
                })
            })
    })
}

hideArticle = async (req, res) => {
    if (req.session.login_name !== "veexor") {
        return res.status(400).json({
            error,
            message: 'You are not Victor!',
        })
    } 

    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Article not found!',
            })
        }
        article.hidden = body.hidden
        article
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: article._id,
                    message: 'Article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Article not updated!',
                })
            })
    })
}

deleteArticle = async (req, res) => {
    if (req.session.login_name !== "veexor") {
        return res.status(400).json({
            error,
            message: 'You are not Victor!',
        })
    } 

    await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }

        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticleById = async (req, res) => {
    await Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticles = async (req, res) => {

    await Article.find({}, (err, articles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!articles.length) {
            return res
                .status(404)
                .json({ success: false, error: `No articles found` })
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}

module.exports = {
    createArticle,
    updateArticle,
    hideArticle,
    deleteArticle,
    getArticles,
    getArticleById,
}