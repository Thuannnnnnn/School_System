const { query } = require('../connectDB');

const SubjectModel = {
    async getAllSubject(){
        const result = await query ('SELECT * FROM "Subject"');
        return result.rows;
    },
    async insertSubject(data) {
        const { Sj_code, Sj_Name, Mj_id } = data;
        const queryText = `INSERT INTO public."Subject" ("Sj_code", "Sj_Name", "Mj_id")
        VALUES ($1,$2,$3)
            RETURNING *;`
        const values = [Sj_code, Sj_Name, Mj_id ];
        try {
            const res = await query(queryText, values);
            return res.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to insert Subject`);
        }
    },
    async UpdateSubject(data) {
        const { Sj_code, Sj_Name} = data;
        const queryText = `UPDATE public."Subject"
        SET
            "Sj_Name" = $1
        WHERE "Sj_code" = $2
        RETURNING *;
        `
        const values = [Sj_Name, Sj_code]; 
        try {
            const res = await query(queryText, values)
            return res.rows;
          } catch (error) {
            console.log(error)
            throw new Error('Failed to update Subject')
          }
    },
    async FindSubject(Sj_Name){
        const queryText = `SELECT * FROM "Subject" WHERE "Sj_Name" = $1;`;
        const values = [Sj_Name];
        try {
          const res = await query(queryText, values)
          if (!res.rowCount) throw new Error(` not found`)
          else {
            return res.rows;
          }
        } catch (error) {
          console.log(error)
          throw new Error('Failed to find Name')
        }
    }
}
module.exports = SubjectModel;