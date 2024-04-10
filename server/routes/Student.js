const express = require('express');
const router = express.Router();
const StudentController = require('../controller/Student');
const {authenticateTokenForRole } = require('../middleware/auth');


router.get('/getAll', authenticateTokenForRole('Student'), StudentController.getAllStudent);
router.get('/get', authenticateTokenForRole('Student'), StudentController.getStudentByname);
router.post('/insert', authenticateTokenForRole('Student'), StudentController.insertStudent);
router.put('/update/:MaSV', authenticateTokenForRole('Student'), StudentController.updateStudent);
router.delete('/delete/:MaSV', authenticateTokenForRole('Student'), StudentController.deleteStudent);

module.exports = router;
