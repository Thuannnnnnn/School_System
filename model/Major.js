const { query } = require('../connectDB');

const MajorModel = {
    async getAllmajor() {
        const result = await query('SELECT * FROM "Major"');
        return result.rows;
    },
    async insertMajor(data) {
        const { Mj_Name } = data;
        const queryText = `INSERT INTO public."Major"("Mj_Name") VALUES ($1) RETURNING *;`;
        const values = [Mj_Name];
        try {
            const res = await query(queryText, values);
            return res.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to insert Major`);
        }
    },
    async UpdateMajor(id, Mj_Name) {
        const queryText = `UPDATE public."Major" SET "Mj_Name" = $2 WHERE "Mj_id" = $1 RETURNING *;`;
        const values = [id, Mj_Name];
        try {
            const res = await query(queryText, values);
            return res.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to update Major`);
        }
    },
    async deleteMajor(id) {
        const queryText = `DELETE FROM public."Major" WHERE "Mj_id" = $1;`;
        const values = [id];
        try {
            const res = await query(queryText, values);
            return res.rowCount > 0;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to delete Major');
        }
    }
};

module.exports = MajorModel;
