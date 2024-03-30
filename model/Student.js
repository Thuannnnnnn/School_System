const { query } = require('../connectDB');

const StudentModel = {
  async getAllStudent() {
    const result = await query('select * FROM "Student"');
    return result.rows;
  },

};

module.exports = StudentModel;