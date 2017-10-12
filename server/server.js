let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zfpx'
}));
app.listen(3000);
//获取真实的轮播图数据
let sliders = require('./mock/sliders');
let lessons = require('./mock/lessons');
app.use(function (req, res, next) {
  setTimeout(() => {
    next();
  }, 1000)
});
app.use(function (req, res, next) {
  //如果客户端要向服务器发送cookie的话，绝不对写*
  res.header('Access-Control-Allow-Origin', "http://localhost:8080");
  res.header('Access-Control-Allow-Header', "Content-Type");
  res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
  //允许跨域传cookie
  res.header('Access-Control-Allow-Credentials', "true");
  if (req.method == 'OPTIONS') {
    res.end('');
  } else {
    next();
  }
});
app.get('/sliders', function (req, res) {
  res.json(sliders);
});
app.get('/lessons', function (req, res) {
  let {offset, limit} = req.query;
  let clonedLessons = JSON.parse(JSON.stringify(lessons));
  let list = clonedLessons.list;
  for (let i = 1; i <= list.length; i++) {
    let lesson = list[i - 1];
    lesson.name = (i + parseInt(offset)) + '.' + lesson.name;
  }
  if (offset == 10) {
    clonedLessons.hasMore = false;
  }
  res.json(clonedLessons);
});
let users = [];
app.post('/login', function (req, res) {
  let user = req.body;
  let oldUser = users.find(item => item.mobile == user.mobile && item.password == user.password);
  if(oldUser){
    req.session.user = user;//把用户写入会话对象中
    res.json({code:0,success:'登录成功!'});
  }else{
    res.json({code:1,error:'登录失败!'});
  }
});
app.post('/register', function (req, res) {
  let user = req.body;//{mobile,password}
  let oldUser = users.find(item => item.mobile == user.mobile);
  if (oldUser) {
    res.json({code: 1, error: '用户名重复'});
  } else {
    users.push(user);
    //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
    res.json({code: 0, success: '用户注册成功'});
  }
});

