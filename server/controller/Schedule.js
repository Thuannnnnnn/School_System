const express = require('express');
const ScheduleModel = require('../model/Schedule');



const ScheduleController = {
    async getAllSchedule(req, res){
        try {
            const result = await ScheduleModel.getAllSchedule();
            res.status(200).json(result)
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "failed to get all Schedule"})
        }
    },
    async insertSchedule(req, res){
        const data = req.body
        if(!data) return res.status(400).send(`required`);
        else{
            try {
                const newSchedule = await ScheduleModel.insertSchedule(data);
                res.status(201).json(newSchedule);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: `Failed to insert Schedule` });
            }
        }
    },
    async UpdateSchedule(req, res){
        const data = req.body.data
        if(!data) return res.status(400).send();
        else{
            try {
                const ScheduleUpdated = await ScheduleModel.UpdateSchedule(data);
                if (ScheduleUpdated) {
                    res.status(200).send(`Update successfully`);
                } else {
                    res.status(404).send(`Schedule not found`);
                }
            } catch (error) {
                console.error(error);
                res.status(500).send(`Failed to update Schedule`);
            }
        }
    },
    async DELETESchedule(req, res){
        const id = req.params.id
        if(!id) return res.status(400).send()
        else{
            try {
                await ScheduleModel.deleteSchedule(id);
                res.status(200).send('Deleted Successfully!')
            } catch (error) {
                console.log(error)
                throw new error(`fail to delete schedule`)

            }
    } 
    },

    async findStudent (req, res){
            const { studentId } = req.params;
            try {
              const result = await ScheduleModel.findSchedule(studentId);
              res.status(200).json(result);
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: "Failed to find Schedule" });
            }
},

    async AllSchedulesWithStudent (req, res){
        try {
            const result = await ScheduleModel.getAllSchedulesWithStudentInfo;
            res.status(200).json(result)
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "failed to get all Student"})
        }
    }

}
module.exports = ScheduleController;
