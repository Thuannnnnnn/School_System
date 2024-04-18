const express = require('express')
const router = express.Router()
const ScoreController = require('../controller/Score')
router.get('/getAll', ScoreController.getAllScore)
router.get('/get/:MaSV', ScoreController.getScoreByMaSV)
router.post('/insert', ScoreController.insertScore)
router.put('/update', ScoreController.updateScore)
router.delete('/delete/:MaSV', ScoreController.deleteScore)
module.exports = router;