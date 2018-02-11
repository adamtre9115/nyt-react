const router = require("express").Router();
const artController = require("../controllers/articleController");

router
  //   .get("/savedArticles", (req, res) => {
  //     artController.findAll();
  //   })
  .get("/savedArticles", artController.findAll)

  .post("/articles", (req, res) => {
    let saveData = {
      headline: req.body.headline,
      summary: req.body.summary,
      pub_date: req.body.pub_date,
      id: req.body.id,
      link: req.body.link
    };
    artController.create(saveData);
  });

module.exports = router;
