const express = require('express');
const MajorModel = require('../model/Major');

const MajorController = {
    async getAllmajor(req, res) {
        try {
            const result = await MajorModel.getAllmajor();
            res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get all majors" });
        }
    },
    async insertMajor(req, res) {
        const { Mj_Name } = req.body;
        if (!Mj_Name) {
            return res.status(400).send('Major name is name is required');
        } else {
            try {
                const newMajor = await MajorModel.insertMajor({ Mj_Name });
                res.status(201).json(newMajor);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: `Failed to insert Major` });
            }
        }
    },
    async updateMajor(req, res) {
        const { Mj_id, Mj_Name } = req.body;
        if (!Mj_id || !Mj_Name) {
            return res.status(400).send('Major ID and name are required');
        } else {
            try {
                const majorUpdate = await MajorModel.UpdateMajor(Mj_id, Mj_Name);
                if (majorUpdate) {
                    res.status(200).send(`Update successfully`);
                } else {
                    res.status(404).send(`Major not found`);
                }
            } catch (error) {
                console.error(error);
                res.status(500).send(`Failed to update Major`);
            }
        }
    },
    async deleteMajor(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send('Major ID is required');
        } else {
            try {
                const success = await MajorModel.deleteMajor(id);
                if (success) {
                    res.status(200).send(`Delete successfully`);
                } else {
                    res.status(404).send(`Major not found`);
                }
            } catch (error) {
                console.error(error);
                res.status(500).send(`Failed to delete Major`);
            }
        }
    }
};

module.exports = MajorController;
