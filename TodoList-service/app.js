const express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    routes = require('./routes');

app.set('view engine','ejs');//配置模版引擎
app.use(express.static('public'));//配置访问资源目录

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(3000,function(){
    console.log('Server running at port 3000');
});

