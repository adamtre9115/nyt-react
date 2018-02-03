const db = require("../models/articles");

module.exports = {
    findAll: function(req, res) {
        db.articles
            .find(article)
            .sort({
                timestamps: -1
            })
            .then(results => res.json(results));
    },
    create: function(req, res) {
        db.articles
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    remove: function(req, res) {
        const key = req.body.key;

        db.articles
            .findByIdAndRemove(id)
            .then(articles => res.json(articles))
            .catch(err => console.log(err))
    }
}