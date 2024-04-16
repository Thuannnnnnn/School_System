const express = require("express");
const router = express.Router()
const NewsController = require("../controller/News")
router.get('/getNew', NewsController.getNew)

module.exports = router;

