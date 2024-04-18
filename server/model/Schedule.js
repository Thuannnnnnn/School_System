const { query } = require('../connectDB');

const ScheduleModel = {
  async getAllSchedule() {
    const result = await query('SELECT * FROM "Schedule"');
    return result.rows;
  },
  async insertSchedule(data) {
    const { Sc_DateBegin, Sc_DateEnd, Sc_Slot, Cl_Id } = data;
    const queryText = `INSERT INTO public."Schedule"
            ("Sc_DateBegin", "Sc_DateEnd", "Sc_Slot", "Cl_Id")
            VALUES ($1, $2, $3, $4)
            RETURNING *;`;
    const values = [Sc_DateBegin, Sc_DateEnd, Sc_Slot, Cl_Id];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to insert Schedule`);
    }
  },
  async UpdateSchedule(data) {
    const { Sc_id, Sc_DateBegin, Sc_DateEnd, Sc_Slot, Cl_Id } = data;
    const queryText = `UPDATE public."Schedule"
        SET
            "Sc_DateBegin" = $1,
            "Sc_DateEnd" = $2,
            "Sc_Slot" = $3,
            "Cl_Id" = $4
        WHERE "Sc_id" = $5
        RETURNING *;
        `
    const values = [Sc_DateBegin, Sc_DateEnd, Sc_Slot, Cl_Id, Sc_id];
    try {
      const res = await query(queryText, values)
      return res.rows[0]
    } catch (error) {
      console.log(error)
      throw new Error('Failed to update Schedule')
    }
  },
  async deleteSchedule(Sc_id) {
    const queryText = `DELETE FROM public."Schedule" where "Sc_id" = $1`
    const values = [Sc_id]
    try {
      const res = await query(queryText, values)
      if (!res.rowCount) throw new Error(` not found`)
    } catch (error) {
      console.log(error)
      throw new Error('Failed to delete Schedule')
    }
  },

  async findSchedule(studentId) {
    const queryText = `
    SELECT
    "Schedule"."Sc_DateBegin",
    "Schedule"."Sc_DateEnd",
    "Student"."MaSV",
    "Class"."Cl_Name",
    "Subject"."Sj_Name"
  FROM
    "Schedule"
  JOIN "Class" ON "Schedule"."Cl_Id" = "Class"."Cl_Id"
  JOIN "Class_Student" ON "Class"."Cl_Id" = "Class_Student"."Cl_Id"
  JOIN "Student" ON "Class_Student"."MaSV" = "Student"."MaSV"
  JOIN "Subject" ON "Student"."Mj_id" = "Subject"."Mj_id"
  WHERE "Class_Student"."MaSV" = $1;
    `;
    const values = [studentId];
    try {
      const result = await query(queryText, values);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to find Schedule');
    }
  }

}
module.exports = ScheduleModel;