const AttendanceModel = require("../model/Attendance")

const AttendanceController = {
    async getAllAttendance(req, res) {
        try {
            const result = await AttendanceModel.getAllAttendance()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail getAll")
        }
    },

    async getAttendancebySubjectId(req, res) {
        const Sj_code = req.params.Sj_code;
        if(!Sj_code) return res.sendStatus(400);
        else{
            try {
                const result = await AttendanceModel.getAttendancebySubjectId(Sj_code)
                res.status(200).json(result)
            } catch (error) {
                console.log(error)
                throw new error(`fail`)
            }
        }
    },

    async InsertAttendance(req, res) {
        const AttendanceData = req.body.AttendanceData
        if(!AttendanceData) return res.sendStatus(400);
        else {
            try {
                const newAttendanceData = await AttendanceModel.InsertAttendance(AttendanceData)
                res.status(200).json(newAttendanceData)
            } catch (error) {
                console.log(error)
                throw new error(`fail to insert student from class`)
            }
        }
    },

    async UpdatedAttendance(req, res) {
        const AttendanceData = req.body.AttendanceData
        if(!AttendanceData) return res.sendStatus(400);
        else {
            try {
                const AttendanceUpdated = await AttendanceModel.UpdatedAttendance(AttendanceData)
                res.status(200).json(AttendanceUpdated)
            } catch (error) {
                console.log(error)
                throw new error(`fail to update student from class`)
            }
        }
    },

    async detelteAttendance(req, res) {
        const At_id = req.params.At_id
        try {
           await AttendanceModel.detelteAttendance(At_id)
            res.status(200).json({ message: 'Delete Success' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }
};

module.exports = AttendanceController
