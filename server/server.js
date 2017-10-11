let express = require('express');
let app = express();
app.listen(3000);
//获取真实的轮播图数据
let sliders = require('./mock/sliders');
app.get('/sliders',function(req,res){
  res.json(sliders);
});
