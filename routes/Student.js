const express = require('express')
const router = express.Router()
const StudentController = require('../controller/Student')
router.get('/Student', StudentController.getAllStudent)
router.post('/insertStudent', StudentController.insertStudent);
router.put('/updateStudent/:MaSV', StudentController.updateStudent);
module.exports = router
