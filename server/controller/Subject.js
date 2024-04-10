const express = require('express');
const SubjectModel =require('../model/Subject')

const SubjectController = {
    async getAllSubject(req, res){
        try {
            const result = await SubjectModel.getAllSubject();
            res.status(200).json(result)
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "failed to get all Subjec"})
        }
    },
    async insertSubject(req, res){
        const data = req.body
        if(!data) return res.status(400).send(`required`);
        else{
            try {
                const newSubject = await SubjectModel.insertSubject(data);
                res.status(201).json(newSubject);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: `Failed to insert Schedule` });
            }
        }
    },
    async UpdateSubject(req, res){
        const data = req.body.data
        if(!data) return res.status(400).send();
        else{
            try {
                const SubjectUpdated = await SubjectModel.UpdateSubject(data);
                if (SubjectUpdated) {
                    res.status(200).send(`Update successfully`);
                } else {
                    res.status(404).send(`Subject not found`);
                }
            } catch (error) {
                console.error(error);
                res.status(500).send(`Failed to update Subject`);
            }
        }
    },
    async FindCodeSubject(req, res){
        const name = req.body.name;
        try {
            const Sj_name = await SubjectModel.FindSubject(name);
            res.status(200).json(Sj_name)
        } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
        }
    }
}
module.exports = SubjectController;