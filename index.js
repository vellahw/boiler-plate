const express = require('express')
const app = express()
const port = 5000

// dotenv를 이용하여 환경변수 설정
require('dotenv').config()
const pass = process.env.pass

// bodyParser 로드
const bodyParser = require('body-parser')
// bodyParser 옵션 설정
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// User 모델 가져오기
const { User } = require('./models/User')

// mongoDB 연결을 위한 mongoose 로드
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gksdnjs2:'+pass+'@test.ezjvus4.mongodb.net/?retryWrites=true&w=majority', {
}).then(()=>console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get('/', (req, res)=> res.send('Hello World!'))

// 회원가입을 위한 라우트 생성
app.post('/register', (req, res)=>{
  /* 회원가입 할 때 필요한 정보들을 클라이언트에서 가져오면
   그것들을 데이터베이스에 넣어준다. */
  const user = new User(req.body)
  
  user.save()  // save(): 몽고db에서 온 ..
      // 성공시 json 형식으로 success: true 보냄
      .then((userInfo) => res.status(200).json({ success: true }))
      // 에러발생 시 json 형식으로 success: false와 에러메세지를 보내줌
      .catch((err) => res.json({ success: false, err }));
})

app.listen(port, ()=> console.log(`Example app listenig on port ${port}!`))