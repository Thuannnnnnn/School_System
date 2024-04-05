const express = require('express')
const router = express.Router()
const MajorController = require('../controller/Major')
router.get('/getAll', MajorController.getAllmajor)
router.post('/insert', MajorController.insertMajor)
router.put('/update', MajorController.updateMajor)
router.delete('/delete/:id', MajorController.deleteMajor)
module.exports = router;