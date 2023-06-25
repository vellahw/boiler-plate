const express = require('express')
const app = express()
const port = 5000

// dotenv를 이용하여 환경변수 설정
require('dotenv').config()
const pass = process.env.pass

// mongoDB 연결을 위한 mongoose 로드
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gksdnjs2:'+pass+'@test.ezjvus4.mongodb.net/?retryWrites=true&w=majority', {
}).then(()=>console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res)=> res.send('Hello World!'))

app.listen(port, ()=> console.log(`Example app listenig on port ${port}!`))