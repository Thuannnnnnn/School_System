const { query } = require('../connectDB')

const StudentModel = {
  async getAllStudent () {
    const result = await query('select * FROM "Student"')
    return result.rows
  },
  async insertStudent (studentData) {
    const {
      MaSV,
      St_Fullname,
      St_Age,
      St_Email,
      St_adress,
      St_Phone,
      St_Sex,
      St_BirthOfDate,
      St_DateBegin,
      Mj_id
    } = studentData
    const queryText = `
      INSERT INTO public."Student" ("MaSV", "St_Fullname", "St_Age", "St_Email", "St_adress", "St_Phone", "St_Sex", "St_BirthOfDate", "St_DateBegin", "Mj_id")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `
    const values = [
      MaSV,
      St_Fullname,
      St_Age,
      St_Email,
      St_adress,
      St_Phone,
      St_Sex,
      St_BirthOfDate,
      St_DateBegin,
      Mj_id
    ]

    try {
      const result = await query(queryText, values)
      return result.rows[0]
    } catch (error) {
      console.error(error)
      throw new Error('Failed to insert student')
    }
  },
  async updateStudent (MaSV, studentData) {
    const {
      St_Fullname,
      St_Age,
      St_Email,
      St_adress,
      St_Phone,
      St_Sex,
      St_BirthOfDate,
      St_DateBegin,
      Mj_id
    } = studentData
    const queryText = `
    UPDATE public."Student"
    SET  "St_Fullname" = $1, "St_Age" = $2, "St_Email" = $3, "St_adress" = $4, "St_Phone" = $5, "St_Sex" = $6, "St_BirthOfDate" = $7, "St_DateBegin" = $8, "Mj_id" = $9
    WHERE "MaSV" = $10
    RETURNING *;
  `
    const values = [
      St_Fullname,
      St_Age,
      St_Email,
      St_adress,
      St_Phone,
      St_Sex,
      St_BirthOfDate,
      St_DateBegin,
      Mj_id,
      MaSV
    ]
    try {
      const result = await query(queryText, values)
      return result.rows[0]
    } catch (error) {
      console.error(error)
      throw new Error('Failed to update student')
    }
  },
  async deleteStudenrt (MaSV) {
    const queryText = `Delete FROM Public."Student" Where "MaSV" =$1`
    const value = [MaSV]
    try {
      const res = await query(queryText, value)
      if (!res.rowCount) throw new Error(`student with MaSV=${MaSV} not found`)
    } catch (error) {
      console.error(error)
      throw new Error('Failed to update student')
    }
  }
};
module.exports = StudentModel
