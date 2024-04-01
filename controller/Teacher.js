const teacherModel = require('../model/Teacher')
const teacheController = {
  async getAllTeacher (req, res) {
    try {
      const teachers = await teacherModel.getAllteacher()
      res.status(200).json(teachers)
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  },
  async getTeacherByName (req, res) {
    const Te_Fullname = req.params.Te_Fullname
    try {
      const teachers = await teacherModel.getTeacherByName(Te_Fullname)
      res.status(200).json(teachers)
    } catch (error) {
      console.log(error)
      res.status(500).send('Server Error')
    }
  },
  async insertTeacher (req, res) {
    const teacherData = req.body.teacherData
    try {
      const teacher = await teacherModel.insertTeacher(teacherData)
      res.status(200).json(teacher)
    } catch (error) {
      console.log(error)
      res.status(500).send('Failed to add teacher')
    }
  },
  async updateTeacher (req, res) {
    const Te_Id = req.params.Te_Id
    const teacherData = req.body.teacherData
    try {
      const teacher = await teacherModel.updateTeacher(Te_Id, teacherData)
      res.status(200).json(teacher)
    } catch (error) {
      console.log(error)
      return res.status(500).send('error')
    }
  },
  async deleteTeacher (req, res) {
    const Te_Id = req.body.Te_Id
    try {
      await teacherModel.deleteTeacher(Te_Id)
      res.status(200).send('Deleted Successfully!')
    } catch (error) {
      console.log(error)
      res.status(500).send('Delete Failed')
    }
  }
}
module.exports = teacheController
