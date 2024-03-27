const express = require('express');
const app = express();
const port = 3000;
const pool = require('./connectDB');

app.get('/', async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT * FROM users');
    res.json(queryResult.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Có lỗi xảy ra khi truy vấn cơ sở dữ liệu');
  }
});
app.use(express.json()); // Middleware để parse JSON body

app.post('/add-user', async (req, res) => {
  const { full_name, birth_date, phone_number, email, password, address, user_role } = req.body;
  try {
    const queryText = `
      INSERT INTO users(full_name, birth_date, phone_number, email, password, address, user_role)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [full_name, birth_date, phone_number, email, password, address, user_role];
    const queryResult = await pool.query(queryText, values);
    res.json(queryResult.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Có lỗi xảy ra khi thêm người dùng');
  }
});
app.put('/update-user/:userId', async (req, res) => {
    const { userId } = req.params;
    const { full_name, birth_date, phone_number, email, address, user_role } = req.body;
    try {
      const queryText = `
        UPDATE users
        SET full_name = $1, birth_date = $2, phone_number = $3, email = $4, address = $5, user_role = $6
        WHERE user_id = $7
        RETURNING *;
      `;
      const values = [full_name, birth_date, phone_number, email, address, user_role, userId];
      const queryResult = await pool.query(queryText, values);
      if (queryResult.rows.length > 0) {
        res.json(queryResult.rows[0]);
      } else {
        res.status(404).send("Người dùng không tồn tại.");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Có lỗi xảy ra khi cập nhật người dùng.");
    }
  });
  app.delete('/delete-user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const queryText = 'DELETE FROM users WHERE user_id = $1 RETURNING *;';
      const values = [userId];
      const queryResult = await pool.query(queryText, values);
      if (queryResult.rows.length > 0) {
        res.json({ message: "Người dùng đã được xóa.", deletedUser: queryResult.rows[0] });
      } else {
        res.status(404).send("Người dùng không tồn tại.");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Có lỗi xảy ra khi xóa người dùng.");
    }
  });
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
