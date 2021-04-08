var express = require('express');
var app = express();
let cors = require('cors')

var indexRouter = require('./routes/index');
app.use(express.json());
app.use(cors())
app.use('/api', indexRouter);

// portnumber를 3002로 지정
const port = 3002;

// 3002번 포트넘버를 가진 서버 생성
app.listen(port, () => console.log(`listening on port ${port}!`));
