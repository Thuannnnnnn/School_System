const { query } = require("../connectDB");

const ClassModel = {
  async getEvents() {
    const queryText = await query('SELECT * FROM "Event" ORDER BY "E_DateUp" DESC LIMIT 5');
    return queryText.rows;
  },

};

module.exports = ClassModel;
