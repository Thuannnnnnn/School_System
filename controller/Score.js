const ScoreModel = require('../model/Score')
const ScoreController = {
    async getAllScore(req, res) {
        try {
            const result = await ScoreModel.getAllscore()
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            throw new error("fail to getAll")
        }
    },
    async getScoreByMaSV(req, res) {
        const MaSV = req.body.MaSV;
        if (!MaSV) return res.sendStatus(400);
        else {
            try {
                const result = await ScoreModel.getScoreByMaSV(MaSV)
                res.status(200).json(result)
            } catch (error) {
                console.log(error)
                throw new error(`fail to get Score at ${MaSV}`)
            }
        }
    },
    async insertScore(req, res) {
        const scoreData = req.body.scoreData
        if (!scoreData) return res.sendStatus(400);
        else {
            try {
                const newScore = await ScoreModel.insertScore(scoreData)
                res.status(201).json(newScore)
            } catch (error) {
                console.log(error)
                throw new error(`fail to insert Score`)
            }
        }
    },
    async updateScore(req, res) {
        const scoreData = req.body.scoreData
        if (!scoreData) return res.sendStatus(400);
        else {
            try {
                const ScoreUpdated = await ScoreModel.updateScore(scoreData)
                res.status(201).json(ScoreUpdated)
            } catch (error) {
                console.log(error)
                throw new error(`fail to update Score`)
            }
        }
    },
    async deleteScore(req, res) {
        const MaSV = req.params.MaSV;
        if (!MaSV) return res.sendStatus(400);
        else {
            try {
                await ScoreModel.deleteScore(MaSV)
                res.status(200).send('Deleted Successfully!')
            } catch (error) {
                console.log(error)
                throw new error(`fail to delete Score`)

            }
        }
    }
}
module.exports = ScoreController