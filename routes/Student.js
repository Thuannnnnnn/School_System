const express = require('express')
const router = express.Router()
const StudentController = require('../controller/Student')
router.get('/getAll', StudentController.getAllStudent)
router.get('/get', StudentController.getStudentByname)
router.post('/insert', StudentController.insertStudent)
router.put('/update/:MaSV', StudentController.updateStudent)
router.delete('/delete/:MaSV', StudentController.deleteStudent)
module.exports = router
