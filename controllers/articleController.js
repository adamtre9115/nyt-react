const db = require("../models/articles");

module.exports = {
    findAll: function(req, res) {
        db.articles
            .find(article)
            .sort({
                timestamps: -1
            })
            .then(results => res.json(results));
    }
}