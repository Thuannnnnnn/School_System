const { query } = require("../connectDB");

const ClassModel = {
  async getAllClass() {
    const queryText = await query('SELECT * FROM "Class"');
    return queryText.rows;
  },

  async getClassbyTeacherId(Te_id) {
    const queryText = 'SELECT * FROM "Class" WHERE "Te_Id" LIKE $1';
    const values = [Te_id];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to insert Class");
    }
  },

  async InsertClass(ClassData) {
    const { Cl_Name, Te_Id } = ClassData;

    const queryText = `INSERT INTO public."Class" (
            "Cl_Name",
            "Te_Id"
            )   
        VALUES ($1, $2) RETURNING *;`;
    const values = [Cl_Name, Te_Id];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to insert Class");
    }
  },

  async UpdatedClass(ClassData) {
    const {Cl_Id, Cl_Name, Te_Id  } = ClassData;
    const queryText = `
    UPDATE "Class" 
    SET 
        "Cl_Name" = $2,
        "Te_Id" = $3
    WHERE 
        "Cl_Id" = $1
    RETURNING *;
    `
    const values = [Cl_Id, Cl_Name, Te_Id ]

    try {
        const res = await query(queryText, values)
        return res.rows[0]
    } catch (error) {
        console.log(error)
      throw new Error('Failed to update Class')
    }

  },

  async detelteClass(Cl_Id) {
    const queryText = `
    DELETE FROM "Class" 
    where 
        "Cl_Id" = $1
    `
    const values = [Cl_Id]

    try {
        const res = await query(queryText, values)
        if(!res.rowCount) throw new Error(`student with from Class=${Cl_Id}`)
    } catch (error) {
        console.error(error)
      throw new Error('Failed to update student')
    }
  },
};

module.exports = ClassModel;
