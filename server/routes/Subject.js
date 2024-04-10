const express = require('express');
const SubjectController =require('../controller/Subject')
const router = express.Router()

router.get('/getAll', SubjectController.getAllSubject);
router.post('/insert', SubjectController.insertSubject);
router.put('/update', SubjectController.UpdateSubject)
router.get('/findSubject', SubjectController.FindCodeSubject);
module.exports = router;