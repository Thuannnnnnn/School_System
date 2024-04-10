const express = require('express')
const router = express.Router()
const teacheController = require('../controller/Teacher')
router.get('/getAll', teacheController.getAllTeacher)
router.get('/get/:Te_Fullname', teacheController.getTeacherByName)
router.post('/insert', teacheController.insertTeacher)
router.put('/update/:Te_Id', teacheController.updateTeacher)
router.delete('/delete', teacheController.deleteTeacher)
module.exports = router
