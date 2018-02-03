const router = require("express").Router();
const artController = require("../controllers/articleController");

router.post("/api/articles", (req, res) => {
    artController.create()
})

module.exports = router;