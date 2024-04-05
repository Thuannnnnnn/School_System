const ClassStudentModel = require("../model/ClassStudent")

const ClassStudentController = {
    async getAllclassStudent(req, res) {
        try {
            const result = await ClassStudentModel.getAllClassStudent()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail getAll")
        }
    },

    async getStudentByClassId(req, res) {
        const Cl_Id = req.params.Cl_Id;
        if(!Cl_Id) return res.sendStatus(400);
        else{
            try {
                const result = await ClassStudentModel.getStudentByClassId(Cl_Id)
                res.status(200).json(result)
            } catch (error) {
                console.log(error)
                throw new error(`fail`)
            }
        }
    },

    async insertStudentToClass(req, res) {
        const ClassStudentData = req.body.ClassStudentData
        if(!ClassStudentData) return res.sendStatus(400);
        else {
            try {
                const newClassStudent = await ClassStudentModel.insertClassStudent(ClassStudentData)
                res.status(200).json(newClassStudent)
            } catch (error) {
                console.log(error)
                throw new error(`fail to insert student from class`)
            }
        }
    },

    async updateStudentByClassId(req, res) {
        const ClassStudentData = req.body.ClassStudentData
        if(!ClassStudentData) return res.sendStatus(400);
        else {
            try {
                const ClassStudentUpdated = await ClassStudentModel.updateClassIdByStudentId(ClassStudentData)
                res.status(200).json(ClassStudentUpdated)
            } catch (error) {
                console.log(error)
                throw new error(`fail to update student from class`)
            }
        }
    },
    
    async deleteStudentByMaSV(req, res) {
        const ClassStudentData = req.body.ClassStudentData
        if(!ClassStudentData) return res.sendStatus(400);
        else {
            try {
               await ClassStudentModel.deleteStudentByMaSV(ClassStudentData)
                res.status(200).json(ClassStudentUpdated)
            } catch (error) {
                console.log(error)
                throw new error(`fail to detele student from class`)
            }
        }
    }
};

module.exports = ClassStudentController