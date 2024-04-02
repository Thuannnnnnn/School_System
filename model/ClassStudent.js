const { query } = require("../connectDB");

const ClassStudentModel = {

  async getAllClassStudent() {
    const queryText = await query('select * from "Class_Student"');
    return queryText.rows;
  },
  async insertClassStudent(ClassStudentData) {
    const { MaSV, Cl_Id } = ClassStudentData;

    const queryText = ` INSERT INTO public."Class_Student" (
            "MaSV", 
            "Cl_Id"
            )
        VALUES ($1, $2) RETURNING *;`;
    const values = [MaSV, Cl_Id];
    try {
      const res = await query(queryText, values);
      return res.rows[0];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to insert Student");
    }
  },
  async getStudentByClassId(Cl_Id) {
    const queryText = `select * from "Class_Student" WHERE "Cl_Id" = $1`
    const values =[Cl_Id]
    try {
        const result = await query(queryText, values)
        return result.rows[0] 
    } catch (error) {
        console.log(error)
      throw new Error('Failed to retrieve Student')
    }
  },

  //chua toi uu, truong hop nhiu lop va nhiu sv trong do
  async changeStudent(ClassStudentData){
    const { MaSV1, MaSV2, Cl_Id1, Cl_Id2} = ClassStudentData;
    const queryText = `
    UPDATE "Class_Student"
    SET "Cl_Id" = CASE 
                 WHEN "MaSV" = $1 THEN (SELECT "Cl_Id" FROM "Class_Student" WHERE "MaSV" = $2)
                 WHEN "MaSV" = $2 THEN (SELECT "Cl_Id" FROM "Class_Student" WHERE "MaSV" = $1)
              END
    WHERE "MaSV" IN ($1, $2);
    `
    const values = [MaSV1, MaSV2]
    try {
        const res = await query(queryText, values)
        return res.rows[0]
      } catch (error) {
        console.log(error)
        throw new Error('Failed to update Score')
      }
  },

  async deleteStudentByMaSV(ClassStudentData) {
    const { MaSV, Cl_Id } = ClassStudentData;
    const queryText = `
    DELETE FROM "Class_Student" 
    where 
        "MaSV" = $1 and "Cl_Id" = $2
    RETURNING *;
    `
    const values = [MaSV, Cl_Id]

    try {
        const res = await query(queryText, values)
        if(!res.rowCount) throw new Error(`student with MaSV=${MaSV} from Class=${Cl_Id}`)
    } catch (error) {
        console.log(error)
        throw new Error('Failed to delete Student')
    }
  },

   //chua toi uu, truong hop nhiu lop va nhiu sv trong do
  async updateClassIdByStudentId(ClassStudentData) {
    const { MaSV, Cl_Id } = ClassStudentData;
    const queryText = `
    UPDATE "Class_Student" 
    SET 
        "Cl_Id" = $2 
    WHERE 
        "MaSV" = $1
    RETURNING *;
    `
    const values = [MaSV, Cl_Id]

    try {
        const res = await query(queryText, values)
        return res.rows[0]
    } catch (error) {
        console.log(error)
      throw new Error('Failed to update Class')
    }

  } 
};

module.exports = ClassStudentModel;
