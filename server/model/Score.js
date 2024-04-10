const { query } = require('../connectDB')
const ScoreModel = {
  async getAllscore() {
    const result = await query('SELECT * FROM "Score" ')
    return result.rows
  },
  async getScoreByMaSV(MaSV) {
    const queryText = 'SELECT * FROM "Score" where "MaSV"=$1'
    const values = [MaSV]
    try {
      const result = await query(queryText, values)
      return result.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Failed to retrieve score')
    }
  },
  async insertScore(scoreData) {
    const {
      MaSV,
      Sj_code,
      PE,
      FE,
      Progress_Test,
      Assignment
    } = scoreData
    const queryText = `INSERT INTO public."Score" (
      "MaSV",
      "Sj_code",
      "PE",
      "FE",
      "Progress_Test",
      "Assignment"  
  )
VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`
    const values = [MaSV, Sj_code, PE, FE, Progress_Test, Assignment]
    try {
      const res = await query(queryText, values)
      return res.rows[0]

    } catch (error) {
      console.log(error)
      throw new Error('Failed to insert Score')
    }
  },
  async updateScore(scoreData) {
    const {
      MaSV,
      Sj_code,
      PE,
      FE,
      Progress_Test,
      Assignment
    } = scoreData
    const queryText = `UPDATE public."Score"
    SET 
        "Sj_code" = $2,
        "PE" = $3,
        "FE" = $4,
        "Progress_Test" = $5,
        "Assignment" = $6
    WHERE
        "MaSV" = $1
        RETURNING *;
    `
    const values = [MaSV, Sj_code, PE, FE, Progress_Test, Assignment]

    try {
      const res = await query(queryText, values)
      return res.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Failed to update Score')
    }
  },
  async deleteScore(MaSV) {
    const queryText = `DELETE FROM public."Score"
    WHERE
        "MaSV" =$1;
    `
    const values = [MaSV]
    try {
      const res = await query(queryText, values)
      if (!res.rowCount) throw new Error(`student with MaSV=${MaSV} not found`)


    } catch (error) {
      console.log(error)
      throw new Error('Failed to delete Score')
    }
  },
}

module.exports = ScoreModel
