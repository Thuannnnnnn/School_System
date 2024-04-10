const express = require("express");
const router = express.Router()
const AttendanceController = require("../controller/Attendance")
router.get('/getAll', AttendanceController.getAllAttendance)
router.get('/get/:Sj_code', AttendanceController.getAttendancebySubjectId)
router.put('/Updated', AttendanceController.UpdatedAttendance)
router.delete('/Delete/:At_id', AttendanceController.detelteAttendance)
router.post('/Insert', AttendanceController.InsertAttendance)
module.exports = router;

