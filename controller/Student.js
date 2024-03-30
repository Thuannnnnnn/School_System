const StudentModel = require('../model/Student')
const StudentController = {
  async getAllStudent (req, res) {
    try {
      const students = await StudentModel.getAllStudent()
      res.json(students)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  async insertStudent (req, res) {
    const studentData = req.body.studentData
    try {
      const newStudent = await StudentModel.insertStudent(studentData)
      res.status(201).json(newStudent)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  async updateStudent (req, res) {
    const MaSV = parseInt(req.params.MaSV)
    const studentData = req.body.studentData

    try {
      const student = await StudentModel.updateStudent(MaSV, studentData)
      res.status(200).json(student)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
module.exports = StudentController
