const { query } = require('../connectDB')
const teacherModel = {
  async getAllteacher () {
    const result = await query('select * FROM "Teacher"')
    return result.rows
  },
  async getTeacherByName (name) {
    const queryText = `SELECT * FROM "Teacher" WHERE "Te_Fullname" ILIKE $1;`
    const values = [`%${name}%`]
    try {
      const result = await query(queryText, values)
      return result.rows
    } catch (error) {
      console.log(error)
      throw new Error('Failed to retrieve teacher')
    }
  },
  async lastTe_id () {
    const queryText = `SELECT "Te_Id" FROM public."Teacher" ORDER BY "Te_Id" DESC LIMIT 1;`
    try {
      const result = await query(queryText)
      if (result.rows.length > 0) {
        return result.rows[0].Te_Id
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
      throw new Error('Failed to get last Teacher Id')
    }
  },

  async insertTeacher (teacherData) {
    const {
      Te_Fullname,
      Te_Sex,
      Te_Brithdate,
      Te_Age,
      Te_email,
      Te_address,
      Te_Phone,
      Te_Salary,
      Mj_id
    } = teacherData
    try {
      const lastTeId = await this.lastTe_id()
      const newTeId = generateNewTeId(lastTeId)
      const queryText = `insert INTO public."Teacher" ("Te_Id", "Te_Fullname", "Te_Sex", "Te_Birthdate", "Te_Age", "Te_Email", "Te_address", "Te_Phone", "Te_Salary", "Mj_id") 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;`
      const values = [
        newTeId,
        Te_Fullname,
        Te_Sex,
        Te_Brithdate,
        Te_Age,
        Te_email,
        Te_address,
        Te_Phone,
        Te_Salary,
        Mj_id
      ]

      const result = await query(queryText, values)
      return result.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Failed to insert Teacher')
    }
  },
  async updateTeacher (Te_Id, teacherData) {
    const {
      Te_Fullname,
      Te_Sex,
      Te_Brithdate,
      Te_Age,
      Te_email,
      Te_address,
      Te_Phone,
      Te_Salary,
      Mj_id
    } = teacherData
    const queryText = `UPDATE public."Teacher" 
    SET 
        "Te_Fullname" = $1, 
        "Te_Sex" = $2, 
        "Te_Birthdate" = $3, 
        "Te_Age" = $4, 
        "Te_Email" = $5, 
        "Te_address" = $6, 
        "Te_Phone" = $7, 
        "Te_Salary" = $8, 
        "Mj_id" = $9
    WHERE 
        "Te_Id" = $10
    
    RETURNING *;`
    const values = [
      Te_Fullname,
      Te_Sex,
      Te_Brithdate,
      Te_Age,
      Te_email,
      Te_address,
      Te_Phone,
      Te_Salary,
      Mj_id,
      Te_Id
    ]
    try {
      console.log('teID' + Te_Id)
      const result = await query(queryText, values)
      return result.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Failed to insert Teacher')
    }
  },
  async deleteTeacher (Te_Id) {
    const queryText = `Delete FROM Public."Teacher" Where "Te_Id" =$1`
    const value = [Te_Id]
    try {
      const res = await query(queryText, value)
      if (!res.rowCount)
        throw new Error(`Teacher with Te_Id=${Te_Id} not found`)
    } catch (error) {
      console.error(error)
      throw new Error('Failed to delete Teacher')
    }
  }
}

function generateNewTeId (lastTeId) {
  if (!lastTeId) {
    
    return 'TE001'
  } else {
    const lastTeNumber = parseInt(lastTeId.slice(2))
    const newTeNumber = (lastTeNumber + 1).toString().padStart(3, '0')
    return 'TE' + newTeNumber
  }
}

module.exports = teacherModel
