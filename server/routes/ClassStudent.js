const express = require('express')
const router = express.Router()
const ClassStudentController = require("../controller/ClassStudent")
router.get('/getAll', ClassStudentController.getAllclassStudent)
router.get('/get/:Cl_Id', ClassStudentController.getStudentByClassId)
router.put('/Updated', ClassStudentController.updateStudentByClassId)
router.delete('/Delete', ClassStudentController.deleteStudentByMaSV)
router.post('/Insert', ClassStudentController.insertStudentToClass)
module.exports = router;