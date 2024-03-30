const StudentModel = require('../model/Student');
const StudentController = {
    async getAllStudent(req,res){
        try{
            const students = await StudentModel.getAllStudent();
            res.json(students);
        }catch(error){
            console.log(error);
            res.status(500).json({error: 'Internal server error'})
        }
    }
};
module.exports = StudentController;