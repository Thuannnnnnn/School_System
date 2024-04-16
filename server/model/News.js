const { query } = require("../connectDB");

const ClassModel = {
  async getNews() {
    const queryText = await query('SELECT * FROM "News" ORDER BY "N_dateUp" DESC LIMIT 5');
    return queryText.rows;
  },

};

module.exports = ClassModel;
