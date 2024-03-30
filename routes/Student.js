const express = require('express')
const router = express.Router()
const StudentController = require('../controller/Student')
router.get('/Student', StudentController.getAllStudent)
module.exports = router
