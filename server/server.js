let express = require('express');
let app = express();
app.listen(3000);
//获取真实的轮播图数据
let sliders = require('./mock/sliders');
let lessons = require('./mock/lessons');
app.use(function(req,res,next){
  setTimeout(()=>{
    next();
  },1000)
});
app.use(function(req,res,next){
  //如果客户端要向服务器发送cookie的话，绝不对写*
  res.header('Access-Control-Allow-Origin',"http://localhost:8080");
  res.header('Access-Control-Allow-Header',"Content-Type");
  res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
  //允许跨域传cookie
  res.header('Access-Control-Allow-Credentials',"true");
  if(req.method =='OPTIONS'){
    res.end('');
  }else{
    next();
  }
});
app.get('/sliders',function(req,res){
  res.json(sliders);
});
app.get('/lessons',function(req,res){
  let {offset,limit } = req.query;
  let clonedLessons = JSON.parse(JSON.stringify(lessons));
  let list = clonedLessons.list;
  for(let i=1;i<=list.length;i++){
    let lesson = list[i-1];
    lesson.name = (i+parseInt(offset))+'.'+lesson.name;
  }
  if(offset == 10){
    clonedLessons.hasMore = false;
  }
  res.json(clonedLessons);
});
app.post('/login',function(req,res){

});
app.post('/register',function(req,res){

});

