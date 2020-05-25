var express = require('express');

var app = express();
var controller = require('./controller/controller');

app.set('view engine','ejs');//配置模版引擎
app.use(express.static('public'));//配置访问资源目录

controller(app);//配置路由

app.listen(3000,function(){
    console.log('Server running at port 3000')
})

