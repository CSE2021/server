//express 모듈 불러오기
const express = require("express");
//CORS 모듈 불러오기
const cors = require('cors');
//swagger 모듈 불러오기
const { swaggerUi, specs } = require('./swagger/swagger');
//CORS Option 세팅
const corsOpts = {
    origin : '*',

    method : [
        'GET',
        'POST',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};
//express 사용
const app = express();
//CORS를 정해준 옵션으로 사용
app.use(cors(corsOpts));
//swagger path 설정
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use(express.json());

var userRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var contentRouter = require('./routes/content');

app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/content', contentRouter);
  
// http listen port 생성 서버 실행
app.listen(3002, () => console.log("Server Start :)"));