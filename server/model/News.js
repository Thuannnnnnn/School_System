const { query } = require("../connectDB");

const ClassModel = {
  async getNews() {
    const queryText = await query('SELECT * FROM "News" ORDER BY "N_dateUp" ASC LIMIT 5');
    return queryText.rows;
  },

};

module.exports = ClassModel;
