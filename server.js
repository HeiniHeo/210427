const express = require('express');
const bodyParser = require('body-parser');

const app = express();

function test(req,res,next){
    console.log('첫번째 실행입니다'+'hello world');
    next();
}

app.use(test);

app.use('/board',(req,res,next)=>{
    console.log('/board 실행중');
    next();
});

app.get('/',(req,res)=>{
    console.log('두번째 실행입니다');
    res.send('HELLO WORLD!');
});

app.get('/board',(req,res)=>{
    console.log('두번째 실행입니다.2');
    res.send('게시판 입니다.');
})

app.listen(3000,()=>{
    console.log('server starting port: 3000');
});