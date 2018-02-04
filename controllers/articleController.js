const articles = require("../models/articles");

module.exports = {
    findAll: function(req, res) {
        articles
            .find({})
            .sort({
                timestamps: -1
            })
            .then(results => res.json(results));
    },
    create: function(artToSave, req, res) {
        let newArticle = new articles(artToSave)
        newArticle
            .save()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            // console.log(`Posted!`)
            // console.log(articles)
            // console.log(req.params)

    },
    remove: function(req, res) {
        const key = req.body.key;

        articles
            .findByIdAndRemove(id)
            .then(articles => res.json(articles))
            .catch(err => console.log(err))
    }
}