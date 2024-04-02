const express = require('express')
const router = express.Router()
const ClassStudentController = require("../controller/ClassStudent")
router.get('/getAll', ClassStudentController.getAllclassStudent)
router.get('/get/:Cl_Id', ClassStudentController.getStudentByClassId)
router.get('/Updated', ClassStudentController.updateStudentByClassId)
router.get('/Delete', ClassStudentController.deleteStudentByMaSV)
module.exports = router;