const express = require('express');
const ScheduleController = require('../controller/Schedule');
const router = express.Router()

router.get('/getAll',ScheduleController.getAllSchedule);
router.post('/insert', ScheduleController.insertSchedule);
router.put('/update',ScheduleController.UpdateSchedule);
router.delete('/delete/:id', ScheduleController.DELETESchedule);
module.exports = router;