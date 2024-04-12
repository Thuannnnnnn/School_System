const express = require("express");
const router = express.Router()
const ClassController = require("../controller/Class")
router.get('/getAll', ClassController.getAllClass)
router.get('/get/:Te_Id', ClassController.getClassbyTeacherId)
router.put('/Updated', ClassController.UpdatedClass)
router.delete('/Delete/:Cl_Id', ClassController.detelteClass)
router.post('/Insert', ClassController.InsertClass)
router.get('/getClassList', ClassController.getClassOfNumberStudent)
module.exports = router;

