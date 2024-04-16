const { query } = require("../connectDB");

const ClassModel = {
  async getEvents() {
    const queryText = await query('SELECT * FROM "Event" ORDER BY "E_DateUp" ASC ');
    return queryText.rows;
  },

};

module.exports = ClassModel;
