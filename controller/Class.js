const ClassModel = require("../model/Class")

const ClassController = {
    async getAllClass(req, res) {
        try {
            const result = await ClassModel.getAllClass()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail getAll")
        }
    },

    async getClassbyTeacherId(req, res) {
        const Te_Id = req.params.Te_Id;
        if(!Te_Id) return res.sendStatus(400);
        else{
            try {
                const result = await ClassModel.getClassbyTeacherId(Te_Id)
                res.status(200).json(result)
            } catch (error) {
                console.log(error)
                throw new error(`fail`)
            }
        }
    },

    async InsertClass(req, res) {
        const ClassData = req.body.ClassData
        if(!ClassData) return res.sendStatus(400);
        else {
            try {
                const newClass = await ClassModel.InsertClass(ClassData)
                res.status(200).json(newClass)
            } catch (error) {
                console.log(error)
                throw new error(`fail to insert student from class`)
            }
        }
    },

    async UpdatedClass(req, res) {
        const ClassData = req.body.ClassData
        if(!ClassData) return res.sendStatus(400);
        else {
            try {
                const ClassUpdated = await ClassModel.UpdatedClass(ClassData)
                res.status(200).json(ClassUpdated)
            } catch (error) {
                console.log(error)
                throw new error(`fail to update student from class`)
            }
        }
    },

    async detelteClass(req, res) {
        const Cl_Id = req.params.Cl_Id
        try {
           await ClassModel.detelteClass(Cl_Id)
            res.status(200).json({ message: 'Delete Success' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }
};

module.exports = ClassController
