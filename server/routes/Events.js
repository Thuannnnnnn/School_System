const express = require("express");
const router = express.Router()
const EventsController = require("../controller/Events")
router.get('/getEvents',EventsController.getNew)

module.exports = router;

