const express = require('express')
const app = express()
const port = 3000
const pool = require('./connectDB')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const Student = require('./routes/Student')
const Teacher = require('./routes/Teacher')
const Score = require('./routes/Score')
const Class_Student = require('./routes/ClassStudent')
const Class = require('./routes/Class')
const Attendance = require('./routes/Attendance')
app.use('/Student', Student)
app.use('/Teacher', Teacher)
app.use('/Score', Score)
app.use('/ClassStudent', Class_Student)
app.use('/Class', Class)
app.use('/Attendance', Attendance)


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
