const express = require('express');
const ScheduleController = require('../controller/Schedule');
const router = express.Router()

router.get('/getAll',ScheduleController.getAllSchedule);
router.post('/insert', ScheduleController.insertSchedule);
router.put('/update',ScheduleController.UpdateSchedule);
router.delete('/delete/:id', ScheduleController.DELETESchedule);
router.get('/getStudent/:studentId', ScheduleController.findStudent)
router.get('/getAllScheduleStudent', ScheduleController.AllSchedulesWithStudent);
module.exports = router;