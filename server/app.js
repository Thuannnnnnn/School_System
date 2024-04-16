const express = require('express')
const app = express()
const port = 5000
const pool = require('./connectDB')
const cors = require('cors')
const session = require('express-session');
require('dotenv').config();
app.use(cors());
app.use(session({
  secret: process.env.ACCESS_TOKEN_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(express.json())
const Student = require('./routes/Student')
const Teacher = require('./routes/Teacher')
const Score = require('./routes/Score')
const Major = require('./routes/Major')
const Schedule = require('./routes/Schedule')
const Subject = require('./routes/Subject')
const Class_Student = require('./routes/ClassStudent')
const Class = require('./routes/Class')
const Attendance = require('./routes/Attendance')
const login = require('./routes/login')
const News = require('./routes/News')
const Events = require('./routes/Events')
app.use('/Student', Student)
app.use('/Teacher', Teacher)
app.use('/Score', Score)
app.use('/Major', Major)
app.use('/Schedule', Schedule)
app.use('/Subject', Subject)
app.use('/ClassStudent', Class_Student)
app.use('/Class', Class)
app.use('/Attendance', Attendance)
app.use('/auth', login)
app.get('/success', (req, res) => {
  res.send("GET Request Called")
})
app.use('/News', News)
app.use('/Events', Events)
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
