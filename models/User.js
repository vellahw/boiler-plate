// mongoose 로드
const mongoose = require('mongoose')

// 스키마 생성 
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // spacebar(공백)를 없애주는 역할
        unique: 1 // 중복 불허용
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 회원 등급? 설정 (관리자/회원 구분을 위한..)
         type: Number,
         default: 0 // 디폴트값=0
    },
    image: String,
    token: { // 유효성 관리
        type: String
    }, 
    tokenExp: { // 토큰 유효기간
        type: Number
    }
})

// 스키마를 감싸줄 모델 생성
//mongoose.model('모델이름', 스키마)
const User = mongoose.model('User', userSchema)

// 모델을 다른 곳(다른 파일들)에서 쓰기 위해 모듈화
module.exports = { User }