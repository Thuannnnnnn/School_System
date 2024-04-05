const { query } = require("../connectDB");

const AttendanceModel = {
  async getAllAttendance() {
    const queryText = await query('SELECT * FROM "Attendance"');
    return queryText.rows;
  },

  async getAttendancebySubjectId(Sj_code) {
    const queryText = 'SELECT * FROM "Attendance" WHERE "Sj_code" LIKE $1';
    const values = [Sj_code];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to insert Attendance");
    }
  },

  async InsertAttendance(AttendanceData) {
    const  {At_id, At_Date, At_Status, MaSV, Cl_Id, Sj_code } = AttendanceData;

    const queryText = `INSERT INTO public."Attendance" (
            "At_Date",
            "At_Status"
            "MaSV",
            "Cl_Id",
            "Sj_code"
            )   
        VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
    const values = [At_Date, At_Status, MaSV, Cl_Id, Sj_code];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to insert Attendance");
    }
  },

  async UpdatedAttendance(AttendanceData) {
    const  { At_id, At_Date, At_Status, MaSV, Cl_Id, Sj_code } = AttendanceData;
    const queryText = `
    UPDATE "Attendance" 
    SET 
    "At_Date" = $2,
    "At_Status" = $3,
    "MaSV" = $4,
    "Cl_Id" = $5,
    "Sj_code" = $6
    WHERE 
        "At_id" = $1
    RETURNING *;
    `
    const values = [At_id, At_Date, At_Status, MaSV, Cl_Id, Sj_code ]

    try {
        const res = await query(queryText, values)
        return res.rows[0]
    } catch (error) {
        console.log(error)
      throw new Error('Failed to update Attendance')
    }

  },

  async detelteAttendance(At_id) {
    const queryText = `
    DELETE FROM "Attendance" 
    where 
        "At_id" = $1
    `
    const values = [At_id]

    try {
        const res = await query(queryText, values)
        if(!res.rowCount) throw new Error(`Attendance with from Class=${At_id}`)
    } catch (error) {
        console.error(error)
      throw new Error('Failed to update Attendance')
    }
  },
};

module.exports = AttendanceModel;
