const express = require('express');
const app = express();
const port = 3000;
const pool = require('./connectDB');
const cors = require('cors');

// Sử dụng middleware CORS
app.use(cors());

// Sử dụng middleware để parse JSON body
app.use(express.json());

const Student = require('./routes/Student');
app.use('/api',Student);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
